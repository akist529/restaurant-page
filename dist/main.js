/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    background-color: #1E1C27;\\n}\\n\\nh1 {\\n    grid-row: 1 / 2;\\n}\\n\\nimg {\\n    width: 200px;\\n    background-size: cover;\\n\\n    transition: 1s;\\n}\\n\\nimg:hover {\\n    transform: scale(1.3);\\n}\\n\\nsvg {\\n    stroke: #000;\\n    stroke-width: 5;\\n    stroke-linecap: round;\\n    stroke-linejoin: round;\\n    fill: none;\\n}\\n\\n.fret {\\n    height: 150px;\\n    border-right: 5px solid white;\\n}\\n\\n.string {\\n    width: 100vw;\\n\\n    border-top: 2px solid black;\\n}\\n\\n.contentBlock {\\n    background-color: #1E1C27;\\n    border: 2px solid white;\\n    box-shadow: 5px 5px 10px black inset;\\n    font-family: \\\"Roboto\\\";\\n    font-size: 1.5rem;\\n\\n    padding: 20px;\\n}\\n\\n.contentTitle {\\n    font-family: \\\"Playfair Display\\\";\\n    font-size: 10vw;\\n    margin: auto;\\n}\\n\\n.contentHeader {\\n    display: flex;\\n    justify-content: center;\\n    padding-bottom: 20px;\\n}\\n\\n.catTitle {\\n    font-family: \\\"Oswald\\\";\\n    font-size: 5vw;\\n    letter-spacing: 8px;\\n    background-size: cover;\\n    padding: 10vw 0;\\n    filter: grayscale(100%);\\n    box-shadow: 0 0 100px 50px #000000 inset;\\n    border-radius: 20px;\\n    backdrop-filter: brightness(20%);\\n    position: relative;\\n    transition: 1s;\\n}\\n\\n.catTitle:hover {\\n    transform: scale(1.1);\\n}\\n\\n.menuItem {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    gap: 30px;\\n\\n    margin: 50px 0;\\n    line-height: 30px;\\n}\\n\\n#header {\\n    background-color: rgb(45, 020, 0);\\n    height: 150px;\\n\\n    display: grid;\\n    grid-template-rows: 1fr;\\n}\\n\\n#header button {\\n    border-radius: 100%;\\n    height: 60px;\\n    width: 60px;\\n\\n    z-index: 2;\\n}\\n\\n#fretboard {\\n    border-left: 5px solid white;\\n    border-top: 2px solid white;\\n    border-bottom: 2px solid white;\\n\\n    display: grid;\\n    grid-template-columns: repeat(5, 1fr);\\n\\n    grid-row: 1 / -1;\\n}\\n\\n#fretboard div {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n#fretboard div:first-child {\\n    display: grid;\\n    grid-template-columns: 1fr 2fr 3fr;\\n}\\n\\n#fretboard div:first-child div:last-child {\\n    border: none;\\n}\\n\\n#strings {\\n    position: absolute;\\n    z-index: 1;\\n\\n    display: grid;\\n    grid-template-columns: auto;\\n    grid-template-rows: repeat(6, 25px);\\n    top: 10px;\\n}\\n\\n#content {\\n    background-color: #353145;\\n    color: white;\\n    border-radius: 30px;\\n\\n    margin: 10vw;\\n    padding: 5vw;\\n}\\n\\n#content > div {\\n    display: grid;\\n    grid-template-rows: repeat(4, auto-fill);\\n    gap: 20px;\\n}\\n\\n#container {\\n    background-color: black;\\n    color: white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\n    const container = document.createElement(\"div\");\n    container.id = \"contact\";\n\n    const contactTitle = document.createElement(\"h1\");\n    contactTitle.textContent = \"Contact\";\n\n    container.appendChild(contactTitle);\n    document.getElementById(\"content\").appendChild(container);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ headerBar)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nfunction headerBar() {\n    const container = document.createElement(\"div\");\n    container.id = \"header\";\n\n    const fretboard = document.createElement(\"div\");\n    fretboard.id = \"fretboard\";\n\n    const strings = document.createElement(\"div\");\n    strings.id = \"strings\";\n\n    for (let i = 0; i < 5; i++) {\n        const fret = document.createElement(\"div\");\n        fret.className = \"fret\";\n\n        if (i === 1) {\n            const homeButton = document.createElement(\"button\");\n            homeButton.textContent = \"Home\";\n            homeButton.id = \"homeButton\";\n            fret.appendChild(homeButton);\n        } else if (i === 2) {\n            const menuButton = document.createElement(\"button\");\n            menuButton.textContent = \"Menu\";\n            menuButton.id = \"menuButton\";\n            fret.appendChild(menuButton);\n        } else if (i === 3) {\n            const contactButton = document.createElement(\"button\");\n            contactButton.textContent = \"Contact\";\n            contactButton.id = \"contactButton\";\n            fret.appendChild(contactButton);\n        }\n\n        fretboard.appendChild(fret);\n    }\n\n    for (let i = 0; i < 3; i++) {\n        const fret = document.createElement(\"div\");\n        fret.className = \"fret\";\n\n        fretboard.firstChild.appendChild(fret);\n    }\n\n    for (let i = 0; i < 6; i++) {\n        const string = document.createElement(\"div\");\n        string.className = \"string\";\n\n        strings.appendChild(string);\n    }\n\n    container.appendChild(fretboard);\n    container.appendChild(strings);\n    document.body.appendChild(container);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\n    const container = document.createElement(\"div\");\n    container.id = \"home\";\n\n\n    const homeTitle = document.createElement(\"h1\");\n    homeTitle.textContent = \"Rockstar Cafe\";\n    homeTitle.className = \"contentTitle\";\n    container.appendChild(homeTitle);\n\n\n    const welcome = document.createElement(\"div\");\n    const welText = document.createElement(\"p\");\n    welText.textContent = \"Rockstar Cafe offers an unparalleled experience for those who still like that old time rock & roll. You'll twist and shout for our delicious food offerings while kicking back to some foot-tapping live music - and if that's not enough to get you on your feet, an extensive craft beer selection will have you dancing in the dark in no time.\";\n    welcome.appendChild(welText);\n    welcome.className = \"contentBlock\";\n    container.appendChild(welcome);\n\n\n    const hours = document.createElement(\"div\");\n    hours.className = \"contentBlock\";\n\n    const hoursHeader = document.createElement(\"h2\");\n    hoursHeader.textContent = \"Hours of Operation\";\n    hoursHeader.className = \"contentHeader\";\n    hours.appendChild(hoursHeader);\n\n    const sunText = document.createElement(\"p\");\n    sunText.textContent = \"Sunday: 9:00AM - 5:00PM\";\n    hours.appendChild(sunText);\n\n    const monText = document.createElement(\"p\");\n    monText.textContent = \"Monday: 9:00AM - 5:00PM\";\n    hours.appendChild(monText);\n\n    const tuesText = document.createElement(\"p\");\n    tuesText.textContent = \"Tuesday: 9:00AM - 5:00PM\";\n    hours.appendChild(tuesText);\n\n    const wedText = document.createElement(\"p\");\n    wedText.textContent = \"Wednesday: 9:00AM - 5:00PM\";\n    hours.appendChild(wedText);\n\n    const thursText = document.createElement(\"p\");\n    thursText.textContent = \"Thursday: 9:00AM - 5:00PM\";\n    hours.appendChild(thursText);\n\n    const friText = document.createElement(\"p\");\n    friText.textContent = \"Friday: 9:00AM - 5:00PM\";\n    hours.appendChild(friText);\n\n    const satText = document.createElement(\"p\");\n    satText.textContent = \"Saturday: 9:00AM - 5:00PM\";\n    hours.appendChild(satText);\n\n    container.appendChild(hours);\n\n\n    const location = document.createElement(\"div\");\n    location.className = \"contentBlock\";\n\n    const locationHeader = document.createElement(\"h2\");\n    locationHeader.textContent = \"Location\";\n    locationHeader.className = \"contentHeader\";\n    location.append(locationHeader);\n\n    const locationText = document.createElement(\"p\");\n    locationText.textContent = \"101 Rockstar Avenue, Hollywood, CA\";\n    location.appendChild(locationText);\n\n    container.appendChild(location);\n\n\n    document.getElementById(\"content\").appendChild(container);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst buttons = document.querySelectorAll(\"button\");\n\nfor (const button of buttons) {\n    button.addEventListener(\"click\", function(event) {\n        document.getElementById(\"content\").firstChild.remove();\n\n        if (event.target.id === \"homeButton\") {\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        } else if (event.target.id === \"menuButton\") {\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        } else if (event.target.id === \"contactButton\") {\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        }\n    });\n}\n\nconst container = document.createElement(\"div\");\ncontainer.id = \"content\";\ndocument.body.appendChild(container);\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction menuPage() {\n    const container = document.createElement(\"div\");\n    container.id = \"menu\";\n\n    const menuTitle = document.createElement(\"h1\");\n    menuTitle.textContent = \"Our Menu\";\n    menuTitle.className = \"contentTitle\";\n    container.appendChild(menuTitle);\n\n    function menuCat(name, offset, image, position) {\n        const category = document.createElement(\"div\");\n        category.id = name.split(\" \").join(\"-\").toLowerCase();\n        const catTitle = document.createElement(\"h2\");\n        catTitle.textContent = name.toUpperCase();\n        catTitle.className = \"catTitle\";\n        catTitle.style.backgroundImage = `url(\"${image}\")`;\n        catTitle.style.backgroundPosition = `${position}`;\n        catTitle.style.paddingLeft = offset;\n        category.appendChild(catTitle);\n\n        container.appendChild(category);\n    }\n\n    function menuItem(name, desc, price, category, image, veg) {\n        const item = document.createElement(\"div\");\n        item.className = \"menuItem\";\n\n        const itemText = document.createElement(\"div\");\n\n        const itemName = document.createElement(\"h3\");\n        itemName.textContent = name;\n        const itemDesc = document.createElement(\"p\");\n        itemDesc.textContent = desc;\n        const itemPrice = document.createElement(\"p\");\n        itemPrice.innerHTML = `<strong>${price}</strong>`;\n        itemText.appendChild(itemName);\n        itemText.appendChild(itemDesc);\n        itemText.appendChild(itemPrice);\n\n        if (veg) {\n            const veg = document.createElement(\"p\");\n            veg.innerHTML = \"<em>V</em>\";\n            itemText.appendChild(veg);\n        }\n\n        item.appendChild(itemText);\n\n        if (image) {\n            const itemPic = document.createElement(\"img\");\n            itemPic.src = \"../src/images/guitar-pick.png\";\n            itemPic.style.backgroundImage = `url(${image})`;\n\n            item.appendChild(itemPic);\n        }\n\n        const catID = category.split(\" \").join(\"-\").toLowerCase();\n        \n        for (const menuCat of container.children) {\n            if (menuCat.id === catID) {\n                menuCat.appendChild(item);\n            }\n        }\n    }\n\n    menuCat(\"Starters\", \"5%\", \"../src/images/elvis.jpg\", \"30% 20%\");\n    menuItem(\"It's Only Nachos (But I Like It)\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\", \"$10\", \"Starters\", \"../src/images/natasha-bhogal-7sStoaxfJh0-unsplash.jpg\");\n    menuItem(\"Sweet Cauliflower O' Mine\", \"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\", \"$12\", \"Starters\", \"../src/images/karolina-kolodziejczak-15h2wzAlsgE-unsplash.jpg\", true);\n    menuItem(\"Live and Let Dip\", \"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\", \"$12\", \"Starters\", \"../src/images/nicholas-barbaros-FBbGyco88GU-unsplash.jpg\", true);\n    menuItem(\"Down on the Platter\", \"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\", \"$12\", \"Starters\", \"../src/images/monika-grabkowska-FVf1ESEBuMI-unsplash.jpg\", true);\n\n\n    menuCat(\"Main Show\", \"75%\", \"../src/images/mercury.jpg\", \"30% 20%\");\n    menuItem(\"Burning Love\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\", \"$17\", \"Main Show\", \"../src/images/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash.jpg\");\n    menuItem(\"Learning to Fry\", \"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\", \"$15\", \"Main Show\", \"../src/images/israel-albornoz-T1IKasSmrEg-unsplash.jpg\");\n    menuItem(\"Old Time Mac & Cheese\", \"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\", \"$11\", \"Main Show\", \"../src/images/hermes-rivera-4qzaeR_sTYA-unsplash.jpg\");\n    menuItem(\"Salmon B. Goode\", \"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\", \"$25\", \"Main Show\", \"../src/images/alice-pasqual-a2scGjpiI5E-unsplash.jpg\");\n    menuItem(\"If You Want Tacos (You've Got It)\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\", \"$19\", \"Main Show\", \"../src/images/daniel-arriola-v-UlAEJTSVw-unsplash.jpg\", true);\n\n\n    menuCat(\"Encore\", \"10%\", \"../src/images/springsteen.jpg\", \"50% 10%\");\n    menuItem(\"All You Need Is Chocolate\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\", \"$8.50\", \"Encore\", \"../src/images/pushpak-dsilva-2UeBOL7UD34-unsplash.jpg\");\n    menuItem(\"Can't Stop Eatin' You\", \"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\", \"$7.50\", \"Encore\", \"../src/images/kofi-okyere-xx1USWIvIFc-unsplash.jpg\");\n    menuItem(\"Mango Creme (Come Out Tonight)\", \"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\", \"$8.50\", \"Encore\", \"../src/images/laura-peruchi-Wo3wvnN6EJU-unsplash.jpg\");\n\n\n    menuCat(\"The Bar\", \"70%\", \"../src/images/vanhalen.jpg\", \"100% 90%\");\n    menuItem(\"Shoot to Thrill\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\", \"$7\", \"The Bar\");\n    menuItem(\"Comfortably Numb\", \"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\", \"$6\", \"The Bar\");\n    menuItem(\"Don't Stop Me Now\", \"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\", \"$8\", \"The Bar\");\n    menuItem(\"American Idiot\", \"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\", \"$7\", \"The Bar\");\n\n    const vegNotice = document.createElement(\"p\");\n    vegNotice.innerHTML = \"<em>V denotes vegetarian or vegan options<br/>Please speak to your server for dietary assistance</em>\";\n\n    container.appendChild(vegNotice);\n\n    document.getElementById(\"content\").appendChild(container);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;