import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Color4 } from "@babylonjs/core/Maths/math.color";
import { Vector4, Vector3 } from "@babylonjs/core/Maths/math.vector";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { ActionManager } from "@babylonjs/core/Actions/actionManager";
import { ExecuteCodeAction } from "@babylonjs/core/Actions/directActions";

export default class Item {
    constructor(indexParam, scene, data = null) {
        this.scene = scene;
        this.options = scene.metadata;
        this.data = data || {
            // type of item
            index: indexParam,
            // default height
            height: this.options.separator,
            // area where is placed
            area: -1,
            // position on Y axis
            positionY: 0,
            // scaling on X, used on doors
            scalingX: 1,
            // 0- inside(shelf), 1- has outside too(drawer), 2- only outside (doors)
            type: -1
        };

        switch (indexParam) {
            case 0:
                // shelf
                this.object = this.initItem0();
                this.data.type = 0;
                break;
            case 1:
                // drawer
                this.object = this.initItem1();
                this.data.type = 1;
                break;
            case 10:
                // door
                this.object = this.initItem10();
                this.data.type = 2;
                break;
            case 20:
                this.object = this.initItem('LED-Leuchte Pinot');
                this.data.type = 3;
                break;
            case 21:
                this.object = this.initItem('LED-Leuchte Durella');
                this.data.type = 3;
                break;
            case 30:
                this.object = this.initItem('Steckdose');
                //this.object.position.z = -this.scene.metadata.depth / 2;
                this.data.type = 4;
                break;
            default:
                break;
        }

        return this;
    }

    initItem0 () {
        // main parent which keep all 3d objects, in this case only one batten
        const model = new TransformNode('item', this.scene);
        model.item = this;

        // all 3d objects which compound the main object
        const pitch = (this.options.width - (this.options.noElements + 1) * this.options.separator) / this.options.noElements;
        const width0 = pitch;
        const depth0 = (this.options.depth - this.options.separator);
        let faceUV0 = new Array(6);
        for (let i = 0; i < faceUV0.length; i++){
            faceUV0[i] = new Vector4(0, 0, depth0 / width0, 1);
        }
        const batten = new MeshBuilder.CreateBox('batten', { width: width0, height: this.data.height, depth: depth0, faceUV: faceUV0 }, this.scene);
        batten.position.z = (-this.options.depth + this.options.separator) / 2;

        batten.enableEdgesRendering();	
        batten.edgesWidth = 3.0;
        batten.edgesColor = new Color4(0.7, 0.7, 0.7, 1);
        batten.edgesRenderer._lineShader.zOffset = -2; 
        batten.material = this.scene.getMaterialByName('battenMat');

        batten.setParent(model);

        // 3d object to show on hover
        const hover = new MeshBuilder.CreateBox('hover' + this.data.index, { width: width0, height: this.data.height * 2, depth: ((this.options.depth - this.options.separator)) * 1.02 }, this.scene);
        hover.isPickable = false;
        hover.position.z = (-this.options.depth + this.options.separator) / 2;
        hover.setEnabled(false);
        hover.material = this.scene.getMaterialByName('hoverMat');

        hover.setParent(model);
        model.hover = hover;
        
        // pop-up to show on rightclick
        this.addActionToElement(model, batten, hover, null);

        return model;
    }

