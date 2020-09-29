import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { Color4 } from "@babylonjs/core/Maths/math.color";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Vector4 } from "@babylonjs/core/Maths/math.vector";

export default class Model {
    constructor(scene) {
        this.scene = scene;
        this.options = scene.metadata;

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
        const prevHole = this.scene.getMeshByName('mergedHoles');
        if (prevHole) {
            prevHole.dispose(false, false);
        }
        this.hole = this.createHoles();

        const model = new TransformNode('model0', this.scene);

        const width1 = (this.options.width - 2 * this.options.separator);
        const height1 = this.options.height;
        const depth1 = this.options.separator / 5;
        const bback = this.createBatten({ width: width1, height: height1, depth: depth1, fw: width1, fh: height1, custom: 0 });
        bback.position.y = this.options.height / 2;
        bback.position.z = (-this.options.depth + this.options.separator - this.options.separator / 10);
        bback.material = this.scene.getMaterialByName('battenMat3');
        bback.setParent(model);

        const width2 = (this.options.width - 2 * this.options.separator);
        const height2 = this.options.separator;
        const depth2 = this.options.depth - this.options.separator;
        const btop = this.createBatten({ width: width2, height: height2, depth: depth2, fw: depth2, fh: width2 });
        btop.position.y = (this.options.height - this.options.separator / 2);
        btop.position.z = (-this.options.depth + this.options.separator) / 2;
        btop.setParent(model);

        const width3 = (this.options.width - 2 * this.options.separator);
        const height3 = this.options.separator;
        const depth3 = this.options.depth - this.options.separator;
        const bbottom = this.createBatten({ width: width3, height: height3, depth: depth3, fw: depth3, fh: width3 });
        bbottom.position.y = (this.options.separator / 2 + this.options.legsHeight);
        bbottom.position.z = (-this.options.depth + this.options.separator) / 2;
        bbottom.setParent(model);
    
        const width4 = this.options.separator;
        const height4 = this.options.depth;
        const depth4 = this.options.height;
        const bleft = this.createBatten({ width: width4, height: height4, depth: depth4, fw: height4, fh: depth4 });
        this.addHoles(bleft, true, true);
        bleft.rotation.x = Math.PI / 2;
        bleft.position.y = this.options.height / 2;
        bleft.position.z = -this.options.depth / 2;
        bleft.position.x = (-this.options.width + this.options.separator) / 2;
        bleft.setParent(model);
    
        const width5 = this.options.separator;
        const height5 = this.options.depth;
        const depth5 = this.options.height;
        const bright = this.createBatten({ width: width5, height: height5, depth: depth5, fw: height5, fh: depth5 });
        this.addHoles(bright, false, true);
        bright.rotation.x = Math.PI / 2;
        bright.position.y = this.options.height / 2;
        bright.position.z = -this.options.depth / 2;
        bright.position.x = (this.options.width  - this.options.separator) / 2;
        bright.setParent(model);

        if (this.options.legsHeight > 0) {
            const width6 = this.options.separator;
            const height6 = this.options.legsHeight;
            const depth6 = (this.options.width - 2 * this.options.separator);
            const legs = this.createBatten({ width: width6, height: height6, depth: depth6, fw: height6, fh: depth6 });
            legs.rotation.y = Math.PI / 2;
            legs.position.y = this.options.legsHeight / 2;
            legs.position.z = -this.options.separator / 2;
            legs.setParent(model);
        }

        let bsep;
        const width7 = this.options.separator;
        const height7 = (this.options.depth - this.options.separator);
        const depth7 = (this.options.height - 2 * this.options.separator - this.options.legsHeight);
        const availableWidth = this.options.width - this.options.separator;
        const pitch = availableWidth / this.options.noElements;
        for (let i = 0; i < this.options.noElements - 1; i++) {
            bsep = this.createBatten({ width: width7, height: height7, depth: depth7, fw: height7, fh: depth7 });
            this.addHoles(bsep);
            this.addHoles(bsep, true);
            bsep.rotation.x = Math.PI / 2;
            bsep.position.y = (this.options.height + this.options.legsHeight) / 2;
            bsep.position.z = (-this.options.depth + this.options.separator) / 2;
            bsep.position.x = (-availableWidth / 2 + pitch * (i + 1));

            bsep.setParent(model);
        }

        return model;
    }

