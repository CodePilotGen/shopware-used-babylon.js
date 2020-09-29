/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_Configurator_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/frontend/Configurator.vue */ "./src/frontend/Configurator.vue");
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    Configurator: _frontend_Configurator_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      /*
        customer_id: CUSTOMERDATA.customerId,
        template_id: CUSTOMERDATA.templateId,
        rest_api_domain: CUSTOMERDATA.restApiDomain
        */
      customer_id: '2',
      //template_id: '308',
      //template_id: '398',
      //template_id: '420',
      //template_id: '422',
      //template_id: '422',
      // template_id: '423',
      // template_id: '447',
      template_id: '449',
      //rest_api_domain: 'https://api.dmg-software.de',
      rest_api_domain: 'http://127.0.0.1:8000',
      dmgShopBaseUrl: ''
      //rest_api_domain: 'https://api.derproduktkonfigurator.de'
    };
  },

  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/frontend/Configurator.vue":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/frontend/Configurator.vue ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/entries */ "./node_modules/babel-runtime/core-js/object/entries.js");
/* harmony import */ var babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/core-js/object/values */ "./node_modules/babel-runtime/core-js/object/values.js");
/* harmony import */ var babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_core_js_math_sign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-runtime/core-js/math/sign */ "./node_modules/babel-runtime/core-js/math/sign.js");
/* harmony import */ var babel_runtime_core_js_math_sign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_math_sign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vue_html2canvas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-html2canvas */ "./node_modules/vue-html2canvas/index.js");
/* harmony import */ var vue_html2canvas__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_html2canvas__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var $ = jquery__WEBPACK_IMPORTED_MODULE_11___default.a;