    initItem1 () {
        // main parent which keep all 3d objects, in this case only one batten
        const model = new TransformNode('item', this.scene);
        model.item = this;

        let itemH = this.data.height;
        if (itemH === this.options.separator) {
            itemH = 20;
            this.data.height = itemH;
        }
        // all 3d objects which compound the main object
        const pitch = (this.options.width - (this.options.noElements + 1) * this.options.separator) / this.options.noElements;
        const width1 = pitch;
        const depth1 = (this.options.depth - this.options.separator);
        let faceUV1 = new Array(6);
        for (let i = 0; i < faceUV1.length; i++){
            faceUV1[i] = new Vector4(0, 0, depth1 / width1, 1);
        }
        const batten = new MeshBuilder.CreateBox('batten', { width: width1, height: this.options.separator, depth: depth1, faceUV: faceUV1 }, this.scene);
        batten.position.z = (-this.options.depth + this.options.separator) / 2;
        batten.position.y = itemH / 2;

        batten.enableEdgesRendering();	
        batten.edgesWidth = 3.0;
        batten.edgesColor = new Color4(0.7, 0.7, 0.7, 1);
        batten.edgesRenderer._lineShader.zOffset = -2; 
        batten.material = this.scene.getMaterialByName('battenMat');

        batten.setParent(model);

        const batten2 = batten.clone('batten');
        batten2.position.y = -itemH / 2;

        batten2.enableEdgesRendering();	
        batten2.edgesWidth = 3.0;
        batten2.edgesColor = new Color4(0.7, 0.7, 0.7, 1);
        batten2.edgesRenderer._lineShader.zOffset = -2;

        batten2.setParent(model);

        let faceUV2 = new Array(6);
        for (let i = 0; i < faceUV2.length; i++){
            faceUV2[i] = new Vector4(0, 0, 1, itemH * 0.98 / (width1 + this.options.separator * 0.8));
        }

        const batten21 = new MeshBuilder.CreateBox('batten', { width: depth1, height: itemH * 0.98, depth: this.options.separator, faceUV: faceUV2 }, this.scene);
        batten21.position.x = -(width1 - this.options.separator) / 2;
        batten21.position.z = -(this.options.depth - this.options.separator) / 2;
        batten21.rotation.y = Math.PI / 2;

        batten21.enableEdgesRendering();	
        batten21.edgesWidth = 3.0;
        batten21.edgesColor = new Color4(0.7, 0.7, 0.7, 1);
        batten21.edgesRenderer._lineShader.zOffset = -2;
        batten21.material = this.scene.getMaterialByName('battenMat');

        batten21.setParent(model);
 
        const batten22 = new MeshBuilder.CreateBox('batten', { width: depth1, height: itemH * 0.98, depth: this.options.separator, faceUV: faceUV2 }, this.scene);
        batten22.position.x = (width1 - this.options.separator) / 2;
        batten22.position.z = -(this.options.depth - this.options.separator) / 2;
        batten22.rotation.y = Math.PI / 2;

        batten22.enableEdgesRendering();	
        batten22.edgesWidth = 3.0;
        batten22.edgesColor = new Color4(0.7, 0.7, 0.7, 1);
        batten22.edgesRenderer._lineShader.zOffset = -2;
        batten22.material = this.scene.getMaterialByName('battenMat');

        batten22.setParent(model);

        const batten3 = new MeshBuilder.CreateBox('batten', { width: (width1 + this.options.separator * 0.8), height: itemH * 0.98, depth: this.options.separator, faceUV: faceUV2 }, this.scene);
        batten3.position.z = this.options.separator / 2;
        
        batten3.enableEdgesRendering();	
        batten3.edgesWidth = 3.0;
        batten3.edgesColor = new Color4(0.7, 0.7, 0.7, 1);
        batten3.edgesRenderer._lineShader.zOffset = -2;
        batten3.material = this.scene.getMaterialByName('battenMat2');

        batten3.setParent(model);

        // 3d object to show on hover
        const hover = new MeshBuilder.CreateBox('hover' + this.data.index, { width: (width1 + this.options.separator * 0.9), height: itemH * 1.2, depth: (this.options.depth) * 1.02 }, this.scene);
        hover.isPickable = false;
        hover.position.z = (-this.options.depth + 2 * this.options.separator) / 2;
        hover.setEnabled(false);
        hover.material = this.scene.getMaterialByName('hoverMat');

        hover.setParent(model);
        model.hover = hover;
        
        // pop-up to show on rightclick
        this.addActionToElement(model, batten, hover, null);
        this.addActionToElement(model, batten2, hover, null);
        this.addActionToElement(model, batten3, hover, null);

        // handle from import
        /*const handle = this.createHandle();
        handle.setParent(model);
        model.handle = handle;*/
        
        return model;
    }

