import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";

import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { CubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { PBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";

import "@babylonjs/core/Rendering/edgesRenderer";
import '@babylonjs/core/Materials/Textures/Loaders/envTextureLoader';
import '@babylonjs/core/Helpers/sceneHelpers';
import 'pepjs/dist/pep';

// inspector - dev mode only
import "@babylonjs/core/Debug/debugLayer"; 
import "@babylonjs/inspector";

import Model from "./meshCreator";
import Label from './labelCreator';
import Area from './areaCreator';
import Item from './itemCreator';

import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";

export default class App {
    constructor({canvas, options, absolutePath}) {
        this.canvas = canvas;
        this.options = options;
        this.absolutePath = absolutePath;
        this.isDown = false;
        this.isMove = false;

        if (!Engine.isSupported()) {   
            return -1;
        }

        this.scene = this._initScene();
        this.scene.metadata = options;
        this.engine = this.scene.getEngine();

        // add 3d model template
        this.model = new Model(this.scene);
        
        // add labels for dimensions
        this.labels = new Label(this.scene);

        // add interior areas
        this.areas = [];
        for (let i = 0; i < this.options.noElements; i++) {
            this.areas.push(new Area(i, this.scene));
        }
        this.scene.areas = this.areas;

        // add interior items
        this.items = [];
        for (let i = 0; i < this.options.items.length; i++) {
            this.items.push(new Item(this.options.items[i].index, this.scene, this.options.items[i].data));
        }
        this.scene.items = this.items;

        this.scene.app = this;
        this.addEvents();

        return this;
    }

    _initScene () {
        const engine = new Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true }, false);

        const scene = new Scene(engine);
        scene.clearColor = new Color4(1, 1, 1, 1);
            
        // inspector - dev mode only
        if (this.options.debug) {
            scene.debugLayer.show({handleResize: true, overlay: true});
        }
 
        const camera = new ArcRotateCamera("Camera", Math.PI / 1.99, Math.PI / 2.1, 220, new Vector3(0, this.options.height / 2, 0), scene);
        camera.lowerRadiusLimit = 120;
        camera.upperRadiusLimit = 320;
        camera.lowerAlphaLimit = -0.5 * Math.PI;
        camera.upperAlphaLimit = Math.PI * 1.5;
        camera.wheelPrecision = 5;
        camera.panningSensibility = 0;
        camera.attachControl(this.canvas, false);

        var options = {
            environmentTexture: CubeTexture.CreateFromPrefilteredData(this.absolutePath + "/static/textures/studio.env", scene),
            createGround: false,
            createSkybox: false,
            cameraContrast:1.8,
            cameraExposure:1.6,
            toneMappingEnabled: true
        };

        scene.createDefaultEnvironment(options);
        // const helper = scene.createDefaultEnvironment(options);
        // helper.ground.alphaIndex = 1;

        /*const pipeline = new DefaultRenderingPipeline("pipeline", false, scene, scene.cameras);
        if (pipeline.isSupported) {
            pipeline.fxaaEnabled = true;

            if (pipeline.fxaaEnabled) {
                pipeline.fxaa.samples = 8;
            }

            pipeline.samples = 8;
        }*/

        this.createMaterials(scene);
        SceneLoader.ImportMesh('', this.absolutePath + '/static/3dobjects/', 'items.babylon', scene, m => {
            m.forEach(mesh => {
                mesh.setEnabled(false);
                //console.log(mesh.name);
            });
        });

        scene.executeWhenReady(() => {
            engine.runRenderLoop(() => {
                if (scene) {
                    scene.render();
                }
            });
        });
        
        return scene;
    }

    // reset camera position
    resetCamera () {
        this.scene.activeCamera.setTarget(new Vector3(0, this.options.height / 2, 0));
        this.scene.activeCamera.alpha = Math.PI / 1.99;
        this.scene.activeCamera.beta = Math.PI / 2.1;
        this.scene.activeCamera.radius = 220;
    }

    // dispose this engine
    dispose () {
        this.scene.dispose();
        this.scene = null;
        this.engine.stopRenderLoop();
        this.engine.dispose();
        this.engine = null;

        delete this;
    }

    createMaterials (scene) {
        // first material - for batten
        const material = new PBRMaterial('battenMat', scene);
        material.roughness = 0.9;
        material.metallic = 0.9;
        material.albedoTexture = new Texture(this.absolutePath + '/static/textures/color3.jpg', scene, false, true);
        material.freeze();

        // holeMaterial
        const holeMaterial = new PBRMaterial('holeMat', scene);
        holeMaterial.albedoColor = new Color3(0.5, 0.5, 0.5);
        holeMaterial.metallic = 0;
        holeMaterial.zOffset = -1;
        holeMaterial.freeze();

        // second material - for batten
        const material2 = new PBRMaterial('battenMat2', scene);
        material2.roughness = 0.9;
        material2.metallic = 0.9;
        material2.albedoTexture = new Texture(this.absolutePath + '/static/textures/color3.jpg', scene, false, true);
        material2.freeze();

        // 3rd material - for back batten
        const material3 = new PBRMaterial('battenMat3', scene);
        material3.roughness = 0.9;
        material3.metallic = 0.9;
        material3.albedoTexture = new Texture(this.absolutePath + '/static/textures/plywood.jpg', scene, false, true);
        material3.albedoTexture.uScale = 5;
        material3.albedoTexture.vScale = 5;
        material3.freeze();

        // white material - for back batten
        const whiteMat = new PBRMaterial('whiteMat', scene);
        whiteMat.roughness = 0.9;
        whiteMat.metallic = 0.9;
        whiteMat.albedoTexture = new Texture(this.absolutePath + '/static/textures/color3.jpg', scene, false, true);
        whiteMat.freeze();

        // hover material
        const hoverMat = new PBRMaterial('hoverMat', scene);
        hoverMat.albedoColor = new Color3(0.3, 0.3, 0.3);
        hoverMat.roughness = 0.9;
        hoverMat.metallic = 0.9;
        hoverMat.alpha = 0.3;
        hoverMat.freeze();
    }

    // update materials
    updateMaterials (texture, texture2) {
        let mainMat = this.scene.getMaterialByName('battenMat');
        if (mainMat) {
            mainMat.albedoTexture.dispose();
            mainMat.albedoTexture = new Texture(this.absolutePath + '/static/textures/' + texture, this.scene, false, true);
        }
        
        let material2 = this.scene.getMaterialByName('battenMat2');
        if (material2) {
            material2.albedoTexture.dispose();
            material2.albedoTexture = new Texture(this.absolutePath + '/static/textures/' + texture2, this.scene, false, true);
        }
    }

    // update handler position
    updateSelectedDoor (handler) {
        if (this.scene.clicked && this.scene.clicked.handle) {
            this.scene.clicked.doorHandler = parseInt(handler);
            if (this.scene.clicked.doorHandler == 2) {
                console.log('is 2');
                this.scene.clicked.handle.position.x = -5 ;
            }
            else {
                this.scene.clicked.handle.position.x = (this.scene.clicked.doorHandler == 0 ? 1 : -1) * this.scene.clicked.handle.positionOnModel;
            }
        }
    }

    // update the scene
    updateScene () {
        this.scene.activeCamera.setTarget(new Vector3(0, this.options.height / 2, 0));

        this.model.update();
        this.labels.update();

        if (this.options.noElements !== (this.areas.length - 1)) {
            // onchanging no of elements
            for (let i = 0; i < this.areas.length; i++) {
                this.areas[i].dispose();
            }

            this.areas = [];
            for (let i = 0; i < this.options.noElements; i++) {
                this.areas.push(new Area(i, this.scene));
            }
            this.scene.areas = this.areas;
        }
        else {
            for (let i = 0; i < this.areas.length; i++) {
                this.areas[i].update();
            }
        }
        
        for (let i = this.items.length - 1; i >=0 ; i--) {
            if (this.items[i]) {
                // item outside of model
                if (this.scene.areas[this.items[i].data.area]) {
                    this.scene.selected = this.items[i].object;
                    this.removeItem();
                }
                else {
                    // item outside of model
                    if (this.items[i].data.positionY > this.options.height) {
                        this.scene.selected = this.items[i].object;
                        this.removeItem();
                    }
                    else {
                        this.items[i].update();
                    }
                }
            }
        }

        // console.log(this);
    }

    addItem (param) {
        this.resetCamera();

        const item = new Item(param, this.scene);

        this.scene.clicked = null;
        this.scene.selected = item.object;
        this.scene.selected.position = new Vector3(-500, 0, 100);
        this.scene.activeCamera.detachControl(this.canvas, false);
    }

    addEvents () {
        this.dragPlane = new MeshBuilder.CreatePlane('dragPlane', { size: 1000 }, this.scene);
        this.dragPlane.isPickable = false;
        this.dragPlane.visibility = 0.01;

        const _this = this;
        this.scene.onPointerDown = () => {
            this.isDown = true;
            this.isMove = false;
        };

        this.scene.onPointerMove = evt => {
            if (this.isDown) {
                this.isDown = false;
                this.isMove = true;
            }

            if (_this.scene.selected) {
                if (!_this.scene.startingPoint) {
                    _this.scene.startingPoint = _this.getGroundPosition();
                    _this.scene.selected.position = _this.scene.startingPoint;
                }
        
                var current = _this.getGroundPosition(true);
                if (!current) {
                    return;
                }
        
                var diff = current.subtract(_this.scene.startingPoint);
                _this.scene.selected.position.addInPlace(diff);

                _this.scene.startingPoint = current;

                // hack for first mouse-up event which do not trigger
                if (evt.pressure === 0) {
                    _this.onPointerUp();
                }
            }
        };

        this.scene.onPointerUp = () => {
            this.isDown = false;
            this.onPointerUp();
        };
    }

    getGroundPosition (snap = false) {
        var _that = this;
        var pickinfo = _that.scene.pick(_that.scene.pointerX, _that.scene.pointerY, function (mesh) { return mesh === _that.dragPlane; });
    
        if (pickinfo.hit) {
            if (snap) {
                //console.log(pickinfo.pickedPoint.z);
                return new Vector3(_that.snapToGripX(pickinfo.pickedPoint.x), _that.snapToGripY(pickinfo.pickedPoint.y), pickinfo.pickedPoint.z);
            }

            return pickinfo.pickedPoint;
        }
        return null;
    }

    onPointerUp (addItem = false) {
        if (this.scene.startingPoint) {
            if (this.scene.selected.item.data.area < 0) {
                // it is placed outside of model - remove
                for (let i = this.scene.areas.length-1; i >=0; i--) {
                    for (let j = this.scene.areas[i].items.length-1; j >=0; j--) {
                        if (this.scene.areas[i].items[j] == this.scene.selected.item.data) {
                            this.scene.areas[i].items.splice(j, 1);
                        }
                    }
                }

                this.removeItem();
            }
            else {
                if (addItem) {
                    this.items.push(this.scene.selected.item);
                    this.options.items.push(this.scene.selected.item.data);
                }

                for (let i = this.scene.areas.length-1; i >=0; i--) {
                    for (let j = this.scene.areas[i].items.length-1; j >=0; j--) {
                        if (this.scene.areas[i].items[j] == this.scene.selected.item.data) {
                            this.scene.areas[i].items.splice(j, 1);
                        }
                    }
                }

                this.scene.areas[this.scene.selected.item.data.area].items.push(this.scene.selected.item.data);
            }

            for (let i = 0; i < this.areas.length; i++) {
                this.areas[i].update();
            }
        }

        this.scene.startingPoint = null;
        this.scene.activeCamera.attachControl(this.canvas, false);
        this.scene.selected = null;
    }

    removeItem () {
        if (this.scene.selected) {
            this.scene.selected.item.dispose();

            for (let i = this.items.length - 1; i >=0; i--) {
                if (this.items[i].scene === null) {
                    this.items.splice(i, 1);
                }
            }

            for (let i = this.options.items.length - 1; i >=0; i--) {
                if (!this.scene.areas[this.options.items[i].area]) {
                    this.options.items.splice(i, 1);
                }
            }

            this.scene.selected = null;
        }
    }

    snapToGripX (val) {
        const gridRes = (this.options.width - this.options.separator) / this.options.noElements;

        for (let i = 0; i < this.areas.length; i++) {
            if (this.scene.selected.item.object.position.y < this.scene.areas[i].minHeight) {
                continue;
            }
            if (this.scene.selected.item.object.position.y > this.scene.areas[i].maxHeight) {
                continue;
            }

            if (val < (this.areas[i].positionX + gridRes / 2) && val > (this.areas[i].positionX - gridRes / 2)) {
                this.scene.selected.item.data.area = i;
                if (this.scene.selected.item.data.type === 4) {
                    return val;
                }

                return this.areas[i].positionX;
            }
        }

        this.scene.selected.item.data.area = -1;
        return val;
    }

    snapToGripY (val) {
        if (this.scene.selected.item.data.area !== -1) {
            const step = this.scene.areas[this.scene.selected.item.data.area].step;
            let newVal = parseFloat((step * Math.round(val / step) + this.options.separator).toFixed(2));
            if (newVal < this.scene.areas[this.scene.selected.item.data.area].minHeight) {
                newVal = this.scene.selected.item.object.position.y;
            }
            if (newVal > this.scene.areas[this.scene.selected.item.data.area].maxHeight) {
                newVal = this.scene.selected.item.object.position.y;
            }

            if (this.scene.selected.item.data.type === 2) {
                let minDist = 100;
                let minElem = null;
                for (let i = 0; i < this.scene.areas[this.scene.selected.item.data.area].areas.length; i++) {
                    const surface = this.scene.areas[this.scene.selected.item.data.area].areas[i];
                    const val2 = new Vector3(this.scene.selected.item.object.position.x, val, this.scene.selected.item.object.position.z);
                    const dist = Vector3.Distance(surface.position, val2);
                    
                    if (minDist > dist) {
                        minDist = dist;
                        minElem = surface;
                    }
                }

                if (minElem) {
                    newVal =  minElem.position.y;
                    this.scene.selected.item.data.scalingX = minElem.height / (this.options.height);
                    const kid0 = this.scene.selected.item.object.getDescendants();
                    kid0[0].scaling.x = minElem.height / (this.options.height);
                    kid0[1].scaling.x = minElem.height / (this.options.height);
                }
            }

            if (this.scene.selected.item.data.type === 4) {
                this.scene.selected.item.data.positionY = parseFloat(val.toFixed(2));
                return val;
            }

            this.scene.selected.item.data.positionY = newVal;
            return newVal;
        }

        this.scene.selected.item.data.positionY = 0;
        return val;
    }
}