/* harmony default export */ __webpack_exports__["default"] = (babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({
  name: 'TabPage',
  components: { FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"] },
  created: function created() {
    //console.log('Component has been created!');
  },
  data: function data() {
    return {
      //variableConditionCollection :[{name:"minValue", value: 0},{name:"maxValue", value: 0}, {name:"propertyToImageBox", value: 0},  {name:"unitValue", value: ""}, {name:"value", value: 0}, {name:"worning_message", value: ""}, {name:"uniqueId", value: ""},  {name:"price", value: 0}],
      variableConditionCollection: [{ name: "minValue", value: 0 }, { name: "maxValue", value: 0 }, { name: "unitValue", value: "" }, { name: "value", value: "" }, { name: "worning_message", value: "" }, { name: "price", value: 0 }, { name: "massm2", value: 0 }, { name: "mandatory_field", value: 0 }],
      shopCurrency: 'CHF',
      keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      dmgSidebarPrice: false,
      showDmgPreview: false,
      showSidebarList: false,
      initialDynamicalVariable: true,
      dmgTotalPrice: 0,
      pillsActive: 0,
      verticalWithin: 0,
      selectedMaterial: {},
      customerId: 2,
      //customerId: localStorage.getItem('customerId'),
      //restApiDomain: 'http://127.0.0.1:8000',
      //template_id: '447',
      //template_id: '449',
      //template_id: '423',
      //template_id: '435',
      template_id: '423',
      rest_api_domain: 'https://api.dmg-software.de',
      //rest_api_domain: 'http://127.0.0.1:8000',
      //customer_id: 2,
      massm2: 0,
      customer_id: 508391,
      templateName: "Vorlage fuer etwas 29",
      allGroups: [],
      propertyGroup: {},
      propertyValue: [],
      propertyValueOrg: [],
      allTemplateIds: [],
      allVariables: {},
      allMatrices: {},
      expressionsString: {},
      priceElements: {},
      configuratorElements: {},
      matrixRelations: {},
      matrixValues: {},
      matrixValue: null,
      imgPath: '',
      currentIndex: 0,
      checkTypeItem: {
        name: []
      },
      allTypeItem: {
        name: []
      },
      ruleGroup: [],
      statusPropertyCollection: [],
      elementForm: [],
      propertyItem: {},
      propertyValueAvalable: [],
      selectedPropertyDetail: [],
      messageWorning: [],
      messageWorningMandatory: [],
      firstActiveTab: '',
      canvasWidth: 300,
      canvasHeight: 150,
      canvasText: 'Test',
      size: 28,
      baseline: 'middle',
      foregroundColor: '#ff0000',
      backgroundColor: '#ffffff',
      canvasAngleText: 0,
      isTransparent: false,
      currentElemetFontId: null,
      currentFont: 'sans-serif',
      productBasePrice: 0,
      storeElementMultiplyFields: [],
      tmpPropertyGroup: {},
      tmpPropertyGroupDuplicate: {},
      configurationJson: [],
      dmgShopBaseUrl: "https://www.dmg-software.de/",
      dmgUploadedFiles: [],
      uniqueIDs: [],
      checkedCategories: {},
      lastSelectedPropertyColl: {},
      basisPriceByUnit: 0,
      notFilledFields: [],
      initPageLoading: true,
      startConfigurator: false,
      glassWeight: 0,
      realGlassWeight: 0,
      componentStatus: {}
    };
  },

  computed: {
    generateConfigurationJson: function generateConfigurationJson() {
      var self = this;
      var configJson = [];
      var groupsLocalStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(self.allGroups);
      var groupsLocal = JSON.parse(groupsLocalStr);
      var propertyGroupLocalStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(self.propertyGroup);
      var propertyGroupLocal = JSON.parse(propertyGroupLocalStr);
      var notFilledFields = [];

      groupsLocal.forEach(function (groupItem) {
        if (typeof propertyGroupLocal[groupItem.name] != "undefined") {
          propertyGroupLocal[groupItem.name].forEach(function (propertyGroupItem) {
            if (typeof self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)] != 'undefined') {
              propertyGroupItem["value"] = self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].value;
              propertyGroupItem["unitValue"] = self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].unitValue;
              propertyGroupItem["name"] = self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].propertyName;
              propertyGroupItem["visibility"] = self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].visible;
              propertyGroupItem["mandatory"] = self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].mandatory_field;
              configJson.push(propertyGroupItem);
              if (parseInt(self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].mandatory_field) == 1 && (self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].value == "0" || self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].value == "")) {
                notFilledFields.push({ name: self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].name, uniqueId: self.propertyValue[self.findIndexByID(propertyGroupItem.uniqueId)].uniqueId });
              }
            }
          });
        }
      });
      this.notFilledFields = notFilledFields;
      this.configurationJson = configJson;
      if (typeof dmgConfigurationJson != "undefined") {
        dmgConfigurationJson = this.encode(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(configJson));
      }

      if ($("#dmgconfigparam").length > 0) {
        $("#dmgconfigparam").attr("dmgconfigparam", this.encode(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(configJson)));
      }
      //localStorage.setItem("dmgConfig", JSON.stringify(configJson));
      return configJson;
    }
  },
  watch: {
    propertyValue: {
      handler: function handler(val, oldVal) {
        var self = this;
        /*
        if (document.readyState == "complete") {
          setTimeout(function(){self.setDmgAccordionTab()}, 800);
        }*/
      },
      deep: true
    },
    allGroups: {
      handler: function handler(val, oldVal) {
        //this.setDmgAccordionTab();
        /*
                  let self = this;
                  if (document.readyState == "complete") {
                    setTimeout(function(){self.setDmgAccordionTab()}, 2000);
                  }*/
      },
      deep: true
    },
    messageWorning: {
      handler: function handler(val, oldVal) {
        //console.log("messageWorning");
      },
      deep: true
    }
  },
  methods: {
    getClass: function getClass(property, layerIndex) {
      if (this.selectedMaterial && this.selectedMaterial[layerIndex] && this.selectedMaterial[layerIndex].id === this.findIndexByID(property.uniqueId)) {
        return 'selected';
      }
      return '';
    },
    roundEntry: function roundEntry(uniqueId) {
      /*
      let propertyValueStr = JSON.stringify(this.propertyValue[this.findIndexByID(uniqueId)]);
      let propertyValueLocal = JSON.parse(propertyValueStr);
      this.propertyValue.splice(this.findIndexByID(uniqueId), 1);
      propertyValueLocal.value  = 222;
      this.propertyValue.push(propertyValueLocal) ;*/
      var changingValue = this.propertyValue[this.findIndexByID(uniqueId)].value;
      if (changingValue.match(/^\d+(\.|\,)\d{1,2}?$/)) {
        changingValue = changingValue.replace(",", ".");
        this.propertyValue[this.findIndexByID(uniqueId)].value = Math.abs(Math.round(changingValue));
      } else if (babel_runtime_core_js_math_sign__WEBPACK_IMPORTED_MODULE_8___default()(changingValue) == -1 || babel_runtime_core_js_math_sign__WEBPACK_IMPORTED_MODULE_8___default()(changingValue) == -0) {
        this.propertyValue[this.findIndexByID(uniqueId)].value = Math.abs(Math.round(changingValue));
      }
    },
    setGlassWeightInShop: function setGlassWeightInShop() {
      var dmgGlassWeightDefined = true;
      var dmgRealGlassWeightDefined = true;
      eval("if(typeof glassWeight == 'undefined'){ dmgGlassWeightDefined = false; }");
      if (dmgGlassWeightDefined) {
        if (typeof dmgWeightGlass != "undefined") {
          dmgWeightGlass = eval("glassWeight");
        }

        if (typeof dmgEnergiePrice != "undefined") {
          dmgEnergiePrice = eval("energycost");
        }
      }

      eval("if(typeof realGlassWeight == 'undefined'){ dmgRealGlassWeightDefined = false; }");
      if (dmgRealGlassWeightDefined) {
        if (typeof dmgRealGlassWeight != "undefined" && !isNaN(realGlassWeight)) {
          dmgRealGlassWeight = eval("realGlassWeight");
        }
      }
    },
    updateMultiplyFields: function updateMultiplyFields() {
      this.setMultiplyFields();
    },
    setTabOnHidden: function setTabOnHidden(tabName) {
      var self = this;
      if (typeof this.$refs[tabName] != "undefined") {
        this.$refs[tabName][0].style.display = 'none';
        this.allGroups.forEach(function (groupItem, key) {
          if (groupItem.name == tabName) {
            self.allGroups[key] = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({}, self.allGroups[key], { active: 0 });
            //self.$set(self.allGroups[key],"active",0);
          }
        });
      }
    },
    setTabOnDisplay: function setTabOnDisplay(tabName) {
      var self = this;
      if (typeof this.$refs[tabName] != "undefined") {
        this.$refs[tabName][0].style.display = 'block';
        this.allGroups.forEach(function (groupItem, key) {
          if (groupItem.name == tabName) {
            //self.$set(self.allGroups[key],"active",1);
            self.allGroups[key] = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({}, self.allGroups[key], { active: 1 });
          }
        });
      }
    },
    isTabActive: function isTabActive(tabName) {
      var isActive = 0;
      this.allGroups.forEach(function (groupItem, key) {
        if (groupItem.name == tabName) {
          isActive = groupItem.active;
        }
      });
      return isActive;
    },
    changeCheckboxElement: function changeCheckboxElement(elementName, uniqueId) {
      this.propertyValue[this.findIndexByID(uniqueId)].value = this.checkedCategories[elementName];
    },
    checkIfMultiplyField: function checkIfMultiplyField(multiplyFields) {
      return babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(multiplyFields) != "[\"\"]" && multiplyFields.length != 0;
    },
    openInfoLightBox: function openInfoLightBox(uniqueId) {
      this.closeAllInfoBoxs();
      $("#dmg-info-box-" + uniqueId).insertAfter(".image-slider--container");
      $("#dmg-info-box-" + uniqueId).css({
        "display": "block"
      });
    },
    closeInfoLightBox: function closeInfoLightBox(uniqueId) {
      $("#dmg-info-box-" + uniqueId).css({
        "display": "none"
      });
    },
    findRelatedmultiplyField: function findRelatedmultiplyField(fieldName) {
      var relatedItem = null;
      babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(this.ruleGroup).forEach(function (keyObj) {
        if (keyObj.name == fieldName) {
          relatedItem = keyObj;
        }
      });
    },
    getSelectBoxElementRelatedTo: function getSelectBoxElementRelatedTo(uniqueId, propertyName, multiplyFields, relatedMultiplyFields) {
      var items = [];
      var allDisable = true;
      var selectBoxElement = this.getAwValues(uniqueId);
      selectBoxElement.forEach(function (fieldPropertyItem) {
        if (fieldPropertyItem.disable == 0 || typeof fieldPropertyItem.disable == "undefined") {
          items.push(fieldPropertyItem);
        }
      });
      if (propertyName == this.propertyValue[this.findIndexByID(uniqueId)].name) {
        if (this.$refs[propertyName] != undefined && this.$refs[propertyName].length > 0) {
          if (this.lastSelectedPropertyColl[relatedMultiplyFields[0]] != this.propertyValue[this.findIndexByID(relatedMultiplyFields[0])].value && this.propertyValue[this.findIndexByID(relatedMultiplyFields[0])].value != "") {
            //this.propertyValue[this.findIndexByID(uniqueId)].value = "0";
            if (typeof amount_of_drillings_value != "undefined") {
              amount_of_drillings_value = "0";
            }

            this.$refs[propertyName][0].options[0].selected = true;
            this.lastSelectedPropertyColl[relatedMultiplyFields[0]] = this.propertyValue[this.findIndexByID(relatedMultiplyFields[0])].value;
            var event = new Event("change");
            this.$refs[propertyName][0].dispatchEvent(event);
            //this.$root.$emit('clickedSomething', ["dsds", "fgggg"])
          }
        }
      }
      return items.length == 0 ? false : items;
    },
    getSelectBoxElement: function getSelectBoxElement(uniqueId) {
      var items = [];
      var allDisable = true;
      var selectBoxElement = this.getAwValues(uniqueId);
      selectBoxElement.forEach(function (fieldPropertyItem) {
        if (fieldPropertyItem.disable == 0 || typeof fieldPropertyItem.disable == "undefined") {
          items.push(fieldPropertyItem);
        }
      });

      return items.length == 0 ? false : items;
    },
    setPredefinedConfiguration: function setPredefinedConfiguration(configurationCollection) {
      var self = this;
      this.propertyValue.forEach(function (propertyValueItem) {
        configurationCollection.forEach(function (fieldPropertyItem) {
          if (propertyValueItem.parentId == fieldPropertyItem.id) {
            propertyValueItem.value = fieldPropertyItem.value;
            if (typeof propertyValueItem.multiplyFields != "undefined") {
              if (babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(propertyValueItem.multiplyFields) != '[""]' && propertyValueItem.multiplyFields.length > 0) {
                var groupNameApply = self.getGroupNameByPropertyId(fieldPropertyItem.id);
                self.setMultiplyFields(fieldPropertyItem.id, groupNameApply, propertyValueItem.multiplyFields, configurationCollection);
              }
            }
          }
        });
      });
    },
    getGroupNameByPropertyId: function getGroupNameByPropertyId(uniqueId) {
      var self = this;
      var fingingGroup = '';
      this.allGroups.forEach(function (groupItem) {
        self.propertyGroup[groupItem.name].forEach(function (propertyGroupItem) {
          if (propertyGroupItem.uniqueId == uniqueId) {
            fingingGroup = groupItem.name;
          }
        });
      });

      return fingingGroup;
    },
    removeDmgFile: function removeDmgFile(key) {
      this.dmgUploadedFiles.splice(key, 1);
    },
    getUoloadFileName: function getUoloadFileName(fileName) {
      var fileNamePosition = fileName.lastIndexOf("/");
      return fileName.substring(fileNamePosition + 1, fileName.length);
    },
    handleImageChange: function handleImageChange(evt, uniqueId) {
      var self = this;
      var uploadedFiles = evt.currentTarget.files;
      self.dmgUploadedFiles = uploadedFiles;

      var _loop = function _loop(i) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          var formData = new FormData();
          var imageUniqueName = Math.random().toString(36).substr(2, 9) + '-' + Math.random().toString(36).substr(2, 9) + '-' + uploadedFiles[i].name;
          formData.append('name', imageUniqueName);
          formData.append('extention', uploadedFiles[i].type);
          var knownFormat = 0;
          if (reader.result.match(/data:image\/(png|jpeg|jpg|dxf|dwg)/g)) {
            knownFormat = 1;
            formData.append('imageBlob', reader.result.replace(/^data:image\/(png|jpeg|jpg|dxf|dwg);base64,/, ''));
          } else if (reader.result.match(/data:application\/(octet-stream|vnd.openxmlformats-officedocument.wordprocessingml.document|pdf)/g)) {
            knownFormat = 1;
            formData.append('imageBlob', reader.result.replace(/^data:application\/(octet-stream|vnd.openxmlformats-officedocument.wordprocessingml.document|pdf);base64,/, ''));
          }
          if (knownFormat) {
            axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(self.dmgShopBaseUrl + "/widgets/uploadfile/dmgFile", formData).then(function (response) {
              self.propertyValue[self.findIndexByID(uniqueId)].value = response.data.data.imagePath;
            }).catch(function (error) {
              //console.log('FAILURE!!'+error);
            });
          }
        });
        reader.readAsDataURL(uploadedFiles[i]);
      };

      for (var i = 0; i < uploadedFiles.length; i++) {
        _loop(i);
      }
    },
    getDmgPropertyGroup: function getDmgPropertyGroup(groupName) {
      var propertyGroupLocalStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(this.tmpPropertyGroup[groupName].slice());
      var propertyGroupLocal = JSON.parse(propertyGroupLocalStr);
      if (!this.isEmpty(this.propertyGroup)) {
        var _propertyGroupLocalStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(this.propertyGroup.slice());
        propertyGroupLocal = JSON.parse(_propertyGroupLocalStr);
        this.propertyGroup = {};
      }
      return propertyGroupLocal;
    },
    isEmpty: function isEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }
      return babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(obj) === babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()({});
    },
    deleteElementInPropertyValue: function deleteElementInPropertyValue(deletingUniqueId) {
      var self = this;
      this.propertyValue.forEach(function (propertyValueItem, key) {
        if (propertyValueItem.uniqueId == deletingUniqueId) {
          self.propertyValue.splice(key, 1);
        }
      });
    },
    declareAdditionalJSVariables: function declareAdditionalJSVariables(ObjPropertyValue) {
      var createVariableString = '';
      this.variableConditionCollection.forEach(function (objItem) {
        var isVarDefiend = true;
        eval("if(typeof " + ObjPropertyValue.name + "_" + objItem.name + " == 'undefined'){ isVarDefiend = false; }");
        if (!isVarDefiend) {
          if (createVariableString.length == 0) {
            createVariableString += "var " + ObjPropertyValue.name + "_" + objItem.name + " = ''";
            // createVariableString += ", " + ObjPropertyValue.name +"_ve_"+ objItem.name + " = ''";
          } else {
            createVariableString += ", " + ObjPropertyValue.name + "_" + objItem.name + " = ''";
            //  createVariableString += ", " + ObjPropertyValue.name +"_ve_"+ objItem.name + " = ''";
          }
        }
      });

      if (createVariableString.length != 0) {
        createVariableString += ";";
        this.executeExpressionString(createVariableString, 'dmg-global-additinal-vars');
      }
    },
    setMultiplyFields: function setMultiplyFields(uniqueId, groupName, dmgFields, storedConfig) {
      var _this = this;

      var self = this;

      if (dmgFields.length > 0) {
        (function () {
          var propertyGroup = {};
          propertyGroup = self.tmpPropertyGroupDuplicate[groupName];
          //if(parseInt(self.propertyValue[self.findIndexByID(uniqueId)].value) == 0 ) {
          var multipliedElement = self.propertyValue[self.findIndexByID(uniqueId)];
          var multipliedElementList = self.propertyValue[self.findIndexByID(multipliedElement.uniqueId)][self.propertyValue[self.findIndexByID(multipliedElement.uniqueId)].data_type];
          dmgFields.forEach(function (fieldPropertyId) {
            for (var i = 1; i < multipliedElementList.length; i++) {
              self.deleteElementInPropertyValue(fieldPropertyId + "_" + multipliedElementList[i].value);
            }
          });
          //}

          var _loop2 = function _loop2(i) {
            dmgFields.forEach(function (fieldPropertyId) {
              if (typeof fieldPropertyId == "string") {
                var alreadyItemPositionId = self.findPositionItemByID(fieldPropertyId + '_' + i, self.configurationJson);
                var alreadyItem = self.configurationJson[alreadyItemPositionId];
                var ObjPropertyValueLocalStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(self.findIndexByIDAndColl(fieldPropertyId, self.storeElementMultiplyFields));
                var ObjPropertyValueLocal = JSON.parse(ObjPropertyValueLocalStr);
                ObjPropertyValueLocal.titel = ObjPropertyValueLocal.titel + ' ' + i;
                ObjPropertyValueLocal.expression = ObjPropertyValueLocal.expression;
                ObjPropertyValueLocal.name = ObjPropertyValueLocal.name + i;
                ObjPropertyValueLocal.uniqueId = ObjPropertyValueLocal.uniqueId + '_' + i;
                if (storedConfig != null) {
                  var _alreadyItem = self.findPreconfigItemByIdAndColl(fieldPropertyId + '_' + i, storedConfig);
                  if (_alreadyItem != null) {
                    ObjPropertyValueLocal.value = _alreadyItem.value;
                  }
                } else if (alreadyItem != null) {
                  ObjPropertyValueLocal.value = alreadyItem.value;
                }
                self.declareAdditionalJSVariables(ObjPropertyValueLocal);
                self.propertyValue.push(ObjPropertyValueLocal);

                var _ref = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(propertyGroup), [{ "uniqueId": ObjPropertyValueLocal.uniqueId, "name": ObjPropertyValueLocal.name + "_" + i }]);

                propertyGroup = _ref.slice(0);


                var deletingId = self.findPositionItemByID(fieldPropertyId, propertyGroup);
                if (deletingId != null) {
                  propertyGroup.splice(deletingId, 1);
                }
              }
            });
          };

          for (var i = 1; i <= parseInt(self.propertyValue[self.findIndexByID(uniqueId)].value); i++) {
            _loop2(i);
          }

          _this.propertyGroup[groupName] = propertyGroup;
        })();
      }
    },
    findPreconfigItemByIdAndColl: function findPreconfigItemByIdAndColl(findingItemId, collection) {
      var findingPosition = null;
      collection.forEach(function (value, index, self) {
        if (findingItemId == value.uniqueId) {
          findingPosition = value;
        }
      });
      return findingPosition;
    },
    findPositionIndexByID: function findPositionIndexByID(uniqueId) {
      var findingPosition = null;
      this.propertyValue.forEach(function (value, index, self) {
        if (uniqueId == value.uniqueId) {
          findingPosition = index;
        }
      });
      return findingPosition;
    },
    findIndexByID: function findIndexByID(uniqueId) {
      var findingPosition = null;
      this.propertyValue.forEach(function (value, index, self) {
        if (uniqueId == value.uniqueId) {
          findingPosition = index;
        }
      });
      return findingPosition;
    },
    findIndexByName: function findIndexByName(name) {
      var findingItem = null;
      this.propertyValue.forEach(function (value, index, self) {
        if (name == value.name) {
          findingItem = value;
        }
      });
      return findingItem;
    },
    findIndexByUniqueID: function findIndexByUniqueID(uniqueId) {
      var findingPosition = null;
      this.uniqueIDs.forEach(function (value, index, self) {
        if (uniqueId == value.uniqueId) {
          findingPosition = value.id;
        }
      });

      return findingPosition;
    },
    findCollectionByTitleInColl: function findCollectionByTitleInColl(findingItemTitel, collection) {
      var findingPosition = null;
      collection.forEach(function (value, index, self) {
        if (findingItemTitel == value.title) {
          findingPosition = value;
        }
      });
      return findingPosition;
    },
    findIndexByIDAndColl: function findIndexByIDAndColl(uniqueId, collection) {
      var findingPosition = null;
      collection.forEach(function (value, index, self) {
        if (uniqueId == value.uniqueId) {
          findingPosition = value;
        }
      });
      return findingPosition;
    },
    findPositionItemByID: function findPositionItemByID(findingItem, collectionItems) {
      var findingPosition = null;
      collectionItems.forEach(function (value, index, self) {
        if (findingItem == value.uniqueId) {
          findingPosition = index;
        }
      });

      return findingPosition;
    },
    setActive: function setActive(property, layerIndex) {
      this.selectedMaterial = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({}, this.selectedMaterial, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({}, layerIndex, property));
    },
    getImgWidthHeight: function getImgWidthHeight(imgWidth, imgHeight) {
      var widthHeightStr = '';

      if (parseInt(imgWidth) != 0 && imgWidth != '') {
        widthHeightStr = "width: " + imgWidth + "px;";
      }

      if (parseInt(imgHeight) != 0 && imgHeight != '') {
        widthHeightStr += " height: " + imgHeight + "px";
      }

      return widthHeightStr;
    },

    /*
    generateConfigurationJson() {
      let self = this;
       self.allGroups.forEach(function (groupItem) {
        self.tmpPropertyGroup[groupItem.name].forEach(function (propertyGroupItem) {
          //{{property.name}}: {{propertyValue[propertyGroup[groupName.name][propertyKey].id].value}}
          console.log("HUHU::"+JSON.stringify(propertyGroupItem));
        });
      });
    },*/
    checkMinMax: function checkMinMax(propertyKey, propertyId) {
      //checkMinMax(propertyKey,property.uniqueId)
      var errorItem = false;
      if (typeof this.groupName != "undefined") {
        if (this.propertyValue[this.propertyGroup[this.groupName.name][propertyKey].id].value < this.propertyValue[propertyId].minValue || this.propertyValue[this.propertyGroup[this.groupName.name][propertyKey].id].value > this.propertyValue[propertyId].maxValue) {
          errorItem = true;
        }
      }

      return errorItem;
    },
    getImageToProperty: function getImageToProperty(uniqueId) {
      var imgToProperty = "";
      var self = this;
      var propertyPositionId = this.findPositionIndexByID(uniqueId);
      if (propertyPositionId != null) {
        if (this.propertyValue[propertyPositionId].data_type == "selectBox" || this.propertyValue[propertyPositionId].data_type == "radioBox" || this.propertyValue[propertyPositionId].data_type == "checkBox" || self.propertyValue[propertyPositionId].data_type == "imageList") {
          self.propertyValue[propertyPositionId][self.propertyValue[propertyPositionId].data_type].forEach(function (objPropertyItem) {
            if (self.propertyValue[propertyPositionId].value == objPropertyItem.title) {
              imgToProperty = self.dmgShopBaseUrl + "/" + objPropertyItem.image_name;
            }
          });
        }
      }
      return imgToProperty;
    },
    getImageCollectionToProperty: function getImageCollectionToProperty(uniqueId, imageCollection) {
      var imgToProperty = "";
      var self = this;
      var propertyPositionId = this.findPositionIndexByID(uniqueId);
      if (propertyPositionId != null) {
        if (this.propertyValue[propertyPositionId].data_type == "selectBox" || this.propertyValue[propertyPositionId].data_type == "radioBox" || this.propertyValue[propertyPositionId].data_type == "checkBox" || self.propertyValue[propertyPositionId].data_type == "imageList") {
          imageCollection.forEach(function (objPropertyItem) {
            if (self.propertyValue[propertyPositionId].value == objPropertyItem.title) {
              imgToProperty = self.dmgShopBaseUrl + "/" + objPropertyItem.image;
            }
          });
        }
      }
      return imgToProperty;
    },
    getRelatedImgWidthHeight: function getRelatedImgWidthHeight(uniqueId, imageCollection) {
      var widthHeightStr = '';
      var self = this;
      var propertyPositionId = this.findPositionIndexByID(uniqueId);
      if (propertyPositionId != null) {
        if (this.propertyValue[propertyPositionId].data_type == "selectBox" || this.propertyValue[propertyPositionId].data_type == "radioBox" || this.propertyValue[propertyPositionId].data_type == "checkBox" || self.propertyValue[propertyPositionId].data_type == "imageList") {
          imageCollection.forEach(function (objPropertyItem) {
            if (self.propertyValue[propertyPositionId].value == objPropertyItem.title) {
              var imgWidth = objPropertyItem.width;
              var imgHeight = objPropertyItem.height;
              if (parseInt(imgWidth) != 0 && imgWidth != '') {
                widthHeightStr = "width: " + imgWidth + "px;";
              }

              if (parseInt(imgHeight) != 0 && imgHeight != '') {
                widthHeightStr += " height: " + imgHeight + "px";
              }
            }
          });
        }
      }

      return widthHeightStr;
    },
    drawPreview: function drawPreview() {
      var self = this;
      if (this.currentElemetFontId != undefined && this.currentElemetFontId != null) {
        if (this.currentFont = this.propertyValue[this.currentElemetFontId].value != "") {
          this.currentFont = this.propertyValue[this.currentElemetFontId].value;
        }
      }

      var cv = document.getElementById('canvas_object');
      if (cv != null) {
        var image = new Image();
        var darthVader = new Image();
        var yoda = new Image();
        darthVader.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
        yoda.src = 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg';
        image.src = 'http://www.w3school.com.cn/i/eg_tulip.jpg';
        image.addEventListener("load", function (a) {
          if (typeof angleText != "undefined") {
            self.canvasAngleText = angleText;
          }

          var h = a.target.height,
              w = a.target.width;

          var context = cv.getContext('2d');
          context.drawImage(image, 0, 0);
          context.drawImage(darthVader, 0, 0, 50, 50);
          context.drawImage(yoda, 100, 100, 70, 50);
          // start by saving the current context (current orientation, origin)
          context.save();

          console.log("self.canvasWidth" + self.canvasWidth);
          console.log("self.canvasHeight" + self.canvasHeight);

          // when we rotate we will be pinching the
          // top-left hand corner with our thumb and finger
          context.translate(self.canvasWidth / 2, self.canvasHeight / 2);

          // now rotate the canvas anti-clockwise by 90 degrees
          // holding onto the translate point
          //console.log(Math.PI/4);
          context.rotate(angleText);

          // specify the font and colour of the text
          context.font = self.size + 'px' + ' ' + self.currentFont;
          context.fillStyle = "#ffffff"; // red

          // set alignment of text at writing point (left-align)
          context.textAlign = "center";

          // write the text
          context.fillText("Dein Text", 0, 0);

          // now restore the canvas flipping it back to its original orientation
          context.restore();
        }, true);
        /*
        var imgsrc = cv.toDataURL();
        let storageFiles = cv.toDataURL("image/png");
         let imageCanvas = new Image();
        imageCanvas.src =  cv.toDataURL("image/png");
        //document.getElementById('newimg').appendChild(imageCanvas);
         if(document.getElementById("newimg") != null) {
            document.getElementById("newimg").src = cv.toDataURL("image/png");
        }
        */
        // console.log("sasa"+JSON.stringify(storageFiles));
      }
    },
    setCurrentFont: function setCurrentFont(currentFontId) {
      this.currentElemetFontId = currentFontId;
    },
    nextStep: function nextStep(tabId, nextTab) {
      var self = this;
      this.messageWorning = {};
      this.propertyGroup[tabId].forEach(function (objPropertyValue) {
        // if (self.propertyValue[objPropertyValue.id].mandatory_field == 1) {
        // if (self.propertyValue[objPropertyValue.id].value.length == 0) {
        self.messageWorning.push(self.propertyValue[objPropertyValue.id].name);
        //}
        // }
      });

      if (self.messageWorning.length == 0) {
        this.openTab(nextTab);
        /*
        $(".dmg-tab .dmg-tablinks").each(function () {
          console.log($(this).html().trim());
          if ($(this).html().trim() == nextTab) {
            $(this).addClass('active').siblings().removeClass('active');
          }
        });*/
      }
    },
    backStep: function backStep(backTab) {
      this.openTab(backTab);
      /*
      $(".dmg-tab .dmg-tablinks").each(function () {
        console.log($(this).html().trim());
        if ($(this).html().trim() == backTab) {
          $(this).addClass('active').siblings().removeClass('active');
        }
      });*/
    },

    isObject: function isObject(o) {
      return (typeof o === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(o)) == "object" && o !== null;
    },
    getTplCondition: function getTplCondition() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(this.rest_api_domain + "/api/loadTemplateCondition/" + this.template_id + "/" + this.customer_id).then(function (response) {
        var ruleGroupDe = response.data.propertyValueCondition;
        if (self.isObject(ruleGroupDe)) {
          babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(ruleGroupDe).forEach(function (keyObj) {
            var conditionEnt = self.decode(keyObj.condition);
            keyObj.condition = JSON.parse(conditionEnt);
            self.ruleGroup[self.ruleGroup.length] = keyObj;
          });
        }
      });
    },
    handleRadio: function handleRadio() {
      //function body
    },
    debugt: function debugt(q) {
      console.log(typeof q === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(q));
    },
    calculateMatrixEvent: function calculateMatrixEvent() {},
    getRadioIdById: function getRadioIdById(id, index) {
      return id + "" + index;
    },
    getCheckIdById: function getCheckIdById(id, index) {
      return id + "" + index;
    },
    addMatrices: function addMatrices(itemMatrix) {
      var createMatrixVariableString = "";
      var allMatrices = this.allMatrices;
      var i = this.allMatrices.length;
      var matrixRecords = itemMatrix.matrix;
      this.matrixRelations[itemMatrix.name] = itemMatrix.relations;

      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(matrixRecords).forEach(function (key) {
        if (allMatrices[itemMatrix.name + "_" + key] == undefined) {
          allMatrices[itemMatrix.name + "_" + key] = matrixRecords[key];
        }
      });
      this.allMatrices = allMatrices;
    },
    saveExpressionString: function saveExpressionString(gcmId, textJs) {
      this.expressionsString[gcmId] = textJs;
    },
    getImgInputValues: function getImgInputValues(propertyId) {
      var isAllowedInput = false;
      var allowedInput = this.getOc(propertyId);

      if (!this.isObjectEmpty(allowedInput)) {
        if (typeof allowedInput[propertyId] != "undefined") {
          allowedInput[propertyId].forEach(function (allowedValue) {
            if (allowedValue.value == false) {
              isAllowedInput = true;
            }
          });
        } else {
          allowedInput.forEach(function (allowedValue) {
            if (allowedValue.value == false) {
              isAllowedInput = true;
            }
          });
        }
      } else {
        isAllowedInput = true;
      }

      this.componentStatus[propertyId] = { active: isAllowedInput };

      return isAllowedInput;
    },
    getAwInputValues: function getAwInputValues(propertyId) {
      var self = this;
      var isAllowedInput = true;
      /*
      if(propertyId == "1589375707003") {
        console.log("dsdsd");
      }*/
      var allowedInput = this.getOc(propertyId);

      if (!this.isObjectEmpty(allowedInput)) {
        //allowedInput[propertyId][0].name
        if (typeof allowedInput[propertyId] != "undefined") {
          allowedInput[propertyId].forEach(function (allowedValue) {
            if (allowedValue.value == true) {
              isAllowedInput = false;
              self.propertyValue[self.findIndexByID(propertyId)].value = "";
            }
          });
        } else {
          allowedInput.forEach(function (allowedValue) {
            if (allowedValue.value == true) {
              isAllowedInput = false;
              self.propertyValue[self.findIndexByID(propertyId)].value = "";
            }
          });
        }
      }

      return isAllowedInput;
    },
    checkFieldHasValues: function checkFieldHasValues(propertyId) {
      var self = this;
      var isAllowedInput = true;

      if (this.propertyValue[this.findIndexByID(propertyId)].data_type == "selectBox" || this.propertyValue[this.findIndexByID(propertyId)].data_type == "radioBox" || this.propertyValue[this.findIndexByID(propertyId)].data_type == "checkBox" || self.propertyValue[this.findIndexByID(propertyId)].data_type == "imageList") {
        var _isAllowedInput = this.getSelectBoxElement(propertyId);
      } else {
        var allowedInput = this.getOc(propertyId);
        if (!this.isObjectEmpty(allowedInput)) {
          isAllowedInput = false;
        }
      }

      return isAllowedInput;
    },
    isObjectEmpty: function isObjectEmpty(obj) {
      return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(obj).length === 0;
    },
    getAwValues: function getAwValues(uniqueId) {
      var tmpList = [];
      var self = this;
      var componentStatus = true;
      var localValueList = this.propertyValue[this.findIndexByID(uniqueId)][this.propertyValue[this.findIndexByID(uniqueId)]["data_type"]].slice();
      var localUniqueParentId = null;
      if (uniqueId.lastIndexOf("_") != -1) {
        var uniqueParentIdPositionNumber = uniqueId.lastIndexOf("_");
        localUniqueParentId = uniqueId.substring(0, uniqueParentIdPositionNumber);
      } else {
        localUniqueParentId = uniqueId;
      }

      var availableValue = this.getOc(localUniqueParentId);
      var localAllowedValuesCmpStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(availableValue);
      var localAllowedValuesCmp = JSON.parse(localAllowedValuesCmpStr);

      if (typeof availableValue[localUniqueParentId] != "undefined") {

        localAllowedValuesCmp[localUniqueParentId].forEach(function (translatedItem, translatedItemKey) {
          translatedItem.name = localValueList[translatedItemKey].title;
        });

        localValueList.forEach(function (orgValueItem) {
          localAllowedValuesCmp[localUniqueParentId].forEach(function (allowedValue) {
            if (allowedValue.name == orgValueItem.title) {
              var tmpItem = {
                "price": null,
                "title": null,
                "value": null,
                "procenttype": null,
                "uniqueId": null,
                "image_name": null,
                "image_width": null,
                "image_height": null
              };
              if (allowedValue.value == false) {
                tmpItem.price = orgValueItem.price;
                tmpItem.title = orgValueItem.title;
                tmpItem.value = orgValueItem.value;
                tmpItem.uniqueId = orgValueItem.uniqueId;
                tmpItem.image_name = orgValueItem.image_name;
                tmpItem.image_width = orgValueItem.image_width;
                tmpItem.image_height = orgValueItem.image_height;
                tmpItem.disable = 0;
                tmpList.push(tmpItem);
              } else {
                tmpItem.price = orgValueItem.price;
                tmpItem.title = orgValueItem.title;
                tmpItem.value = orgValueItem.value;
                tmpItem.uniqueId = orgValueItem.uniqueId;
                tmpItem.image_name = orgValueItem.image_name;
                tmpItem.image_width = orgValueItem.image_width;
                tmpItem.image_height = orgValueItem.image_height;
                tmpItem.disable = 1;
                if (Array.isArray(self.propertyValue[self.findIndexByID(uniqueId)].value)) {
                  self.propertyValue[self.findIndexByID(uniqueId)].value.forEach(function (selectedItem, key) {
                    if (selectedItem == orgValueItem.title) {
                      self.propertyValue[self.findIndexByID(uniqueId)].value.splice(key, 1);
                    }
                  });
                } else if (self.propertyValue[self.findIndexByID(uniqueId)].value == orgValueItem.title) {
                  //self.propertyValue[self.findIndexByID(uniqueId)].value = "";
                }
                tmpList.push(tmpItem);
              }
            }
          });
        });
      }

      if (tmpList.length != 0) {
        componentStatus = false;
        tmpList.forEach(function (allowedValueItem) {
          if (allowedValueItem.disable == 0) {
            componentStatus = true;
          }
        });
      }

      this.componentStatus[uniqueId] = { active: componentStatus };

      return tmpList.length == 0 ? localValueList : tmpList;
    },
    getConditionValueForMultiplyChoices: function getConditionValueForMultiplyChoices(conditionValue, passedValues) {
      var conditionFulfilled = "";
      for (var i = 0; i < conditionValue.length; i++) {
        if (conditionFulfilled.length == 0) {
          conditionFulfilled = eval(conditionValue[i].value == passedValues.includes(conditionValue[i].name));
        } else {
          conditionFulfilled += " && " + eval(conditionValue[i].value == passedValues.includes(conditionValue[i].name));
        }
      }
      return conditionFulfilled;
    }
    /*
    getConditionValueForMultiplyChoices(conditionValue, passedValues) {
      let conditionFulfilled= true;
      for(let i =0; i < conditionValue.length; i++ ) {
        if(passedValues.includes(conditionValue[i].name) != conditionValue[i].value) {
          conditionFulfilled= false;
        }else if(passedValues.includes(conditionValue[i].name) && !conditionValue[i].value) {
          conditionFulfilled= false;
        }
      }
      return conditionFulfilled;
    }*/
    ,
    setAvailableValue: function setAvailableValue(allowedValueColl, tmpAllowedValueColl) {
      if (allowedValueColl.length > 0) {
        for (var i = 0; i < allowedValueColl.length; i++) {
          if (tmpAllowedValueColl[i].value) {
            allowedValueColl[i].value = true;
          }
        }
      } else {
        allowedValueColl = tmpAllowedValueColl;
      }

      return allowedValueColl;
    },
    isJson: function isJson(str) {
      try {
        if (typeof str == "string") {
          JSON.parse(str);
        }
      } catch (e) {
        return false;
      }

      return true;
    },
    getOc: function getOc(passedPropertyParentId) {
      var self = this;
      var allowedPropertyValue = {};
      var localRuleGroup = this.ruleGroup.slice();

      localRuleGroup.forEach(function (keyObj, valueObj) {
        if (keyObj.propertyParentId == passedPropertyParentId) {
          /*
          if(passedPropertyParentId == "1589375707003") {
            console.log("dsdsd");
          }*/
          keyObj["condition"].forEach(function (consitionItemObj) {
            var propertyParentId = null;
            var conditionStr = "";
            var isMultiplyCondition = false;
            var multiplyConditionStr = "";
            var isMultiplyTargetValue = false;
            var multiplyConditionOperation = "";

            consitionItemObj["condition"].forEach(function (subConsitionItemObj, key) {
              var multiplyConditionLacalStr = "";
              var tmpAllowedPropertyValue = null;
              var selectedElFromComp = null;

              if (self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].data_type == 'checkBox' && self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value != "") {
                if (typeof self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value == "string") {
                  isMultiplyTargetValue = isMultiplyTargetValue ? isMultiplyTargetValue : eval("Array.isArray(" + self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value + ")");
                } else if (Array.isArray(self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value)) {
                  isMultiplyTargetValue = isMultiplyTargetValue ? isMultiplyTargetValue : Array.isArray(self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value);
                }
              }
              //isMultiplyTargetValue = isMultiplyTargetValue ? isMultiplyTargetValue : Array.isArray(self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value);
              if (subConsitionItemObj.relationalCondition != null) {
                multiplyConditionOperation = subConsitionItemObj.relationalCondition;
              }

              if (subConsitionItemObj.conditionBy == 5 && typeof self.componentStatus[subConsitionItemObj.parentUniqueId] != "undefined" && subConsitionItemObj.conditionBy != 3) {
                if (!self.componentStatus[subConsitionItemObj.parentUniqueId].active) {
                  if (subConsitionItemObj.data_type == 'imageList' || subConsitionItemObj.data_type == 'radioBox' || subConsitionItemObj.data_type == 'checkBox' || subConsitionItemObj.data_type == 'selectBox') {
                    allowedPropertyValue[keyObj.propertyParentId] = subConsitionItemObj.conditionValue;
                  } else {
                    allowedPropertyValue[keyObj.propertyParentId] = consitionItemObj.allowedValues;
                  }
                } else {
                  allowedPropertyValue = {};
                }
              } else if (subConsitionItemObj.conditionBy == 6 && typeof self.componentStatus[subConsitionItemObj.parentUniqueId] != "undefined") {
                if (self.componentStatus[subConsitionItemObj.parentUniqueId].active) {
                  if (subConsitionItemObj.data_type == 'imageList' || subConsitionItemObj.data_type == 'radioBox' || subConsitionItemObj.data_type == 'checkBox' || subConsitionItemObj.data_type == 'selectBox') {
                    allowedPropertyValue[keyObj.propertyParentId] = subConsitionItemObj.conditionValue;
                  } else {
                    allowedPropertyValue[keyObj.propertyParentId] = consitionItemObj.allowedValues;
                  }
                } else {
                  allowedPropertyValue = {};
                }
              } else if (subConsitionItemObj.conditionBy == 7 && typeof self.componentStatus[subConsitionItemObj.parentUniqueId] != "undefined") {

                if (typeof self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value == "string" && self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value != "" && self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value != "0") {
                  selectedElFromComp = JSON.parse(self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value);
                } else {
                  selectedElFromComp = self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value;
                }

                if (Array.isArray(selectedElFromComp)) {
                  if (typeof allowedPropertyValue[keyObj.propertyParentId] != "undefined") {
                    tmpAllowedPropertyValue = self.compare2Element(selectedElFromComp, subConsitionItemObj.conditionValue);
                    var allowedPropertyValueCopyStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(allowedPropertyValue[keyObj.propertyParentId]);
                    var allowedPropertyValueCopy = JSON.parse(allowedPropertyValueCopyStr);
                    allowedPropertyValue[keyObj.propertyParentId] = self.setAvailableValue(allowedPropertyValueCopy, tmpAllowedPropertyValue);
                  } else {
                    tmpAllowedPropertyValue = self.compare2Element(selectedElFromComp, subConsitionItemObj.conditionValue);
                    allowedPropertyValue[keyObj.propertyParentId] = tmpAllowedPropertyValue;
                  }
                }
              } else {
                //if(!eval(multiplyConditionStr)) {
                subConsitionItemObj["conditionValue"].forEach(function (conditionValueItem) {
                  var tmpAllowedPropertyValue = null;
                  var equalTeam = "";
                  if (subConsitionItemObj.conditionBy == 3) {
                    equalTeam = self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value.length != 0 ? self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value : 0;
                    if (equalTeam == "" || equalTeam == "0") {
                      conditionStr = "true";
                    }
                  } else if (conditionValueItem.hasOwnProperty("min") && subConsitionItemObj.conditionBy == 1) {
                    equalTeam = self.propertyValue[self.findIndexByID(subConsitionItemObj.findIndexByID)].value.length != 0 ? self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value : 0;
                    if (parseInt(equalTeam) > parseInt(conditionValueItem.min) && parseInt(conditionValueItem.max) > parseInt(equalTeam) && conditionStr.length == 0) {
                      conditionStr = parseInt(equalTeam) + " > " + conditionValueItem.min + " && " + conditionValueItem.max + " > " + parseInt(equalTeam);
                    } else if (parseInt(equalTeam) > parseInt(conditionValueItem.min) && parseInt(conditionValueItem.max) > parseInt(equalTeam)) {
                      conditionStr += " && " + parseInt(equalTeam) + " > " + conditionValueItem.min + " && " + conditionValueItem.max + " > " + parseInt(equalTeam);
                    }
                  }
                  if (conditionValueItem.hasOwnProperty("min") && subConsitionItemObj.conditionBy == 4) {
                    equalTeam = self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value.length != 0 ? self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value : 0;
                    if (conditionStr.length == 0) {
                      conditionStr = parseInt(equalTeam) + " == " + conditionValueItem.min;
                    } else {
                      conditionStr += " && " + parseInt(equalTeam) + " == " + conditionValueItem.min;
                    }
                  } else if (multiplyConditionOperation.trim() == "compare") {
                    if (self.propertyValue[self.findIndexByID(consitionItemObj.condition[0].parentUniqueId)].data_type == "checkBox" && self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].data_type == "checkBox") {
                      if (typeof self.propertyValue[self.findIndexByID(consitionItemObj.condition[0].parentUniqueId)].value == "string" && self.propertyValue[self.findIndexByID(consitionItemObj.condition[0].parentUniqueId)].value != "" && self.propertyValue[self.findIndexByID(consitionItemObj.condition[0].parentUniqueId)].value != "0") {
                        selectedElFromComp = JSON.parse(self.propertyValue[self.findIndexByID(consitionItemObj.condition[0].parentUniqueId)].value);
                      } else {
                        selectedElFromComp = self.propertyValue[self.findIndexByID(consitionItemObj.condition[0].parentUniqueId)].value;
                      }

                      if (typeof self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value == "string" && self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value != "" && self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value != "0") {
                        selectedElFromComp = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(selectedElFromComp), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(JSON.parse(self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value)));
                      } else if (Array.isArray(self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value)) {
                        selectedElFromComp = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(selectedElFromComp), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value));
                      }
                      tmpAllowedPropertyValue = self.compare2Element(selectedElFromComp, subConsitionItemObj.conditionValue);
                      if (typeof allowedPropertyValue[keyObj.propertyParentId] != "undefined") {
                        var _allowedPropertyValueCopyStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(allowedPropertyValue[keyObj.propertyParentId]);
                        var _allowedPropertyValueCopy = JSON.parse(_allowedPropertyValueCopyStr);
                        allowedPropertyValue[keyObj.propertyParentId] = self.setAvailableValue(_allowedPropertyValueCopy, tmpAllowedPropertyValue);
                      } else {
                        allowedPropertyValue[keyObj.propertyParentId] = tmpAllowedPropertyValue;
                      }
                    }
                  } else if (subConsitionItemObj.conditionBy == 8 && typeof self.componentStatus[subConsitionItemObj.parentUniqueId] != "undefined") {
                    var passedValues = "";
                    if (isMultiplyTargetValue) {
                      passedValues = self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value;
                      if (passedValues.includes(conditionValueItem.name) && conditionValueItem.value) {
                        //multiplyConditionLacalStr = eval(conditionValueItem.value + " == " + passedValues.includes(conditionValueItem.name));
                        multiplyConditionLacalStr = "";
                      } else if (conditionValueItem.value) {
                        multiplyConditionLacalStr = "true";
                        consitionItemObj.allowedValues[0].value = true;
                      }
                    }
                  } else {
                    if (isMultiplyTargetValue && subConsitionItemObj.conditionBy != 3) {
                      //isMultiplyCondition = self.getConditionValueForMultiplyChoices(conditionValueItem, self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value);
                      var _passedValues = self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value;
                      if (multiplyConditionLacalStr.length == 0 && _passedValues.includes(conditionValueItem.name)) {
                        multiplyConditionLacalStr = conditionValueItem.value + " == " + _passedValues.includes(conditionValueItem.name);
                      } else {
                        if (subConsitionItemObj.conditionBy == 1 && _passedValues.includes(conditionValueItem.name)) {
                          multiplyConditionLacalStr += " || " + conditionValueItem.value + " == " + _passedValues.includes(conditionValueItem.name);
                        } else if (_passedValues.includes(conditionValueItem.name)) {
                          multiplyConditionLacalStr += " && " + conditionValueItem.value + " == " + _passedValues.includes(conditionValueItem.name);
                        }
                      }
                    } else {
                      equalTeam = self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value.length != 0 ? self.propertyValue[self.findIndexByID(subConsitionItemObj.parentUniqueId)].value : 'no';
                    }

                    if (conditionValueItem.value && multiplyConditionLacalStr.length == 0 && !isMultiplyTargetValue) {
                      multiplyConditionLacalStr = "'" + conditionValueItem.name.trim() + "' == '" + equalTeam.trim() + "'";
                    } else if (conditionValueItem.value && !isMultiplyTargetValue) {
                      if (subConsitionItemObj.conditionBy == 1) {
                        multiplyConditionLacalStr += " || '" + conditionValueItem.name.trim() + "' == '" + equalTeam.trim() + "'";
                      } else {
                        multiplyConditionLacalStr += " && '" + conditionValueItem.name.trim() + "' == '" + equalTeam.trim() + "'";
                      }
                    }
                  }
                });
              }
              if (multiplyConditionOperation.length > 0 && multiplyConditionLacalStr.length > 0) {
                if (multiplyConditionOperation.trim() == "and") {
                  conditionStr += " && (" + multiplyConditionLacalStr + ")";
                } else if (multiplyConditionOperation.trim() == "or") {
                  conditionStr += "|| (" + multiplyConditionLacalStr + ")";
                }
              } else if (multiplyConditionLacalStr.length > 0) {
                conditionStr = "(" + multiplyConditionLacalStr + ")";
              }
              //}
              propertyParentId = subConsitionItemObj.propertyParentId;
            });

            if (eval(conditionStr)) {
              if (self.isEmpty(allowedPropertyValue)) {
                allowedPropertyValue[keyObj.propertyParentId] = consitionItemObj.allowedValues;
              } else {
                allowedPropertyValue[keyObj.propertyParentId] = self.extractCorrectElements(allowedPropertyValue, consitionItemObj.allowedValues, keyObj.propertyParentId);
              }
            }
          });
        }
      });
      //self.propertyValue[keyObj.propertyParentId][self.propertyValue[keyObj.propertyParentId].data_type].push(orgValueItem);

      return allowedPropertyValue;
    },
    compare2Element: function compare2Element(el1, el2) {
      el2 = this.setCollectionOnEnable(el2);
      el2.forEach(function (el2Item, el1Key) {
        el1.includes(el2Item.name);
        if (el1.includes(el2Item.name)) {
          el2Item.value = true;
        }
      });

      return el2;
    },
    extractCorrectElements: function extractCorrectElements(allowedPropertyValue, allowedPropertyValueNew, propertyParentId) {
      var self = this;
      var allowedPropertyValueStr = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(allowedPropertyValue[propertyParentId]);
      var allowedPropertyValueColl = JSON.parse(allowedPropertyValueStr);
      var allowedPropertyValueLocal = this.setCollectionOnDisable(allowedPropertyValueColl);
      allowedPropertyValue[propertyParentId].forEach(function (conditionValueItem, conditionValueItemKey) {
        allowedPropertyValueNew.forEach(function (conditionValueNewItem) {
          if (conditionValueItem.name == conditionValueNewItem.name && conditionValueItem.value == conditionValueNewItem.value && conditionValueNewItem.value == false) {
            self.findItemByNameInColl(conditionValueItem.name, allowedPropertyValueLocal).value = false;
          }
        });
      });

      return allowedPropertyValueLocal;
    },
    setCollectionOnEnable: function setCollectionOnEnable(collectionLocal) {
      collectionLocal.forEach(function (conditionValueItem) {
        conditionValueItem.value = false;
      });

      return collectionLocal;
    },
    setCollectionOnDisable: function setCollectionOnDisable(collectionLocal) {
      collectionLocal.forEach(function (conditionValueItem) {
        conditionValueItem.value = true;
      });

      return collectionLocal;
    },
    findItemByNameInColl: function findItemByNameInColl(findingName, collection) {
      var findingPosition = null;
      collection.forEach(function (item, index, self) {
        if (findingName == item.name) {
          findingPosition = item;
        }
      });
      return findingPosition;
    },
    executeExpressionForEachElement: function executeExpressionForEachElement(createVariableString, fieldName, propertyId) {
      var self = this;
      if (propertyId.length > 0) {
        this.executeExpressionString(createVariableString, fieldName);
        this.variableConditionCollection.forEach(function (objItem) {
          if (objItem.name == "worning_message") {
            var dmgWorningMsgIsDefined = '';
            var messageWorningByUniqueId = self.findMessageWorningByUniqueId(propertyId);
            if (messageWorningByUniqueId != null) {
              var newWorningMessage = '';
              eval('if(' + fieldName + "_" + objItem.name + ' != "undefined") ' + '{ newWorningMessage = eval("' + fieldName + "_" + objItem.name + '") }');
              if (newWorningMessage != "undefined" && newWorningMessage != '') {
                self.messageWorning[self.findMessageWorningByUniqueId(propertyId)] = { uniqueId: propertyId, msg: eval(fieldName + "_" + objItem.name) };
              } else {
                self.messageWorning[self.findMessageWorningByUniqueId(propertyId)] = { uniqueId: propertyId, msg: "" };
              }
            } else {
              self.messageWorning.push({ uniqueId: propertyId, msg: eval(fieldName + "_" + objItem.name) });
            }

            eval('if(' + fieldName + "_" + objItem.name + ' != "undefined") ' + '{ dmgWorningMsgIsDefined = eval("' + fieldName + "_" + objItem.name + '") }');

            if (dmgWorningMsgIsDefined != "undefined" && dmgWorningMsgIsDefined != '') {
              if (messageWorningByUniqueId == null) {
                self.messageWorning.push({ uniqueId: propertyId, msg: eval(fieldName + "_" + objItem.name) });
              } else {
                self.messageWorning[self.findMessageWorningByUniqueId(propertyId)] = { uniqueId: propertyId, msg: eval(fieldName + "_" + objItem.name) };
              }
            }
          } else {
            if (typeof self.propertyValue[self.findIndexByID(propertyId)] != "undefined") {
              self.propertyValue[self.findIndexByID(propertyId)][objItem.name] = objItem.name == "value" && eval(fieldName + "_" + objItem.name) == 0 ? "" : eval(fieldName + "_" + objItem.name).toString();
            }
          }
        });
      }
    },
    findMessageWorningByUniqueId: function findMessageWorningByUniqueId(uniqueId) {
      var messageWorningIndex = null;
      this.messageWorning.forEach(function (objItem, key) {
        if (objItem.uniqueId == uniqueId) {
          messageWorningIndex = key;
        }
      });

      return messageWorningIndex;
    },
    findMessageWorningMandatoryByUniqueId: function findMessageWorningMandatoryByUniqueId(uniqueId) {
      var messageWorningIndex = null;
      this.messageWorningMandatory.forEach(function (objItem, key) {
        if (objItem.uniqueId == uniqueId) {
          messageWorningIndex = key;
        }
      });

      return messageWorningIndex;
    },
    executeExpressionString: function executeExpressionString(textJs, identityElName) {
      var elementJs = document.getElementById(identityElName);
      if (elementJs != null) {
        elementJs.remove();
      }
      var script = document.createElement('script');
      script.setAttribute("id", identityElName);
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('language', 'javascript');
      var inlineScript = document.createTextNode(textJs);
      script.appendChild(inlineScript);
      this.$refs.insertExpression.insertAdjacentElement('afterend', script);
    },
    executeJavascriptVariableString: function executeJavascriptVariableString(textJs) {
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('language', 'javascript');
      var inlineScript = document.createTextNode(textJs);
      script.appendChild(inlineScript);
      this.$refs.insertMatrix.insertAdjacentElement('afterend', script);
    },
    updateDeclareVariableString: function updateDeclareVariableString(fieldName, fieldValue) {},
    setBasisPriceByUnit: function setBasisPriceByUnit(propertyObj) {
      if (propertyObj.data_type == 'imageList' || propertyObj.data_type == 'radioBox' || propertyObj.data_type == 'checkBox' || propertyObj.data_type == 'selectBox') {
        var localPrice = parseFloat(this.getItemPrice(propertyObj, propertyObj[propertyObj["data_type"]]));
        //eval(propertyObj.name + "_ve_price  = " + localPrice);
        if (propertyObj.dmgIsbasicPrice) {
          this.basisPriceByUnit = localPrice;
          basisPriceByUnit = localPrice;
        }
      }
    },
    setVariableForSelectCheckRadio: function setVariableForSelectCheckRadio(propertyObj) {
      if (propertyObj.data_type == 'imageList' || propertyObj.data_type == 'radioBox' || propertyObj.data_type == 'checkBox' || propertyObj.data_type == 'selectBox') {
        var localPrice = parseFloat(this.getItemPrice(propertyObj, propertyObj[propertyObj["data_type"]]));
        eval(propertyObj.name + "_price  = " + localPrice);
      }
    },
    declareSubElementAsJS: function declareSubElementAsJS(propertyObj, key) {
      var createVariableString = '';
      propertyObj[propertyObj.data_type].forEach(function (propertyObjItem) {
        createVariableString += "," + key + "_" + propertyObjItem.uniqueId + "_price = 0 ";
      });

      return createVariableString;
    },
    setToStringVariable: function setToStringVariable(varItemString) {
      if (varItemString.dmgIsbasicPrice) {
        this.setBasisPriceByUnit(varItemString);
      } else {
        this.setVariableForSelectCheckRadio(varItemString);
      }

      this.variableConditionCollection.forEach(function (objItem) {
        var localValue = varItemString[objItem.name];
        if (localValue == "") {
          localValue = objItem.value;
        }
        if (Array.isArray(localValue)) {
          eval(varItemString.name + "_" + objItem.name + " = " + "'" + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(localValue) + "'");
          // eval(varItemString.name +"_ve_"+ objItem.name  + " = " + "'" + JSON.stringify(localValue) + "'");
        } else {
          eval(varItemString.name + "_" + objItem.name + " = " + "'" + localValue + "'");
          //  eval(varItemString.name +"_ve_"+ objItem.name  + " = " + "'" + localValue + "'");
        }
      });
    },
    declareVariableString: function declareVariableString() {
      var _this2 = this;

      var createVariableString = '';
      var createSubelemetVariableString = '';
      var findingItem = null;
      var self = this;
      babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.allVariables).forEach(function (_ref2) {
        var _ref3 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        if (value == undefined) {
          return;
        }

        if (key.length > 0) {
          _this2.variableConditionCollection.forEach(function (objItem) {
            if (createVariableString.length == 0) {
              createVariableString += "var dmgTotalPrice = 0, glassWeight = 0, energiePrice = 0, basisPriceByUnit = 0, massm2 = 0;";
              createVariableString += "var " + key + "_" + objItem.name + " = \"" + objItem.value + "\"";
              // createVariableString += ", " + key +"_ve_"+ objItem.name + " = \"" + objItem.value + "\"";
            } else {
              createVariableString += ", " + key + "_" + objItem.name + " =  \"" + objItem.value + "\"";
              // createVariableString += ", " + key +"_ve_"+ objItem.name + " = \"" + objItem.value + "\"";
            }
          });

          findingItem = self.findIndexByName(key);
          if (findingItem != null) {
            if (findingItem.data_type == 'imageList' || findingItem.data_type == 'radioBox' || findingItem.data_type == 'checkBox' || findingItem.data_type == 'selectBox') {
              createVariableString += self.declareSubElementAsJS(findingItem, key);
            }
          }
        }
      });

      //console.log("createVariableString:::" + createVariableString);
      if (createVariableString.length != 0) {
        createVariableString += ";";
        this.executeExpressionString(createVariableString, 'dmg-global-vars');
      }
    },

    isNumber: function isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    getImagePath: function getImagePath(imgItem) {
      return this.dmgShopBaseUrl + "/" + imgItem.image_name;
    },
    getPreviewImagePath: function getPreviewImagePath(imgItem) {
      var srcPath = '';
      if (imgItem.image_name != undefined && imgItem.image_name.length != 0) {
        srcPath = this.imgPath + this.customer_id + "/" + "templateId/" + this.template_id + "/image/" + +imgItem.image_name;
      }
      return srcPath;
    },
    getFontPath: function getFontPath(imgItem) {
      var srcPath = '';
      if (imgItem.image_name != undefined && imgItem.image_name.length != 0) {
        srcPath = this.imgPath + this.customer_id + "/" + "templateId/" + this.template_id + "/image/" + imgItem.image_name;
      }
      return srcPath;
    },
    createNewVariable: function createNewVariable(name, value) {
      if (this.allVariables[name] == undefined) {
        this.allVariables[name] = "";
      }
    },
    existsMatrix: function existsMatrix(name) {
      var isMatrix = false;
      var allMatrices = this.allMatrices;
      if (allMatrices[name] != undefined) {
        isMatrix = true;
      }
      return isMatrix;
    },
    declareMatrices: function declareMatrices() {
      if (babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(this.allMatrices) != "{}") {
        this.executeJavascriptVariableString('var globalMatrices = ' + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(this.allMatrices) + ";");
        this.initialDynamicalVariable = false;
      }
    },
    getPropertyValueById: function getPropertyValueById(id) {
      var propertyValueObj = {};
      var propeValue = {};
      propertyValueObj = this.propertyValue[id];
      // console.log("zuzusasa-::::"+JSON.stringify(propertyValueObj));
      if (typeof propertyValueObj !== 'undefined') {
        this.propertyItem = propertyValueObj;
      }
    },
    openTab: function openTab(tabName) {
      // Declare all variables
      var i = void 0,
          tabcontent = void 0,
          tablinks = void 0;
      // console.log("ZUZUZU"+tabName);
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].className.replace(" active", "");
      }

      if (tabcontent.length > 0) {
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        $(".dmg-tab .dmg-tablinks").each(function () {
          if ($(this).html().trim() == tabName) {
            $(this).addClass('active').siblings().removeClass('active');
          }
        });
        /*
        $(document).on("click", ".dmg-tablinks", function () {
          $(this).addClass('active').siblings().removeClass('active');
        }); */
      }
    },
    addEvent: function addEvent(fieldValue, propertyValue) {
      var price = 0;
      this.setToStringVariable(propertyValue.name, fieldValue);
      babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.expressionsString).forEach(function (_ref4) {
        var _ref5 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];

        eval(value);
      });

      this.dmgTotalPrice = dmgTotalPrice;
      this.calculatePrice();
      //console.log("ZUZUZUZU:::" + JSON.stringify(this.matrixRelations));
      //alert("dmgTotalPrice"+dmgTotalPrice);
    },
    selectedDropDown: function selectedDropDown(propertyItem, i) {
      this.currentIndex = i;
      this.priceElements[propertyItem.name] = propertyItem.selectBox[i].price;
      this.calculatePrice();
    },
    getDropDownElementPrice: function getDropDownElementPrice(propertyObj, propertyName) {
      var price = 0;

      if (propertyObj.procenttype == 2) {
        if (!isNaN(eval(propertyName + "_massm2"))) {
          var percentAreaPrice = parseFloat(eval(propertyName + "_massm2"));
          price = Math.round(parseFloat(this.basisPriceByUnit) * percentAreaPrice * (parseFloat(propertyObj.price) / 100));
        } else {
          price = Math.round(parseFloat(this.basisPriceByUnit) * (parseFloat(propertyObj.price) / 100));
        }
      } else {
        price = parseFloat(propertyObj.price);
      }

      return price;
    },
    getItemPrice: function getItemPrice(itemValue, itemList) {
      var self = this;
      var price = 0;

      if (typeof itemList != "undefined") {
        itemList.forEach(function (propertyObj) {
          //if (typeof (propertyObj) == "undefined") {
          if (itemValue.value == propertyObj.title || itemValue.value == propertyObj.value) {
            price = propertyObj.price != '' ? propertyObj.price : 0;
            if (propertyObj.procenttype == 2) {
              if (!isNaN(eval(itemValue.name + "_massm2"))) {
                var formPercentArea = parseFloat(eval(itemValue.name + "_massm2"));
                var hasSubElementPrice = false;
                price = parseFloat(self.basisPriceByUnit) * formPercentArea * (parseFloat(propertyObj.price) / 100);
                console.log("getItemPriceA::" + price);
                eval('if(' + itemValue.name + "_" + propertyObj.uniqueId + "_price" + ' != "undefined") ' + '{ hasSubElementPrice = 1; }');
                if (hasSubElementPrice) {
                  var subElementPrice = parseFloat(eval(itemValue.name + "_" + propertyObj.uniqueId + "_price"));
                  if (subElementPrice > 0) {
                    price = subElementPrice * (parseFloat(propertyObj.price) / 100);
                    console.log("subElementPrice::" + subElementPrice);
                    console.log("getItemPriceB::" + price);
                  }
                }
              } else {
                price = parseFloat(self.basisPriceByUnit) * (parseFloat(propertyObj.price) / 100);
                console.log("getItemPriceC::" + price);
              }
            }
          }
          //}
        });
      }
      return price;
    },
    getTotalPrice: function getTotalPrice() {
      var self = this;
      var price = 0;
      var expressionPrice = 0;

      var entcodedPropertyValue = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(this.propertyValue);
      var localPropertyValue = JSON.parse(entcodedPropertyValue);

      babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(localPropertyValue).forEach(function (_ref6) {
        var _ref7 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref6, 2),
            key = _ref7[0],
            propertyObj = _ref7[1];

        var localPrice = 0;
        if (propertyObj.data_type == 'imageList' || propertyObj.data_type == 'radioBox' || propertyObj.data_type == 'checkBox' || propertyObj.data_type == 'selectBox') {
          localPrice = parseFloat(self.getItemPrice(propertyObj, propertyObj[propertyObj["data_type"]]));
          //eval(propertyObj.name +"_ve_price  = "+ localPrice);
          if (propertyObj.dmgIsbasicPrice) {
            self.basisPriceByUnit = localPrice;
            basisPriceByUnit = localPrice;
            localPrice = 0;
          }
          /*
          else {
            localPrice += parseFloat(eval(propertyObj.name+"_price"));
           }*/
          price += localPrice;
        } else {
          localPrice = propertyObj.price.length > 0 ? parseFloat(propertyObj.price != '' ? propertyObj.price : 0) : 0;
          //  eval(propertyObj.name +"_ve_price  = "+ localPrice);
          if (propertyObj.dmgIsbasicPrice) {
            self.basisPriceByUnit = localPrice;
            basisPriceByUnit = localPrice;
            localPrice = 0;
          }
          //price += localPrice;
        }
      });

      price += this.calculatePrice();
      //console.log("price:::"+price);
      if (price < 0) {
        price = 0;
      }
      //price  = Math.round(price * 20) / 20;
      price = Math.ceil(price * 20) / 20;
      this.setTextConfiguratorPrice(parseFloat(price.toFixed(2)));
      this.setGlassWeightInShop();
      return parseFloat(price.toFixed(2));
    },
    getMatrixValue: function getMatrixValue() {
      var _this3 = this;

      //console.log("ZUZUZU:::"+JSON.stringify(this.matrixRelations));
      if (babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(this.matrixRelations) !== "{}") {
        babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.matrixRelations).forEach(function (_ref8) {
          var _ref9 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref8, 2),
              key = _ref9[0],
              value = _ref9[1];

          _this3.searchValueInMatrix(key, value);
        });
      }
    },
    getElSelectedFromImageList: function getElSelectedFromImageList(selected, list) {
      var result = null;
      list.forEach(function (propertyObj) {
        if (propertyObj.title == selected) {
          result = propertyObj;
        }
      });

      return result;
    },
    searchValueInMatrix: function searchValueInMatrix(matrixId, matrixCriteria) {
      // console.log(JSON.stringify(matrixCriteria));
      //console.log( " this.allMatrices[matrixName]:: " + JSON.stringify(this.allMatrices));
      var matrixX = '';
      var matrixY = '';
      var matrixOperatorX = '';
      var matrixOperatorY = '';
      var matrixPriceCalculation = '';
      var valueX = 0;
      var valueY = 0;
      var matrixValue = null;
      var lastTestValueX = null;
      var lastTestValueY = null;
      //let matrixY = matrixCriteria[0].matrixDimensionY;

      //console.log("matrixCriteria:::"+matrixId+"_"+matrixCriteria[0].matrixName);
      //console.log("allMatrices:::"+JSON.stringify(this.allMatrices[matrixId+"_"+matrixCriteria[0].matrixName]));
      var matrixObj = this.allMatrices[matrixId + "_" + matrixCriteria[0].matrixName];
      for (var i = 0; i < matrixObj.length; i++) {
        matrixX = eval(matrixCriteria[0].matrixDimensionX);
        matrixY = eval(matrixCriteria[0].matrixDimensionY);
        matrixOperatorX = matrixCriteria[0].matrixOperatorX;
        matrixOperatorY = matrixCriteria[0].matrixOperatorY;
        matrixPriceCalculation = matrixCriteria[0].matrixPriceCalculation;

        // console.log("matrixX:::" + matrixX + "matrixY::" + matrixY + "matrixPriceCalculation::" + matrixPriceCalculation);
        if (matrixOperatorX == "naechstGroessereZahl") {
          if (matrixX == matrixObj[i].x) {
            valueX = matrixObj[i].x;
          } else if (matrixX > matrixObj[i].x && matrixObj[i + 1] != undefined && matrixX < matrixObj[i + 1].x) {
            valueX = matrixObj[i + 1].x;
          }
        } else if (matrixOperatorX == "naechstKleinereZahl") {
          if (matrixX == matrixObj[i].x) {
            valueX = matrixObj[i].x;
          } else if (matrixX > matrixObj[i].x && matrixObj[i + 1] != undefined && matrixX < matrixObj[i + 1].x) {
            valueX = matrixObj[i].x;
          }
        } else {
          if (matrixX == matrixObj[i].x) {
            valueX = matrixObj[i].x;
          }
        }

        if (matrixOperatorY == "naechstGroessereZahl") {
          if (matrixY == matrixObj[i].y) {
            valueY = matrixObj[i].y;
          } else if (matrixY > matrixObj[i].y && matrixObj[i + 1] != undefined && matrixX < matrixObj[i + 1].y) {
            valueY = matrixObj[i + 1].y;
          }
        } else if (matrixOperatorY == "naechstKleinereZahl") {
          if (matrixY == matrixObj[i].y) {
            valueY = matrixObj[i].y;
          } else if (matrixY > matrixObj[i].y && matrixObj[i + 1] != undefined && matrixY < matrixObj[i + 1].y) {
            valueY = matrixObj[i].y;
          }
        } else {
          if (matrixY == matrixObj[i].y) {
            valueY = matrixObj[i].y;
          }
        }

        if (valueX == matrixObj[i].x && valueY == matrixObj[i].y) {
          matrixValue = matrixObj[i].value;
        }

        if (matrixPriceCalculation == "pricevalue") {
          this.dmgTotalPrice = matrixValue * this.dmgTotalPrice;
        } else {
          this.dmgTotalPrice = matrixValue;
          //this.matrixValue = matrixValue;
        }

        //console.log(matrixObj[i].x + "--" + matrixObj[i].y + "--" + matrixObj[i].value + "****" + matrixValue);
      }
    },
    calculatePrice: function calculatePrice() {
      //let gcmLocalPrice = eval(dmgTotalPrice);
      var dmgLocalPrice = 0;
      //console.log("priceElements :.:"+JSON.stringify(this.priceElements));
      //if (JSON.stringify(this.priceElements) !== "{}") {
      babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.propertyValue).forEach(function (_ref10) {
        var _ref11 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref10, 2),
            key = _ref11[0],
            propertyObj = _ref11[1];

        // let dmgFieldIsDefiend = true;
        // eval("if(typeof "+ propertyObj.name+"_price" +" == 'undefined'){ dmgFieldIsDefiend = false; }");
        if (!isNaN(eval(propertyObj.name + "_price"))) {
          dmgLocalPrice = dmgLocalPrice + parseFloat(eval(propertyObj.name + "_price"));
        }
      });
      //}
      this.getMatrixValue();
      //this.dmgTotalPrice = gcmLocalPrice

      return dmgLocalPrice;
    },
    selectedImageList: function selectedImageList(selectedElementId, option, parentId) {
      var imageList = this.propertyValue[selectedElementId];
      this.priceElements[imageList.name] = option.price;
      //this.calculatePrice();
      //console.log("this.priceElements:::"+JSON.stringify(this.priceElements));
    },
    selectedRadioBox: function selectedRadioBox(selectedElementId) {
      console.log("parentId" + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(selectedElementId));
      //this.getOc();
      //console.log("this.priceElements:::"+JSON.stringify(this.priceElements));
    },
    setTextConfiguratorPrice: function setTextConfiguratorPrice(totalPrice) {
      if ($('.price--content.content--default meta[itemprop="price"]').length > 0) {
        // let priceContent = parseFloat($('.price--content.content--default meta[itemprop="price"]').attr("content").replace(",",".")) + totalPrice;
        var priceContent = parseFloat($('.price--content.content--default meta[itemprop="price"]').attr("content")) + parseFloat(totalPrice);
        // let metaItemProp = '<meta itemprop="price" content="'+priceContent.toFixed(2)+'">';
        var newPrice = $(".price--content.content--default").html().replace(/;[\d.\d]+/, priceContent.toFixed(2));
        $('.price--content.content--default').html(newPrice);
        dmgConfiguratorPrice = totalPrice;
      }
    },
    encode: function encode(input) {
      var output = "";
      var chr1 = void 0,
          chr2 = void 0,
          chr3 = void 0,
          enc1 = void 0,
          enc2 = void 0,
          enc3 = void 0,
          enc4 = void 0;
      var i = 0;

      input = this._utf8_encode(input);

      while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output + this.keyStr.charAt(enc1) + this.keyStr.charAt(enc2) + this.keyStr.charAt(enc3) + this.keyStr.charAt(enc4);
      }

      return output;
    },
    decode: function decode(inputStr) {
      var output = "";
      var chr1 = void 0,
          chr2 = void 0,
          chr3 = void 0;
      var enc1 = void 0,
          enc2 = void 0,
          enc3 = void 0,
          enc4 = void 0;
      var i = 0;

      if (inputStr.length == 0) {
        return;
      }
      inputStr = inputStr.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      while (i < inputStr.length) {

        enc1 = this.keyStr.indexOf(inputStr.charAt(i++));
        enc2 = this.keyStr.indexOf(inputStr.charAt(i++));
        enc3 = this.keyStr.indexOf(inputStr.charAt(i++));
        enc4 = this.keyStr.indexOf(inputStr.charAt(i++));

        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }

      output = this._utf8_decode(output);

      return output;
    },
    _utf8_encode: function _utf8_encode(enCodeString) {
      if (enCodeString.length == 0) {
        return;
      }
      var stringRp = enCodeString.replace(/\r\n/g, "\n");
      var utftext = "";

      for (var n = 0; n < stringRp.length; n++) {
        var c = stringRp.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode(c >> 6 | 192);
          utftext += String.fromCharCode(c & 63 | 128);
        } else {
          utftext += String.fromCharCode(c >> 12 | 224);
          utftext += String.fromCharCode(c >> 6 & 63 | 128);
          utftext += String.fromCharCode(c & 63 | 128);
        }
      }

      return utftext;
    },
    _utf8_decode: function _utf8_decode(utftext) {
      var string = "";
      var i = 0;
      var c = 0,
          c1 = 0,
          c2 = 0,
          c3 = 0;

      while (i < utftext.length) {
        c = utftext.charCodeAt(i);

        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if (c > 191 && c < 224) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode((c & 31) << 6 | c2 & 63);
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          i += 3;
        }
      }
      return string;
    },
    closeAllTabs: function closeAllTabs() {
      var acc = document.getElementsByClassName("dmg_panel");
      var i = void 0;
      for (i = 0; i < acc.length; i++) {
        acc[i].style.display = "none";
        acc[i].parentNode.getElementsByTagName("button")[0].classList.remove("active");
      }
    },
    existNextActiveStep: function existNextActiveStep(groupIndex) {
      var isActive = 0;
      if (typeof this.allGroups[groupIndex + 1] != "undefined") {
        isActive = this.allGroups[groupIndex + 1].active;
      }
      return isActive;
    },
    getNextActiveStepInMenu: function getNextActiveStepInMenu(tabIndex) {
      var activeTab = null;
      var i = 0;
      for (i = tabIndex; i < this.allGroups.length; i++) {
        if (this.allGroups[i]["active"]) {
          activeTab = i;
          break;
        }
      }
      return activeTab;
    },
    findIndexPropertyGroupByName: function findIndexPropertyGroupByName(groupName) {
      var findingGroupItemIndex = null;
      this.allGroups.forEach(function (groupItem, key) {
        if (groupItem.name == groupName) {
          findingGroupItemIndex = key;
        }
      });
      return findingGroupItemIndex;
    },
    checkIfWorningInGroup: function checkIfWorningInGroup(groupName) {
      var thereIsWorningInGroup = false;
      var self = this;
      this.propertyGroup[groupName].forEach(function (item, key) {
        var worningMessageItem = self.messageWorning[self.findMessageWorningByUniqueId(item.uniqueId)];
        if (typeof worningMessageItem != "undefined" && worningMessageItem != null && self.checkFieldHasValues(item.uniqueId)) {
          if (worningMessageItem.msg.length > 0 && worningMessageItem.msg != "undefined") {
            thereIsWorningInGroup = true;
          }
        }
      });

      return thereIsWorningInGroup;
    },
    closeAllInfoBoxs: function closeAllInfoBoxs() {
      $(".dmg-info-box-container").each(function (index) {
        $(this).css({ "display": "none" });
      });
    },
    nextStepInMenu: function nextStepInMenu(tabName, nextTabName, tabIndex) {
      if (!this.checkIfWorningInGroup(tabName)) {
        var acc = document.getElementsByClassName("dmg_accordion_container");
        var i = void 0;
        for (i = tabIndex; i < acc.length; i++) {
          if (acc[i].style.display != "none") {
            if (this.checkActiveInactiveFields(tabName) == null) {
              this.closeAllInfoBoxs();
              this.closeAllTabs();
              this.dmgAddEventListener(acc[i].getElementsByTagName("button")[0]);
              acc[i].getElementsByTagName("button")[0].classList.toggle("active");

              var dmg_panel = acc[i].getElementsByTagName("button")[0].nextElementSibling;
              if (dmg_panel.style.display === "block") {
                dmg_panel.style.display = "none";
              } else {
                dmg_panel.style.display = "block";
              }
            }
            break;
          }
        }
      }
    },
    checkIfBasketButtonIsActive: function checkIfBasketButtonIsActive() {
      var activeButton = 1;
      var self = this;
      this.allGroups.forEach(function (item, key) {
        var checkResult = self.checkIfWorningInGroup(item.name);
        var isActiveField = self.checkActiveInactiveFields(item.name);
        if (checkResult || isActiveField != null) {
          activeButton = 0;
        }
      });

      return activeButton;
    },
    checkRemoveManatoryFields: function checkRemoveManatoryFields(uniqueId) {
      var isMessageWorningMandatory = 0;

      if (this.propertyValue[this.findIndexByID(uniqueId)].value != "" && this.propertyValue[this.findIndexByID(uniqueId)].value != "0" && this.checkFieldHasValues(uniqueId)) {
        this.messageWorningMandatory[this.findMessageWorningMandatoryByUniqueId(uniqueId)] = { uniqueId: uniqueId, msg: "" };
      }

      if (typeof this.messageWorningMandatory[this.findMessageWorningMandatoryByUniqueId(uniqueId)] != "undefined") {
        isMessageWorningMandatory = this.messageWorningMandatory[this.findMessageWorningMandatoryByUniqueId(uniqueId)].msg.length > 0 ? 1 : 0;
      }

      return isMessageWorningMandatory;
    },
    checkActiveInactiveFields: function checkActiveInactiveFields(tabName) {
      var self = this;
      var notFilledField = null;
      this.messageWorningMandatory = [];
      this.propertyGroup[tabName].forEach(function (item, key) {
        //self.notFilledFields.forEach(function (notFilledItem, notFilledKey) {
        if (typeof self.propertyValue[self.findIndexByID(item.uniqueId)] != "undefined") {
          if (self.checkFieldHasValues(item.uniqueId) && parseInt(self.propertyValue[self.findIndexByID(item.uniqueId)].mandatory_field) == 1 && (self.propertyValue[self.findIndexByID(item.uniqueId)].value == "0" || self.propertyValue[self.findIndexByID(item.uniqueId)].value == "")) {
            notFilledField = item.name;
            var messageWorningByUniqueId = self.findMessageWorningMandatoryByUniqueId(item.uniqueId);
            if (messageWorningByUniqueId == null) {
              self.messageWorningMandatory.push({ uniqueId: item.uniqueId, msg: "Bitte wählen Sie alle Pflichtfelder aus!" });
            } else {
              self.messageWorningMandatory[self.findMessageWorningMandatoryByUniqueId(item.uniqueId)] = { uniqueId: item.uniqueId, msg: "Bitte wählen Sie alle Pflichtfelder aus!" };
            }
          }
        }
        //})
      });

      return notFilledField;
    },
    getNextActiveStep: function getNextActiveStep(nextTabIndex) {
      //  let dmg_panel = this.$refs[tabName][0].getElementsByTagName("button")[0].nextElementSibling;
      //dmg_panel.style.display = "none";
      //let next_dmg_panel = this.$refs[nextTabName][0].getElementsByTagName("button")[0].nextElementSibling;
      //next_dmg_panel.style.display = "block";
    },
    setDmgAccordionTab: function setDmgAccordionTab() {
      var acc = document.getElementsByClassName("dmg_accordion");
      if (typeof acc[0] != "undefined") {
        var dmg_panel = acc[0].parentNode.getElementsByTagName("button")[0].nextElementSibling;
        dmg_panel.style.display = "block";
        this.dmgAddEventListener(acc[0]);
        //this.dmgAddEventListener(dmg_panel);
      }
    },
    setOnInactive: function setOnInactive(tabName) {
      var acc = document.getElementsByClassName("dmg_accordion_container");
      var tabInactive = 0;
      for (var i = 0; i < acc.length; i++) {
        if (tabInactive) {
          acc[i].getElementsByTagName("button")[0].removeEventListener("click", this.handlerHD);
        }
        if (acc[i].children[0].innerHTML == tabName) {
          tabInactive = 1;
        }
      }
    },
    handlerHD: function handlerHD(event) {
      var self = this;
      self.closeAllTabs();
      event.toElement.toggleAttribute("active");
      var dmg_panel = event.toElement.nextElementSibling;
      if (dmg_panel.style.display === "block") {
        dmg_panel.style.display = "none";
      } else {
        dmg_panel.style.display = "block";
      }
    },
    dmgAddEventListener: function dmgAddEventListener(domEl) {
      var self = this;
      /*
      let handler = function(event) {
        self.closeAllTabs();
        event.toElement.toggleAttribute("active");
        var dmg_panel = this.nextElementSibling;
        if (dmg_panel.style.display === "block") {
          dmg_panel.style.display = "none";
        } else {
          dmg_panel.style.display = "block";
        }
      };*/
      domEl.addEventListener("click", this.handlerHD);
    },
    loadTemplateElements: function loadTemplateElements() {
      var _this4 = this;

      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(this.rest_api_domain + "/api/loadTemplate/templateId/" + this.template_id + "/customerId/" + this.customer_id).then(function (response) {
        var entcodedGroup = _this4.decode(response.data.groups);
        self.allGroups = JSON.parse(entcodedGroup);
        self.allGroups.forEach(function (groupItem, key) {
          groupItem["active"] = 1;
        });
        var entcodedPropertyGroup = _this4.decode(response.data.property);
        self.propertyGroup = JSON.parse(entcodedPropertyGroup);
        self.tmpPropertyGroupDuplicate = JSON.parse(entcodedPropertyGroup);

        var entcodedPropertyValue = _this4.decode(response.data.propertyValue);
        self.propertyValue = JSON.parse(entcodedPropertyValue);

        var entcodedUniqueIds = _this4.decode(response.data.uniqueIds);
        self.uniqueIDs = JSON.parse(entcodedUniqueIds);

        self.imgPath = _this4.decode(response.data.imgPath);
        babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(_this4.propertyValue).forEach(function (_ref12) {
          var _ref13 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref12, 2),
              key = _ref13[0],
              propertyObj = _ref13[1];

          if (propertyObj.dmgIsbasicPrice) {
            if (propertyObj.data_type == 'imageList' || propertyObj.data_type == 'radioBox' || propertyObj.data_type == 'checkBox' || propertyObj.data_type == 'selectBox') {
              self.basisPriceByUnit = parseFloat(self.getItemPrice(propertyObj.defaultValue, JSON.parse(propertyObj[propertyObj["data_type"]])));
            } else {
              //console.log("key:" + JSON.stringify(propertyObj["data_type"]));
              self.basisPriceByUnit = propertyObj.price.length > 0 ? parseFloat(propertyObj.price != '' ? propertyObj.price : 0) : 0;
            }
          }

          if (propertyObj.relatedMultiplyFields.length > 0) {
            var entcodedrelatedMultiplyFields = self.decode(propertyObj.relatedMultiplyFields);
            self.propertyValue[key].relatedMultiplyFields = JSON.parse(entcodedrelatedMultiplyFields);
          }

          if (propertyObj.multiplyFields.length > 0) {
            var entcodedMultiplyFields = self.decode(propertyObj.multiplyFields);
            self.propertyValue[key].multiplyFields = JSON.parse(entcodedMultiplyFields);
          }

          self.propertyValue[key].value = self.propertyValue[key].defaultValue;
          if (typeof self.propertyValue[key].relations != "undefined") {
            var entcodedPropertyRelations = _this4.decode(self.propertyValue[key].relations);
            if (typeof entcodedPropertyRelations != "undefined") self.propertyValue[key].relations = JSON.parse(entcodedPropertyRelations);
          }
          //this.executeExpressionString(propertyObj.expression);
          self.createNewVariable(propertyObj.name, propertyObj.name);
          if (propertyObj.matrix != undefined && propertyObj.matrix != null) {
            var dataMatrixDB = propertyObj.matrix;
            var dataMatrix = {};

            if (dataMatrixDB != undefined) {
              babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(dataMatrixDB).forEach(function (key) {
                var decodedString = JSON.parse(dataMatrixDB[key]);
                dataMatrix[key] = decodedString;
              });
              self.propertyValue[key].matrix = dataMatrix;
            }
          }

          if (propertyObj.imageList != undefined && propertyObj.imageList != null) {
            self.propertyValue[key].imageList = JSON.parse(propertyObj.imageList);
            var selectedElement = self.getElSelectedFromImageList(propertyObj.defaultValue, self.propertyValue[key].imageList);
            if (selectedElement != null) {
              self.setActive(self.getImagePath(selectedElement), propertyObj.name);
            }
          }

          if (propertyObj.radioBox != undefined && propertyObj.radioBox != null) {
            self.propertyValue[key].radioBox = JSON.parse(propertyObj.radioBox);
            //console.log("propertyValue:::"+JSON.stringify(this.propertyValue[key].radioBox));
          }

          if (propertyObj.selectBox != undefined && propertyObj.selectBox != null) {
            self.propertyValue[key].selectBox = JSON.parse(propertyObj.selectBox);
          }
          if (propertyObj.checkBox != undefined && propertyObj.checkBox != null) {
            self.propertyValue[key].checkBox = JSON.parse(propertyObj.checkBox);
            self.checkedCategories[self.propertyValue[key].name] = [];
            if (self.propertyValue[key].value.length > 0) {
              var checkItemValue = JSON.parse(self.propertyValue[key].value);
              if (Array.isArray(checkItemValue)) {
                self.checkedCategories[self.propertyValue[key].name] = checkItemValue;
              }
            }
          }

          if (propertyObj.imagecollection != undefined && propertyObj.imagecollection != null) {
            self.propertyValue[key].imagecollection = JSON.parse(propertyObj.imagecollection);
          }

          if (propertyObj.fonts != undefined && propertyObj.fonts != null) {
            self.propertyValue[key].fonts = JSON.parse(propertyObj.fonts);
            //console.log("****checkbox: "+ this.propertyValue[key].checkBox);
            var dmgFontfaceStyle = "";
            //let fonts=[{name:'meine-schrift',path:'/var/www/vhosts/fender-design.com/magento/fonts/Bankgthd.ttf'}];
            self.propertyValue[key].fonts.forEach(function (propertyObj) {
              dmgFontfaceStyle = dmgFontfaceStyle + ' @font-face {\n                            font-family:"' + propertyObj.title + '";\n                            src: url("' + self.getImagePath(propertyObj) + '") format("truetype");\n                          } ';
            });

            dmgFontfaceStyle = '@font-face {\n                          font-family:"Alex Brush";\n                          src: url("https://api.dmg-software.de/api/getImagePath/directory/2/templateId/398/image/s99q1jqja-gyn2de52b-Alex Brush.ttf") format("truetype");\n                        } ';

            var nodeEl = document.createElement('style');
            nodeEl.innerHTML = dmgFontfaceStyle;
            document.head.appendChild(nodeEl);
          }
        });

        babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(_this4.propertyValue).forEach(function (_ref14) {
          var _ref15 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref14, 2),
              key = _ref15[0],
              propertyObj = _ref15[1];

          if (propertyObj.multiplyFields != null && babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(propertyObj.multiplyFields) != '[""]' && propertyObj.multiplyFields.length > 0) {
            propertyObj.multiplyFields.forEach(function (uniqueId) {
              //let fieldPropertyId = self.findIndexByUniqueID(uniqueId);
              var deletingObjItemId = self.findIndexByID(uniqueId);
              if (deletingObjItemId != null) {
                if (deletingObjItemId != null) {
                  self.storeElementMultiplyFields.push(self.propertyValue[deletingObjItemId]);
                  self.propertyValue.splice(deletingObjItemId, 1);
                }
              }
            });
          }
        });

        self.declareVariableString();
        self.propertyValueOrg = _this4.propertyValue;

        // let confTr = '[ { "id": 950, "name": "Glasart", "value": "Weißglas Satinato", "visibility": "0", "uniqueId": 1586697181902 }, { "id": 951, "name": "Glasdicke", "value": "9 mm", "visibility": "1", "uniqueId": 1586699656933 }, { "id": 952, "name": "Form", "value": "1/2 eine schräge Kante", "visibility": "1", "uniqueId": 1586699953448 }, { "id": 953, "name": "Vorschau Form", "value": "", "visibility": "1" }, { "id": 954, "name": "H", "value": "333", "visibility": "0" }, { "id": 955, "name": "H1", "value": "", "visibility": "1" }, { "id": 956, "name": "W", "value": "444", "visibility": "1" }, { "id": 957, "name": "W1", "value": "", "visibility": "1" }, { "id": 958, "name": "Anzahl Bohrungen ", "value": "1", "visibility": "1" }, { "id": "959_1", "name": "xachse_1", "value": "45", "visibility": "1" }, { "id": "960_1", "name": "yachse_1", "value": "56", "visibility": "0" }, { "id": "961_1", "name": "durchmesser_1", "value": "9 mm", "visibility": "1", "uniqueId": 1587391937542 }, { "id": 962, "name": "Kantenbearbeitung", "value": "Saumkante", "visibility": "1", "uniqueId": 1586705532775 }, { "id": 963, "name": "Skizze 1", "value": "", "visibility": "1" } ] ';

        setTimeout(function () {
          //self.setPredefinedConfiguration(JSON.parse(localStorage.getItem("dmgConfig")));
        }, 600);

        //console.log("propertyValue:::"+JSON.stringify(this.propertyValue));
      }, function (error) {
        console.log(error);
      });

      this.getTplCondition();
    }
  },
  mounted: function mounted() {
    //this.template_id = 398;
    var self = this;
    if (typeof dmgProductIndentId != "undefined") {
      this.template_id = dmgProductIndentId;
    }

    if (typeof cser != "undefined") {
      this.customer_id = cser;
    }

    if (typeof dmgShopBaseUrl != "undefined") {
      this.dmgShopBaseUrl = dmgShopBaseUrl;
    }

    if (typeof dmgRap != "undefined") {
      this.rest_api_domain = dmgRap;
    }

    this.$root.$on('clickedSomething', function (params) {
      console.log("clickedSomething KOKOKO" + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(params));
    });

    this.loadTemplateElements();

    //this.$nextTick(function () {
    //console.log("Will be executed when the DOM is ready");
    /*
    setTimeout(() => this.setDmgAccordionTab()
            ,950
    );*/
    //});

    /*
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => this.openTab(this.allGroups[0].name), 800);
      }
    }*/

    if ($('meta[itemprop="price"]').length > 0) {
      this.productBasePrice += parseFloat($('meta[itemprop="price"]').attr("content"));
    }

    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        setTimeout(function () {
          self.setDmgAccordionTab();
        }, 1950);

        $(".configurationJson").on("click", function () {
          console.log("KOKOKO");
          self.loadTemplateElements();
          self.closeAllTabs();
          self.setDmgAccordionTab();
        });
      }

      $('.buybox--button').click(function (event) {
        if (!self.checkIfBasketButtonIsActive()) {
          event.preventDefault();
        }
      });
    };
  }
}, 'created', function created() {
  //console.log('Component is created')
}));

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/frontend/Configurator.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/frontend/Configurator.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-26a7b60c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/frontend/Configurator.vue":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-26a7b60c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/frontend/Configurator.vue ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dmg-config"},[_c('div',{ref:"declareJsVariables"}),_vm._v(" "),_c('div',{ref:"insertExpression"}),_vm._v(" "),_c('div',{ref:"insertMatrix"}),_vm._v(" "),_c('div',{staticClass:"dmg-wrap"},[_c('div',{staticClass:"dmg-main"},_vm._l((_vm.allGroups),function(groupName,groupIndex){return _c('div',{ref:groupName.name,refInFor:true,staticClass:"dmg_accordion_container"},[_vm._v("\n        "+_vm._s(_vm.setTabOnHidden(groupName.name))+"\n        "),_c('button',{staticClass:"dmg_accordion",on:{"click":function($event){return _vm.setOnInactive(groupName.name)}}},[_vm._v(_vm._s(groupName.name))]),_vm._v(" "),_c('div',{staticClass:"dmg_panel"},[_c('div',{staticClass:"panel-container",attrs:{"id":groupName.name}},[_vm._l((_vm.propertyGroup[groupName.name]),function(property,propertyKey){return _c('div',{staticClass:"dmg-tab-list"},[(_vm.isObject(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))?_c('div',[(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'textField' && _vm.propertyValue[_vm.findIndexByID(property.uniqueId)] && _vm.getAwInputValues(property.uniqueId))?_c('div',{staticClass:"dmg-tab-input dmg-tab-input-full"},[_vm._v("\n                  "+_vm._s(_vm.setToStringVariable(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                  "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                  "+_vm._s(_vm.executeExpressionForEachElement(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].expression, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, property.uniqueId))+"\n                  "),(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description.length)?_c('div',{staticClass:"dmg-info-symbol"},[_c('i',{staticClass:"fa fa-info-circle icon-dmg-info",on:{"click":function($event){return _vm.openInfoLightBox(property.uniqueId)}}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dmg-info-box-container",attrs:{"id":("dmg-info-box-" + (property.uniqueId))}},[_c('div',{staticClass:"dmg-closeProductPopupClass"},[_c('i',{staticClass:"fas fa-times",on:{"click":function($event){return _vm.closeInfoLightBox(property.uniqueId)}}})]),_vm._v(" "),_c('div',{staticClass:"info-box-content",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description)}})]),_vm._v(" "),_c('div',{staticClass:"item_description",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].description)}}),_vm._v(" "),_c('span',{staticClass:"dmg-propertyName"},[(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].mandatory_field == 1)?_c('span',[_vm._v("*")]):_vm._e(),_vm._v("\n                          "+_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].titel)+" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].minValue.length >0),expression:"propertyValue[findIndexByID(property.uniqueId)].minValue.length >0"}],staticClass:"minmaxarea"},[(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].maxValue >0)?_c('small',[_vm._v("(min "+_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].minValue)+" "+_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].unitValue))]):_vm._e()]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].maxValue >0),expression:"propertyValue[findIndexByID(property.uniqueId)].maxValue >0"}],staticClass:"minmaxarea"},[_vm._v(" - "),_c('small',[_vm._v("max "+_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].maxValue)+" "+_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].unitValue)+")")])])]),_c('br'),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value),expression:"propertyValue[findIndexByID(property.uniqueId)].value"}],staticClass:"dmg-input",attrs:{"type":"text","id":_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name},domProps:{"value":(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)], "value", $event.target.value)},function($event){return _vm.roundEntry(property.uniqueId)}]}}),_vm._v(" "),(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)])?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)].msg))])]):_vm._e(),_vm._v(" "),(_vm.checkRemoveManatoryFields(property.uniqueId) )?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorningMandatory[_vm.findMessageWorningMandatoryByUniqueId(property.uniqueId)].msg))])]):_vm._e()]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'matrix')?_c('div',[_vm._v("\n                  "+_vm._s(_vm.addMatrices(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                  "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                ")]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'selectBox' && _vm.propertyValue[_vm.findIndexByID(property.uniqueId)])?_c('div',{staticClass:"dmg-tab-input"},[_c('label',[_vm._v("\n                    "+_vm._s(_vm.setToStringVariable(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                    "),(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].mandatory_field == 1)?_c('span',[_vm._v("*")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"dmg-propertyName"},[_vm._v("\n                           "+_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].titel)+"\n                    ")]),_vm._v(" "),(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description.length)?_c('div',{staticClass:"dmg-info-symbol"},[_c('i',{staticClass:"fa fa-info-circle icon-dmg-info",on:{"click":function($event){return _vm.openInfoLightBox(property.uniqueId)}}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dmg-info-box-container",attrs:{"id":("dmg-info-box-" + (property.uniqueId))}},[_c('div',{staticClass:"dmg-closeProductPopupClass"},[_c('i',{staticClass:"fas fa-times",on:{"click":function($event){return _vm.closeInfoLightBox(property.uniqueId)}}})]),_vm._v(" "),_c('div',{staticClass:"info-box-content",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description)}})])]),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.checkIfMultiplyField(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].multiplyFields))?_c('div',{attrs:{"set":_vm.optionDropdown = _vm.getSelectBoxElementRelatedTo(property.uniqueId, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].multiplyFields, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].relatedMultiplyFields)}},[(_vm.optionDropdown)?_c('div',[_vm._v("\n                      "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                      "+_vm._s(_vm.executeExpressionForEachElement(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].expression, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, property.uniqueId))+"\n                      "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value),expression:"propertyValue[findIndexByID(property.uniqueId)].value"}],ref:_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name,refInFor:true,on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)], "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){_vm.setMultiplyFields(property.uniqueId, groupName.name, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].multiplyFields)}]}},_vm._l((_vm.optionDropdown),function(option){return _c('option',{domProps:{"value":option.value,"selected":[ option.title == _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].defaultValue ? true : false]}},[_vm._v("\n                          "+_vm._s(option.title)+" ")])}),0)]):_vm._e()]):_vm._e(),_vm._v(" "),(!_vm.checkIfMultiplyField(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].multiplyFields))?_c('div',{attrs:{"set":_vm.optionDropdown = _vm.getSelectBoxElement(property.uniqueId)}},[(_vm.optionDropdown)?_c('div',[_vm._v("\n                      "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                      "+_vm._s(_vm.executeExpressionForEachElement(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].expression, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, property.uniqueId))+"\n                      "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value),expression:"propertyValue[findIndexByID(property.uniqueId)].value"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)], "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.optionDropdown),function(option){return _c('option',{domProps:{"value":option.value,"selected":[ option.title == _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].defaultValue ? true : false]}},[_vm._v("\n                          "+_vm._s(option.title)+" ")])}),0)]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)])?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)].msg))])]):_vm._e(),_vm._v(" "),(_vm.checkRemoveManatoryFields(property.uniqueId) )?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorningMandatory[_vm.findMessageWorningMandatoryByUniqueId(property.uniqueId)].msg))])]):_vm._e()]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'font' && _vm.propertyValue[_vm.findIndexByID(property.uniqueId)])?_c('div',{staticClass:"dmg-tab-input"},[_vm._v("\n                  "+_vm._s(_vm.setCurrentFont(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].parentId))+"\n                  "+_vm._s(_vm.setToStringVariable(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                  "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                  "),_c('label',[(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].mandatory_field == 1)?_c('span',[_vm._v("*")]):_vm._e(),_vm._v("\n                    "+_vm._s(property.name)+"\n                  ")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value),expression:"propertyValue[findIndexByID(property.uniqueId)].value"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)], "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].fonts),function(option){return _c('option',{domProps:{"value":option.value}},[_vm._v("\n                      "+_vm._s(option.title)+"\n                    ")])}),0)]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'imageBox' && _vm.propertyValue[_vm.findIndexByID(property.uniqueId)]  && _vm.getImgInputValues(property.uniqueId))?_c('div',{staticClass:"dmg-tab-input"},[_vm._v("\n                  "+_vm._s(property.title)+"\n                  "),(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description.length)?_c('div',{staticClass:"dmg-info-symbol"},[_c('i',{staticClass:"fa fa-info-circle icon-dmg-info",on:{"click":function($event){return _vm.openInfoLightBox(property.uniqueId)}}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dmg-info-box-container",attrs:{"id":("dmg-info-box-" + (property.uniqueId))}},[_c('div',{staticClass:"dmg-closeProductPopupClass"},[_c('i',{staticClass:"fas fa-times",on:{"click":function($event){return _vm.closeInfoLightBox(property.uniqueId)}}})]),_vm._v(" "),_c('div',{staticClass:"info-box-content",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description)}}),_vm._v(" "),_c('div',{staticClass:"item_description",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].description)}})]),_vm._v("\n                  "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                  "),_c('img',{style:(_vm.getImgWidthHeight(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].imgWidth, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].imgHeight)),attrs:{"src":_vm.getImageToProperty(("" + (_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].propertyToImageBox)))}}),_vm._v("\n                  "+_vm._s(_vm.setToStringVariable(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                ")]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'imagecollection' && _vm.propertyValue[_vm.findIndexByID(property.uniqueId)] && _vm.getImgInputValues(property.uniqueId))?_c('div',{staticClass:"dmg-tab-input"},[_vm._v("\n                  "+_vm._s(property.title)+"\n                  "),(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description.length)?_c('div',{staticClass:"dmg-info-symbol"},[_c('i',{staticClass:"fa fa-info-circle icon-dmg-info",on:{"click":function($event){return _vm.openInfoLightBox(property.uniqueId)}}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dmg-info-box-container",attrs:{"id":("dmg-info-box-" + (property.uniqueId))}},[_c('div',{staticClass:"dmg-closeProductPopupClass"},[_c('i',{staticClass:"fas fa-times",on:{"click":function($event){return _vm.closeInfoLightBox(property.uniqueId)}}})]),_vm._v(" "),_c('div',{staticClass:"info-box-content",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description)}})]),_vm._v(" "),_c('div',{staticClass:"item_description",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].description)}}),_vm._v("\n                  "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                  "),_c('img',{style:(_vm.getRelatedImgWidthHeight(("" + (_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].propertyToImageBox)), _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].imagecollection)),attrs:{"src":_vm.getImageCollectionToProperty(("" + (_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].propertyToImageBox)), _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].imagecollection)}}),_vm._v("\n                  "+_vm._s(_vm.setToStringVariable(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                ")]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'expression')?_c('div',[(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].expression.length > 0)?_c('div',[_vm._v("\n                    "+_vm._s(_vm.executeExpressionForEachElement(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].expression, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, property.uniqueId))+"\n                  ")]):_vm._e()]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'radioBox' && _vm.propertyValue[_vm.findIndexByID(property.uniqueId)])?_c('div',{staticClass:"dmg-tab-radio",attrs:{"set":_vm.optioncheckBox = _vm.getSelectBoxElement(property.uniqueId)}},[(_vm.optioncheckBox)?_c('div',[_c('div',{staticClass:"item_description",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].description)}}),_vm._v("\n                      "+_vm._s(_vm.setToStringVariable(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                      "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                      "+_vm._s(_vm.executeExpressionForEachElement(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].expression, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, property.uniqueId))+"\n                      "),_c('div',{staticClass:"dmg-propertyName"},[(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].mandatory_field == 1)?_c('span',[_vm._v("*")]):_vm._e(),_vm._v("\n                        "+_vm._s(property.title)+"\n                        "),(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description.length)?_c('div',{staticClass:"dmg-info-symbol"},[_c('i',{staticClass:"fa fa-info-circle icon-dmg-info",on:{"click":function($event){return _vm.openInfoLightBox(property.uniqueId)}}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dmg-info-box-container",attrs:{"id":("dmg-info-box-" + (property.uniqueId))}},[_c('div',{staticClass:"dmg-closeProductPopupClass"},[_c('i',{staticClass:"fas fa-times",on:{"click":function($event){return _vm.closeInfoLightBox(property.uniqueId)}}})]),_vm._v(" "),_c('div',{staticClass:"info-box-content",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description)}})])]),_vm._v(" "),_c('div',{staticClass:"form-inline"},[_c('div',{class:[ _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].cssClass ? _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].cssClass : 'radio-toolbar']},_vm._l((_vm.optioncheckBox),function(radioItem,radioIndex){return _c('span',[(radioItem.disable == undefined || radioItem.disable == 0)?_c('span',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value),expression:"propertyValue[findIndexByID(property.uniqueId)].value"}],attrs:{"type":"radio","id":[_vm.getRadioIdById(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name,radioIndex)],"name":[_vm.getRadioIdById(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name,radioIndex)]},domProps:{"value":radioItem.title,"checked":_vm._q(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value,radioItem.title)},on:{"change":function($event){_vm.$set(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)], "value", radioItem.title)}}}),_vm._v(" "),_c('label',{attrs:{"for":[_vm.getRadioIdById(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name,radioIndex)]}},[_vm._v(_vm._s(radioItem.title)+" "),(_vm.getDropDownElementPrice(radioItem) > 0)?_c('small',[_vm._v("("),_c('span',{domProps:{"innerHTML":_vm._s(_vm.shopCurrency)}}),_vm._v(" "+_vm._s(_vm.getDropDownElementPrice(radioItem))+" "+_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].unitValue)+")")]):_vm._e()])]):_vm._e()])}),0)]),_vm._v(" "),(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)])?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)].msg))])]):_vm._e(),_vm._v(" "),(_vm.checkRemoveManatoryFields(property.uniqueId) )?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorningMandatory[_vm.findMessageWorningMandatoryByUniqueId(property.uniqueId)].msg))])]):_vm._e()]):_vm._e()]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'imageList' && _vm.propertyValue[_vm.findIndexByID(property.uniqueId)])?_c('div',{staticClass:"dmg-tab-image-list"},[_c('div',{staticClass:"item_description",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].description)}}),_vm._v(" "),_c('div',{staticClass:"dmg-propertyName"},[(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].mandatory_field == 1)?_c('span',[_vm._v("*")]):_vm._e(),_vm._v("\n                    "+_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].titel)+"\n                    "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                    "+_vm._s(_vm.setToStringVariable(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                    "+_vm._s(_vm.executeExpressionForEachElement(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].expression, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, property.uniqueId))+"\n                    "),(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description.length)?_c('div',{staticClass:"dmg-info-symbol"},[_c('i',{staticClass:"fa fa-info-circle icon-dmg-info",on:{"click":function($event){return _vm.openInfoLightBox(property.uniqueId)}}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dmg-info-box-container",attrs:{"id":("dmg-info-box-" + (property.uniqueId))}},[_c('div',{staticClass:"dmg-closeProductPopupClass"},[_c('i',{staticClass:"fas fa-times",on:{"click":function($event){return _vm.closeInfoLightBox(property.uniqueId)}}})]),_vm._v(" "),_c('div',{staticClass:"info-box-content",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description)}})])]),_vm._v(" "),_c('div',{staticClass:"imagelist-toolbar"},_vm._l((_vm.getAwValues(property.uniqueId)),function(imgItem,listIndex){return _c('span',[(imgItem.disable == undefined || imgItem.disable == 0)?_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value),expression:"propertyValue[findIndexByID(property.uniqueId)].value"}],staticClass:"listWithImageRadio",class:_vm.getClass(property,("" + (_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name))),attrs:{"type":"radio","id":[_vm.getRadioIdById(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name,listIndex)],"name":[_vm.getRadioIdById(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name,listIndex)]},domProps:{"value":imgItem.title,"checked":_vm._q(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value,imgItem.title)},on:{"click":function($event){_vm.setActive(_vm.getImagePath(imgItem), ("" + (_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name)))},"change":function($event){_vm.$set(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)], "value", imgItem.title)}}}),_vm._v(" "),_c('label',{attrs:{"for":[_vm.getRadioIdById(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name,listIndex)]}},[_c('img',{style:(_vm.getImgWidthHeight(imgItem.image_width, imgItem.image_height)),attrs:{"src":_vm.getImagePath(imgItem),"alt":_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name},on:{"click":function($event){_vm.selectedImageList(_vm.findIndexByID(property.uniqueId),imgItem, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].uniqueId)}}})]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_c('small',[_vm._v(_vm._s(imgItem.title))])]),_vm._v(" "),(imgItem.price !='0' && imgItem.price !='')?_c('div',{staticStyle:{"text-align":"center","font-size":"x-small"}},[_vm._v("("+_vm._s(_vm.getDropDownElementPrice(imgItem, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name))+" "+_vm._s(_vm.shopCurrency)+")")]):_vm._e()]):_vm._e()])}),0),_vm._v(" "),(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)])?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)].msg))])]):_vm._e(),_vm._v(" "),(_vm.checkRemoveManatoryFields(property.uniqueId))?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorningMandatory[_vm.findMessageWorningMandatoryByUniqueId(property.uniqueId)].msg))])]):_vm._e()]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'upload' && _vm.propertyValue[_vm.findIndexByID(property.uniqueId)])?_c('div',[(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description.length)?_c('div',{staticClass:"dmg-info-symbol"},[_c('i',{staticClass:"fa fa-info-circle icon-dmg-info",on:{"click":function($event){return _vm.openInfoLightBox(property.uniqueId)}}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"item_description",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].description)}}),_vm._v(" "),_c('div',{staticClass:"dmg-info-box-container",attrs:{"id":("dmg-info-box-" + (property.uniqueId))}},[_c('div',{staticClass:"dmg-closeProductPopupClass"},[_c('i',{staticClass:"fas fa-times",on:{"click":function($event){return _vm.closeInfoLightBox(property.uniqueId)}}})]),_vm._v(" "),_c('div',{staticClass:"info-box-content",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description)}})]),_vm._v("\n                  "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                  "+_vm._s(_vm.setToStringVariable(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                  "),_c('div',{staticClass:"dmgFielUpload",staticStyle:{"margin":"15px 0","padding":"15px","background":"#efefef"}},[_c('label',{staticStyle:{"font-weight":"bold"},attrs:{"for":("xde_attachment_" + (property.uniqueId))}},[_vm._v(_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].titel))]),_vm._v(" "),_c('input',{staticStyle:{"margin-top":"15px"},attrs:{"type":"file","name":("xde_attachment_" + (property.uniqueId)),"id":("xde_attachment_" + (property.uniqueId))},on:{"change":function($event){return _vm.handleImageChange($event, property.uniqueId)}}}),_vm._v("\n                    "+_vm._s(_vm.getUoloadFileName(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].value))+"\n                    "),_c('small',[_vm._v("Gültige Dateiformate (PDF, PNG, JPEG, JPG, DXF, DWG)")])])]):(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].data_type == 'checkBox' && _vm.propertyValue[_vm.findIndexByID(property.uniqueId)])?_c('div',{staticClass:"dmg-tab-checbox"},[_c('div',{attrs:{"set":_vm.optionCheckbox = _vm.getSelectBoxElement(property.uniqueId)}},[(_vm.optionCheckbox)?_c('div',[(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description.length)?_c('div',{staticClass:"dmg-info-symbol"},[_c('i',{staticClass:"fa fa-info-circle icon-dmg-info",on:{"click":function($event){return _vm.openInfoLightBox(property.uniqueId)}}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"dmg-info-box-container",attrs:{"id":("dmg-info-box-" + (property.uniqueId))}},[_c('div',{staticClass:"dmg-closeProductPopupClass",attrs:{"id":"dmg-closeProductPopupClass"}},[_c('i',{staticClass:"fas fa-times",on:{"click":function($event){return _vm.closeInfoLightBox(property.uniqueId)}}})]),_vm._v(" "),_c('div',{staticClass:"info-box-content",domProps:{"innerHTML":_vm._s(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].short_description)}})]),_vm._v("\n                      "+_vm._s(_vm.setToStringVariable(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)]))+"\n                      "+_vm._s(_vm.setTabOnDisplay(groupName.name))+"\n                      "+_vm._s(_vm.executeExpressionForEachElement(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].expression, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, property.uniqueId))+"\n                      "),_c('div',{staticClass:"form-inline"},_vm._l((_vm.optionCheckbox),function(checkItem,checkIndex){return _c('div',{staticClass:"dmg-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedCategories[_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name]),expression:"checkedCategories[propertyValue[findIndexByID(property.uniqueId)].name]"}],attrs:{"type":"checkbox","id":checkItem.value},domProps:{"value":checkItem.value,"checked":Array.isArray(_vm.checkedCategories[_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name])?_vm._i(_vm.checkedCategories[_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name],checkItem.value)>-1:(_vm.checkedCategories[_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name])},on:{"change":[function($event){var $$a=_vm.checkedCategories[_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=checkItem.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.checkedCategories, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.checkedCategories, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.checkedCategories, _vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, $$c)}},function($event){_vm.changeCheckboxElement(_vm.propertyValue[_vm.findIndexByID(property.uniqueId)].name, property.uniqueId)}]}}),_vm._v("\n                          "+_vm._s(checkItem.title)+"\n                        ")])}),0)]):_vm._e()]),_vm._v(" "),(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)])?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorning[_vm.findMessageWorningByUniqueId(property.uniqueId)].msg))])]):_vm._e(),_vm._v(" "),(_vm.checkRemoveManatoryFields(property.uniqueId) )?_c('div',{staticClass:"item-error",staticStyle:{"color":"#FF0000"}},[_c('small',[_vm._v(_vm._s(_vm.messageWorningMandatory[_vm.findMessageWorningMandatoryByUniqueId(property.uniqueId)].msg))])]):_vm._e()]):_vm._e()]):_vm._e()])}),_vm._v(" "),(_vm.allGroups[groupIndex+1] != undefined && _vm.getNextActiveStepInMenu(groupIndex+1))?_c('p',{staticClass:"dmg-align-button"},[(_vm.allGroups[_vm.getNextActiveStepInMenu(groupIndex+1)].active)?_c('button',{staticClass:"nextStepInMenu",on:{"click":function($event){return _vm.nextStepInMenu(groupName.name, _vm.allGroups[groupIndex+1].name, groupIndex+1)}}},[_vm._v("Übernehmen")]):_vm._e()]):_vm._e()],2)])])}),0),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDmgPreview),expression:"showDmgPreview"}],staticClass:"dmg-sidebar"},[_c('div',{staticClass:"dmg-preview"},[_c('canvas',{staticStyle:{"width":"100%","height":"auto"},attrs:{"id":"canvas_object"}}),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('div',{staticClass:"panel-body preview_fell",staticStyle:{"background-image":"url(https://www.dmg-software.de/img/background.jpg)"}},[_c('div',{attrs:{"id":"preview_wrapper"}},[_c('div',{staticClass:"thumbnail shadow",style:({width: '100px', backgroundImage: 'url('+(_vm.selectedMaterial['Unterfuetterung']?_vm.selectedMaterial['Unterfuetterung']:'')+')'}),attrs:{"id":"preview_relining"}},[_c('div',{staticClass:"thumbnail",style:({width: '80px', backgroundImage: 'url('+(_vm.selectedMaterial['Gurtband']?_vm.selectedMaterial['Gurtband']:'')+')'}),attrs:{"id":"preview_slackline"}},[_c('div',{style:({backgroundImage: 'url('+(_vm.selectedMaterial['motiv']?_vm.selectedMaterial['motiv']:'')+')'}),attrs:{"id":"preview_edging"}},[_c('div',{staticClass:"centered"},[_vm._v("Centered")])])])])])])])])])]),_vm._v(" "),_c('div',{staticStyle:{"display":"none"}},[_vm._v(_vm._s(_vm.generateConfigurationJson))]),_vm._v(" "),_c('div',{staticClass:"dmg-sidebar-price"},[_vm._v("\n    Total Preis: "+_vm._s(_vm.getTotalPrice())+"\n  ")])])}
var staticRenderFns = []


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b2a2fec6\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b2a2fec6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dmg-container"},[_c('Configurator')],1)}
var staticRenderFns = []


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2a2fec6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-b2a2fec6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b2a2fec6\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2a2fec6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2a2fec6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/frontend/Configurator.vue":
/*!***************************************!*\
  !*** ./src/frontend/Configurator.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Configurator_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Configurator.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/frontend/Configurator.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_26a7b60c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Configurator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-26a7b60c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Configurator.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-26a7b60c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/frontend/Configurator.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
function injectStyle (context) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"sourceMap":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Configurator.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/frontend/Configurator.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Configurator_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_26a7b60c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Configurator_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_26a7b60c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Configurator_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




vue__WEBPACK_IMPORTED_MODULE_0__["default"].config.productionTip = false;

/* eslint-disable no-new */
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
  components: { App: _App__WEBPACK_IMPORTED_MODULE_1__["default"] },
  template: '<App/>'
});

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/App */ "./src/App.vue");



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  base: '/',
  mode: 'history',
  routes: [{ path: '/', name: 'App', component: _App__WEBPACK_IMPORTED_MODULE_2__["default"] }]
}));

/***/ })

/******/ });
//# sourceMappingURL=app.366568720a60354f63e7.js.map