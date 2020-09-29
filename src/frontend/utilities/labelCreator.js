import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { PBRMetallicRoughnessMaterial } from "@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { DynamicTexture } from "@babylonjs/core/Materials/Textures/dynamicTexture";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Color3 } from "@babylonjs/core/Maths/math.color";

export default class Label {
    constructor(scene) {
        this.scene = scene;
        this.options = scene.metadata;

        this.width = 20;

        switch (this.options.index) {
            case 0:
                this.object = this.initModel0();
                break;
            case 1:
                this.object = this.initModel1();
                break;
        }

        return this;
    }

    // create wardrobe
    initModel0 () {
        const model = new TransformNode('label0', this.scene);
        
        const lright = this.createLabel({
            width: this.width, 
            height: this.options.height, 
            rotationY: 0,
            value: this.options.height
        }, this.scene);
        
        lright.rotation.x = Math.PI / 2;
        lright.position.z = -this.options.depth;
        lright.position.y = this.options.height / 2;
        lright.position.x = (-this.options.width / 2 - this.width);
        lright.setParent(model);

        const lrightb = this.createLabel({
            width: this.width, 
            height: this.options.depth, 
            rotationY: 1,
            value: this.options.depth
        }, this.scene);
        
        lrightb.position.z = -this.options.depth / 2;
        lrightb.position.y = 0;
        lrightb.position.x = (-this.options.width / 2 - this.width);
        lrightb.setParent(model);

        const lfront = this.createLabel({
            width: this.width, 
            height: this.options.width, 
            rotationY: 2,
            value: this.options.width
        }, this.scene);
        
        lfront.rotation.y = Math.PI / 2;
        lfront.position.z = this.width * 2;
        lfront.setParent(model);
     
        let lfront2;
        const pitch = (this.options.width - (this.options.noElements + 1) * this.options.separator) / this.options.noElements;
        const pitch2 = (this.options.width - this.options.separator) / this.options.noElements;
        for (let i = 0; i < this.options.noElements; i++) {
            lfront2 = this.createLabel({
                width: this.width, 
                height: pitch,
                rotationY: 2,
                value: pitch
            }, this.scene);

            lfront2.rotation.y = Math.PI / 2;
            lfront2.position.z = this.width;
            lfront2.position.x = (-this.options.width / 2 + pitch2 * i + pitch2 / 2 + this.options.separator / 2);

            lfront2.setParent(model);
        }
       
        return model;
    }

    // create shelf
    initModel1 () {
        const model = new TransformNode('label1', this.scene);
        
        const lright = this.createLabel({
            width: this.width, 
            height: this.options.height, 
            rotationY: 0,
            value: this.options.height
        }, this.scene);
        
        lright.rotation.x = Math.PI / 2;
        lright.position.z = -this.options.depth;
        lright.position.y = this.options.height / 2;
        lright.position.x = (-this.options.width / 2 - this.width);
        lright.setParent(model);

        const lrightb = this.createLabel({
            width: this.width, 
            height: this.options.depth, 
            rotationY: 1,
            value: this.options.depth
        }, this.scene);
        
        lrightb.position.z = -this.options.depth / 2;
        lrightb.position.y = 0;
        lrightb.position.x = -this.options.width / 2 - this.width;
        lrightb.setParent(model);

        const lfront = this.createLabel({
            width: this.width, 
            height: this.options.width, 
            rotationY: 2,
            value: this.options.width
        }, this.scene);
        
        lfront.rotation.y = Math.PI / 2;
        lfront.position.z = this.width * 2;
        lfront.setParent(model);
     
        let lfront2;
        const pitch = (this.options.width - (this.options.noElements + 1) * this.options.separator) / this.options.noElements;
        const pitch2 = (this.options.width - this.options.separator) / this.options.noElements;
        for (let i = 0; i < this.options.noElements; i++) {
            lfront2 = this.createLabel({
                width: this.width, 
                height: pitch,
                rotationY: 2,
                value: pitch
            }, this.scene);

            lfront2.rotation.y = Math.PI / 2;
            lfront2.position.z = this.width;
            lfront2.position.x = (-this.options.width / 2 + pitch2 * i + pitch2 / 2 + this.options.separator / 2);

            lfront2.setParent(model);
        }
       
        return model;
    }

    // create a label
    createLabel (options) {
        // dimension of horizontal line
        const widthDim = options.width * 0.7;
        // dimension for text plane
        const lengthDim = 10.5;
        const l1 = [new Vector3(-widthDim / 2, 0, options.height / 2), new Vector3(widthDim / 2, 0, options.height / 2)];
        const l2 = [new Vector3(-widthDim / 2, 0, -options.height / 2), new Vector3(widthDim / 2, 0, -options.height / 2)];
        const l3 = [new Vector3(0, 0, -options.height / 2), new Vector3(0, 0, -lengthDim)];
        const l4 = [new Vector3(0, 0, options.height / 2), new Vector3(0, 0, lengthDim)];
        
        let line;
        if (options.height < 3) {
            line = new MeshBuilder.CreateLineSystem("lines", { lines: [l1, l2] }, this.scene);
        }
        else {
            line = new MeshBuilder.CreateLineSystem("lines", { lines: [l1, l2, l3, l4] }, this.scene);
        }
        
        line.color = Color3.FromHexString('#2d4d5e');
        
        const label = new MeshBuilder.CreatePlane('label', { width: 2 * lengthDim, height: 2 * lengthDim, sideOrientation: 2 }, this.scene);
        label.isPickable = false;
        switch (options.rotationY) {
            case 0:
                label.rotation.y = Math.PI;
                label.rotation.x = Math.PI / 2;
                label.position.x = 0;
                break;
            case 1:
                label.rotation.y = Math.PI;
                label.position.x = 0;
                break;
            case 2:
                label.rotation.y = Math.PI / 2;
                break;  
            default:
                break;
        }

        const material = new PBRMetallicRoughnessMaterial('labelMat', this.scene);
        const textureGround = new DynamicTexture('text', { width: lengthDim * 32, height: lengthDim * 32 }, this.scene);
        textureGround.hasAlpha = true;
        textureGround.drawText(options.value.toFixed(2) + ' cm', null, null, 'bold 64px Arial', '#2d4d5e', 'transparent', true);

        material.baseTexture = textureGround;
        material.opacityTexture = textureGround;
        material.freeze();
        label.material = material;
        label.doNotSyncBoundingInfo = true;
        label.setParent(line);
        
        return line;
    }

    update () {
        const kids = this.object.getDescendants();
        for (let i = 0; i < kids.length; i++) {
            kids[i].dispose(false, true);
        }
        this.object.dispose();

        switch (this.options.index) {
            case 0:
                this.object = this.initModel0();
                break;
            case 1:
                this.object = this.initModel1();
                break;
        }
    }
}
