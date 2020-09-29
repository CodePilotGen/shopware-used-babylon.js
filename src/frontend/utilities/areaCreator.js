import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";

export default class Area {
    constructor(index, scene) {
        this.scene = scene;
        this.options = scene.metadata;
        this.index = index;
        this.minHeight = 0;
        this.maxHeight = 0;
        this.step = this.options.step;
        this.positionX = 0;
        
        this.items = [];
        this.areas = this.initArea();

        return this;
    }

    initArea () {
        this.minHeight = (this.options.legsHeight + this.options.separator) + this.step;
        this.maxHeight = (this.options.height - this.options.separator) - this.step;

        if (this.items.length !== 0)  {
            this.items.sort((a, b) => ((a.positionY > b.positionY) ? 1 : -1));
        }

        const pitch = (this.options.width - (this.options.noElements + 1) * this.options.separator) / this.options.noElements;
        const pitch2 = (this.options.width - this.options.separator) / this.options.noElements;
        
        this.positionX = (-this.options.width / 2 + pitch2 * this.index + pitch2 / 2 + this.options.separator / 2);
        let dimensions = [(this.options.separator + this.options.legsHeight), (this.options.height - this.options.separator)];

        let items = [];
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].type === 1) {
                items.push(this.items[i]);
            }
        }

        if (items.length !== 0) {
            for (let i = 0; i < items.length; i++) {
                const dim1 = items[i].positionY - items[i].height / 2;
                const dim2 = items[i].positionY + items[i].height / 2;
                dimensions.splice(dimensions.length - 1, 0, dim1);
                dimensions.splice(dimensions.length - 1, 0, dim2);
            }
        }
        
        let areas = [];
        for (let i = 0; i < dimensions.length; i+=2) {
            if (dimensions[i + 1]) {
                const height0 = dimensions[i + 1] - dimensions[i];
                const object = new MeshBuilder.CreateBox('surface_' + this.index, { 
                    width: pitch, 
                    height: height0, 
                    depth: this.options.separator
                }, this.scene);

                object.height = height0;
                object.position.x = (-this.options.width / 2 + pitch2 * this.index + pitch2 / 2 + this.options.separator / 2);
                object.position.y = dimensions[i] + height0 / 2;
                object.position.z = (-this.options.depth + this.options.separator);
                object.metadata = { dim: pitch.toFixed(2) + ' x ' + height0.toFixed(2) + ' x ' + (this.options.depth - this.options.separator).toFixed(2) + ' cm (WxHxD)' };  
                object.visibility = 0.01;
    
                object.area = this;
                object.index = i;
                areas.push(object);
            }
        }

        return areas;
    }

    update () {
        for (let i = 0; i < this.areas.length; i++) {
            this.areas[i].dispose(false, true);
        }
        this.areas = this.initArea();
    }

    dispose () {
        for (let i = 0; i < this.areas.length; i++) {
            this.areas[i].dispose(false, true);
        }

        this.scene = null;
        this.options = null;
        this.index = null;

        this.positionX = null;
        this.object = null;
        this.items = [];

        delete this;
    }
}