    // create shelf
    initModel1 () {
        const model = new TransformNode('model1', this.scene);
        
        const width2 = (this.options.width - 2 * this.options.separator);
        const height2 = this.options.separator;
        const depth2 = this.options.depth;
        const btop = this.createBatten({ width: width2, height: height2, depth: depth2, fw: depth2, fh: width2 });
        btop.position.y = (this.options.height - this.options.separator / 2);
        btop.position.z = -this.options.depth / 2;
        btop.setParent(model);
    
        const width3 = (this.options.width - 2 * this.options.separator);
        const height3 = this.options.separator;
        const depth3 = (this.options.depth - this.options.separator);
        const bbottom = this.createBatten({ width: width3, height: height3, depth: depth3, fw: depth3, fh: width3 });
        bbottom.position.y = (this.options.separator / 2 + this.options.legsHeight);
        bbottom.position.z = (-this.options.depth + this.options.separator) / 2;
        bbottom.setParent(model);
    
        const width4 = this.options.separator;
        const height4 = this.options.depth;
        const depth4 = this.options.height;
        const bleft = this.createBatten({ width: width4, height: height4, depth: depth4, fw: height4, fh: depth4 });
        bleft.rotation.x = Math.PI / 2;
        bleft.position.y = this.options.height / 2;
        bleft.position.z = -this.options.depth / 2;
        bleft.position.x = (-this.options.width + this.options.separator) / 2;
        bleft.setParent(model);
    
        const width5 = this.options.separator;
        const height5 = this.options.depth;
        const depth5 = this.options.height;
        const bright = this.createBatten({ width: width5, height: height5, depth: depth5, fw: height5, fh: depth5 });
        bright.rotation.x = Math.PI / 2;
        bright.position.y = this.options.height / 2;
        bright.position.z = -this.options.depth / 2;
        bright.position.x = (this.options.width  - this.options.separator) / 2;
        bright.setParent(model);

        if (this.options.legsHeight > 0) {
            const width6 = this.options.separator;
            const height6 = this.options.legsHeight;
            const depth6 = (this.options.width - 2 * this.options.separator);
            const legs = this.createBatten({ width: width6, height: height6, depth: depth6, fw: height6, fh: depth6 });
            legs.rotation.y = Math.PI / 2;
            legs.position.y = this.options.legsHeight / 2;
            legs.position.z = -this.options.separator / 2;
            legs.setParent(model);
        }

        let bsep;
        const width7 = this.options.separator;
        const height7 = (this.options.depth - this.options.separator);
        const depth7 = (this.options.height - 2 * this.options.separator - this.options.legsHeight);
        const availableWidth = this.options.width - this.options.separator;
        const pitch = availableWidth / this.options.noElements;
        for (let i = 0; i < this.options.noElements - 1; i++) {
            bsep = this.createBatten({ width: width7, height: height7, depth: depth7, fw: height7, fh: depth7 });
            bsep.rotation.x = Math.PI / 2;
            bsep.position.y = (this.options.height + this.options.legsHeight) / 2;
            bsep.position.z = (-this.options.depth + this.options.separator) / 2;
            bsep.position.x = (-availableWidth / 2 + pitch * (i + 1));

            bsep.setParent(model);
        }

        return model;
    }

    // create a batten
    createBatten (options) {
        let faceUV0 = new Array(6);
        for (let i = 0; i < faceUV0.length; i++){
            faceUV0[i] = new Vector4(0, 0, options.fw / options.fh, 1);
        }

        const batten = new MeshBuilder.CreateBox('batten', { width: options.width, height: options.height, depth: options.depth, faceUV: faceUV0 }, this.scene);
        batten.isPickable = false;

        if (options.hasOwnProperty('custom')) {
            const plane = new MeshBuilder.CreatePlane('batten', { width: options.width, height: options.height, depth: options.depth }, this.scene);
            plane.isPickable = false;
            plane.rotation.x = Math.PI;
            plane.position.z = options.depth;
            plane.setParent(batten);
            plane.material = this.scene.getMaterialByName('whiteMat');
            batten.material = this.scene.getMaterialByName('battenMat3');
        }
        else {
            batten.enableEdgesRendering();	
            batten.edgesWidth = 3.0;
            batten.edgesColor = new Color4(0.7, 0.7, 0.7, 1);
            batten.edgesRenderer._lineShader.zOffset = -2;
            batten.doNotSyncBoundingInfo = true;
            batten.material = this.scene.getMaterialByName('battenMat');
        }
        
        return batten;
    }

    createHoles () {
        const step = this.options.step;
        const minHeight = (this.options.legsHeight + this.options.separator / 2) + step;
        const maxHeight = (this.options.height - this.options.separator) - step;

        let holes = [];
        for (let i = minHeight; i <= maxHeight; i+=step) {
            const hole3 = new MeshBuilder.CreateDisc('hole3', { radius: 0.5, tessellation: 8, sideOrientation: 2 }, this.scene);
            hole3.rotation.y = Math.PI / 2;
            hole3.rotation.z = Math.PI / 2;
            hole3.position.z = i - (this.options.height + this.options.legsHeight - this.options.separator) / 2;
            holes.push(hole3);
        }

        const merged = Mesh.MergeMeshes(holes, true);
        merged.name = 'mergedHoles';
        merged.id = 'mergedHoles';
        merged.setEnabled(false);
        merged.isPickable = false;
        merged.material = this.scene.getMaterialByName('holeMat');
        merged.freezeWorldMatrix();
        merged.doNotSyncBoundingInfo = true;

        return merged;
    }

    addHoles (parent, inside = false, margins = false) {
        const hole1 = this.hole.createInstance('h1');
        hole1.position.y = (-this.options.depth / 2 + (margins === true ? this.options.separator : 0)) * 0.75;
        hole1.position.x = ((inside === true) ? 1: -1) * this.options.separator / 2;
        hole1.setParent(parent);
        const hole2 = this.hole.createInstance('h2');
        hole2.position.y = this.options.depth / 2 * 0.75;
        hole2.position.x = ((inside === true) ? 1: -1) * this.options.separator / 2;
        hole2.setParent(parent);
    }

    update () {
        this.object.dispose(false, false);

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