    initItem10 () {
        // main parent which keep all 3d objects, in this case only one batten
        const model = new TransformNode('item', this.scene);
        model.item = this;

        // all 3d objects which compound the main object
        const pitch = (this.options.width - (this.options.noElements + 1) * this.options.separator) / this.options.noElements;
        const width = pitch;
        const depth = (this.options.depth - this.options.separator);
        let faceUV10 = new Array(6);
        for (let i = 0; i < faceUV10.length; i++){
            faceUV10[i] = new Vector4(0, 0, depth / width, 1);
        }

        const batten = new MeshBuilder.CreateBox('batten', { width: this.options.height, height: this.options.separator, depth: (pitch + this.options.separator), faceUV: faceUV10 }, this.scene);
        batten.position.z = this.options.separator / 2;
        batten.rotation.y = Math.PI / 2;
        batten.rotation.z = Math.PI / 2;

        batten.enableEdgesRendering();	
        batten.edgesWidth = 3.0;
        batten.edgesColor = new Color4(0.7, 0.7, 0.7, 1);
        batten.edgesRenderer._lineShader.zOffset = -2; 
        batten.material = this.scene.getMaterialByName('battenMat');

        batten.setParent(model);
        batten.scaling.x = this.data.scalingX;

        // 3d object to show on hover
        const hover = new MeshBuilder.CreateBox('hover' + this.data.index, { width: this.options.height, height: this.options.separator * 1.01, depth: (pitch + this.options.separator) * 1.05, faceUV: faceUV10 }, this.scene);
        hover.isPickable = false;
        hover.position.z = this.options.separator / 2;
        hover.rotation.y = Math.PI / 2;
        hover.rotation.z = Math.PI / 2;
        hover.setEnabled(false);
        hover.material = this.scene.getMaterialByName('hoverMat');

        hover.setParent(model);
        hover.scaling.x = this.data.scalingX;
        model.hover = hover;
        
        // pop-up to show on rightclick
        this.addActionToElement(model, batten, hover, null);

        // handle from import
        const mesh = this.scene.getMeshByName('Spiegeltür-Griff');
        const handle = mesh.clone();
        handle.setEnabled(true);
        handle.rotationQuaternion = null;
        handle.rotation.x = Math.PI / 2;
        handle.rotation.z = -Math.PI / 2;
        handle.position.x = width / 2 - 3;
        handle.position.y = -this.options.height / 2 + this.options.separator * 0.95;
        handle.position.z = 1;
        handle.positionOnModel = width / 2 - 3;
        handle.scaling = new Vector3(0.1, 0.1, 0.1);
        handle.setParent(model);
        model.handle = handle;
        model.doorHandler = 0;

        return model;
    }

    initItem (name) {
        // main parent which keep all 3d objects, in this case only one batten
        const model = new TransformNode('item', this.scene);
        model.item = this;

        const mesh = this.scene.getMeshByName(name);
        const batten = mesh.clone();
        batten.makeGeometryUnique();
        batten.isPickable = true;
        batten.name = name;
        batten.setEnabled(true);
        batten.rotationQuaternion = null;
        batten.scaling = new Vector3(0.1, 0.1, 0.1);
        batten.setParent(model);

        // 3d object to show on hover
        console.log(mesh);
        const hover = mesh.clone();
        hover.name = 'hover';
        hover.isPickable = false;
        hover.setEnabled(false);
        hover.rotationQuaternion = null;
        hover.scaling = new Vector3(0.11, 0.11, 0.11);
        hover.material = this.scene.getMaterialByName('hoverMat');

        hover.setParent(model);
        model.hover = hover;

        // pop-up to show on rightclick
        this.addActionToElement(model, batten, hover, null);

        return model;
    }

    addActionToElement (element, obj3d, hover, popup) {
        obj3d.actionManager = new ActionManager(this.scene);
        obj3d.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPickDownTrigger, evt => {
                if (evt.sourceEvent.button === 0) {
                    this.scene.selected = element;
                    this.scene.activeCamera.detachControl(this.scene.getEngine().getRenderingCanvas(), false);
                }
            })
        );
        obj3d.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnRightPickTrigger, () => {
                // popup.isVisible = true;
                console.log('popup right ', popup);
            })
        );
        obj3d.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPointerOverTrigger, () => {
                if (!this.scene.selected) {
                    hover.setEnabled(true);
                }
            })
        );
        obj3d.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPointerOutTrigger, () => {
                if (!this.scene.selected) {
                    hover.setEnabled(false);
                }
            })
        );
        obj3d.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPickUpTrigger, evt => {
                if (evt.sourceEvent.button === 0) {
                    this.scene.clicked = element;
                    if (element.item.data.type === 2) {
                        // on doors show popup
                        this.scene.metadata.showDoorPopup = element.doorHandler;
                    }
                }
            })
        );
    }

    update () {
        this.object.dispose(false, false);

        switch (this.data.index) {
            case 0:
                this.object = this.initItem0();
                break;
            case 1:
                this.object = this.initItem1();
                break;
            case 10:
                this.object = this.initItem10();
                break;
            case 20:
                this.object = this.initItem('LED-Leuchte Pinot');
                break;
            case 21:
                this.object = this.initItem('LED-Leuchte Durella');
                break;
            case 30:
                this.object = this.initItem('Steckdose');
                //this.object.position.z = -this.scene.metadata.depth / 2;
                break;
            default:
                break;
        }
        //console.log('update');
        this.object.position.x = this.scene.areas[this.data.area].positionX;
        this.object.position.y = this.data.positionY;
    }

    dispose () {
        this.object.dispose(false, false);

        this.scene = null;
        this.options = null;
        this.data = null;

        delete this;
    }
}