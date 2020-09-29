<head>
    <meta charset="utf-8">
</head>
<template>
    <div class="dmg-config" style="display:inline-flex;">
        <div class="holder">
          <!-- canvas :id="canvas_object" class="canvas-style" v-on:mousedown="mouseDown"  /-->
          <canvas :id="canvas_object" class="canvas-style" resize/>
        </div>
        <div>
          <div>
            <div v-if="shape_data[shape].width">
              <label for="width">Width:</label><br />
              <input type="text" id="width" v-model.number="shape_data[shape].width" /><br />
            </div>
            <div v-if="shape_data[shape].height">
              <label for="height">Height:</label><br />
              <input type="text" id="height" v-model.number="shape_data[shape].height" /><br />
            </div>
            <div v-if="shape_data[shape].depth">
              <label for="depth">Depth:</label><br />
              <input type="text" id="depth" v-model.number="shape_data[shape].depth" /><br />
            </div>
            <div v-if="shape_data[shape].hasOwnProperty('noElements')">
              <label for="noElements">ElementsNr:</label><br />
              <input type="text" id="noElements" v-model.number="shape_data[shape].noElements" /><br />
            </div>

            <label for="color1">Main color:</label><br />
            <div class="color" @click="updateMaterial('color1.jpg', 0)">
              <img src="../../static/textures/color1.jpg" alt="color1" style="width:40px; height:30px;"/>
            </div>
            <div class="color" @click="updateMaterial('color2.jpg', 0)">Color2</div>
            <div class="color" @click="updateMaterial('color3.jpg', 0)">Color3</div>
            <div class="color" @click="updateMaterial('wood1.jpg', 0)">Color4</div>
            <div class="color" @click="updateMaterial('wood2.jpg', 0)">Color5</div>

            <label for="color2">2nd color:</label><br />
            <div class="color" @click="updateMaterial('color1.jpg', 1)">Color2</div>
            <div class="color" @click="updateMaterial('color2.jpg', 1)">Color2</div>
            <div class="color" @click="updateMaterial('color3.jpg', 1)">Color3</div>
            <div class="color" @click="updateMaterial('wood1.jpg', 1)">Color4</div>
            <div class="color" @click="updateMaterial('wood2.jpg', 1)">Color5</div>

            <label for="items">Items:</label><br />
            <div @mousedown="addItem(0)">
                <img src="../../static/textures/wood1.jpg" alt="wood1" draggable="false" style="width:40px; height:30px;"/>
            </div>
            <!--drawer
            <div style="border: 1px solid; width:50px; height:20px;">
              <div @mousedown="addItem(1)">Item 1</div>
            </div-->
            <!--lights-->
            <div style="border: 1px solid; width:60px; height:20px;">
              <div @mousedown="addItem(20)">Item 20</div>
            </div>
            <div style="border: 1px solid; width:60px; height:20px;">
              <div @mousedown="addItem(21)">Item 21</div>
            </div>
            <!--socket-->
            <div style="border: 1px solid; width:60px; height:20px;">
              <div @mousedown="addItem(30)">Item 30</div>
            </div>

            <div style="border: 1px solid; width:60px; height:20px;">
              <div @mousedown="addItem(10)">Item 10</div>
            </div>

            <div v-if="shape_data[shape].showDoorPopup !== -1">
              <div class="color" @click="updateSelectedDoor(0)">Left</div>
              <div class="color" @click="updateSelectedDoor(1)">Right</div>
              <div class="color" @click="updateSelectedDoor(2)">Middle</div>
              <div class="color" @click="shape_data[shape].showDoorPopup = -1;">Close</div>
            </div>
          </div>
        </div>
        <br>
    </div>
</template>
<script>
  import VueJquery from 'jquery';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import App from './utilities/app.js';

  let $ = VueJquery;
  //https://www.schrankwerk.de/konfigurator/full?id=8R8ZEHGFE7&returnTo=https://www.schrankwerk.de/stufenregal-weiss-modell-friedrich#tab_equipment
  export default {
    name: 'TabPage',
    components: {FontAwesomeIcon},
    created() {
      //console.log('Component has been created!');
    },
    data() {
      return {
        canvas_object: "canvas_object",
        app: null,
        shape: 0,
        // main image
        texture: 'color3.jpg',
        // second image (doors, etc)
        texture2: 'color3.jpg',
        shape_data: {
          0 : {
            width: 120,
            height: 80,
            depth: 16,
            // no of interior elements
            noElements: 2,
            // step between holes, position on y
            step: 3.2,
            // dimension of each element [[width0, height0], [width1, height1]]
            elementDims: [],
            // array of items
            items: [],
            // width of batten
            separator: 1.9,
            // type of handle
            handleType: 0,
            // legs height
            legsHeight: 0,
            // index of current model
            index: 0,
            // show debugger
            debug: false,
            // show door's popup
            showDoorPopup: -1
          },
          1: {
            width: 240,
            height: 140,
            depth: 60,
            noElements: 2,
            step: 4,
            elementDims: [],
            items: [],
            separator: 1.9,
            handleType: 0,
            legsHeight: 16,
            index: 1,
            debug: false
          }
        }
      }
    },
    watch: {
      shape_data: {
        handler (val) {
          if (this.app) this.app.updateScene();
        },
        deep: true
      }
    },
    methods: {
      updateSelectedDoor (handlerPosition) {
        if (this.app) this.app.updateSelectedDoor(handlerPosition);
      },
      updateMaterial (texture, index) {
        if (index === 0) {
          this.texture = texture;
        }
        else {
          this.texture2 = texture;
        }
        if (this.app) this.app.updateMaterials(this.texture, this.texture2);
      },
      addItem (itemID) {
        if (this.app !== null && this.app !== -1) {
          this.app.addItem(itemID);
        }
      },
      init (canvas) {
        if (this.app !== null && this.app !== -1) {
          this.app.dispose();
        }

        this.app = new App({
          canvas: canvas,
          options: this.shape_data[parseInt(this.shape)],
          absolutePath: '..'
        });

        if (this.app === -1) {
          console.error('Unable to create the 3d scene');
        }
      }
    },
    mounted() {
      const canvas = document.getElementById(this.canvas_object);

      this.init(canvas);

      // on resize event
      window.addEventListener('resize', () => {
        if (this.app) this.app.engine.resize();
      });

      // remove right click
      window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      }, false);

    },
  }
</script>


<style scoped>
    .holder {
        width: 900px;
        height: 900px;
        border: 1px solid black;
        border-radius: 1px;
        cursor: crosshair;
        display: block;
        /*margin: auto;*/
    }
    .canvas-style {
        width: 100%;
        height: 100%;
    }
</style>