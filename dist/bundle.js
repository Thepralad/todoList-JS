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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nimg{\n    height: 24px;\n    width: 24px;\n}\nimg:hover{\n    cursor: pointer;\n}\n\n#odinLogo{\n    height: 30px;\n    width: 30px;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 15fr 60fr;\n    grid-template-rows: 100vh;\n}\n\n#content{\n    border-left: 1px solid black;\n    padding-top: 120px;\n    padding-left: 210px;\n}\n\n#content #projectTitle{\n    font-size: 3rem;\n}\n\n#content #items{\n    margin-top: 30px;\n}\n\n#content #items .item{\n    border-bottom: 1px solid black;\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n    margin-bottom: 10px;\n    padding: 12px 0 12px 0;\n    width: 650px;\n}\n\ninput[type=\"checkbox\"] {\n    width: 1rem;\n    height: 1rem;\n    margin-top: 4px;\n    accent-color: rgb(5, 165, 5);\n  }\n  \n\n#content #items .item .taskTitle{\n    font-size: 1.1rem;\n    font-weight: 600;\n    margin-bottom: 8px;\n}\n\n#content #items .item .date{\n    grid-column: 2 /3;\n}\n\n#content #taskCounter{\n    color: rgb(100, 100, 100);\n    margin-top: 10px;\n    margin-left: 4px;\n}\n\n#addTask p{\n    margin-top: 20px;\n    font-size: 1.1rem;\n    padding-top: 20px;\n}\n#addTask{\n    color: rgb(121, 121, 121);\n    height: 60px;\n    margin-bottom: 100px;\n}\n#addTask:hover{\n    color: rgb(228, 76, 0);\n    cursor: pointer;\n}\n\n#topSection{\n    margin: 12px;\n    display: flex;\n    justify-content: space-between;\n}\n#topSection #profile{\n    display: flex;\n}\n#topSection #profile p{\n    font-size: 1.1rem;\n    padding-top: 5px;\n}\n\n#projectBtns{\n    margin-top: 50px;\n    margin-left: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.project{\n    width: 120px;\n    height: 30px;\n    border:none;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 16px;\n    text-align: left;\n    background-color: white;\n    text-align:start;\n    cursor: pointer;\n}\n\n.calendarIco{\n    height: 15px;\n    width: 15px;\n}\ndialog{\n   margin-top: 320px;\n   margin-left: 480px;\n   height: 170px;\n   width: 450px;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    height: 140px;\n}\n\nform #title{\n    width: 20rem;\n    height: 2rem;\n}\nform #submit{\n    font-family: 'Times New Roman', Times, serif;\n    width: 8rem;\n    height: 2rem;\n    border-radius: 10px;\n    cursor: pointer;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-js/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-js/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-js/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-js/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-js/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-js/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-js/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-js/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_todo_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/todo-form */ \"./src/scripts/todo-form.js\");\n/* harmony import */ var _scripts_todo_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/todo-dom */ \"./src/scripts/todo-dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n(0,_scripts_todo_form__WEBPACK_IMPORTED_MODULE_0__.addTaskModal)();\n(0,_scripts_todo_form__WEBPACK_IMPORTED_MODULE_0__.projectBtnSelection)();\n(0,_scripts_todo_form__WEBPACK_IMPORTED_MODULE_0__.inputForm)();\n(0,_scripts_todo_dom__WEBPACK_IMPORTED_MODULE_1__.displayProject)();\n\n\n    \n\n\n//# sourceURL=webpack://todolist-js/./src/index.js?");

/***/ }),

/***/ "./src/scripts/todo-dom.js":
/*!*********************************!*\
  !*** ./src/scripts/todo-dom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProject: () => (/* binding */ displayProject),\n/* harmony export */   taskCounterUpdate: () => (/* binding */ taskCounterUpdate)\n/* harmony export */ });\n/* harmony import */ var _todo_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-storage */ \"./src/scripts/todo-storage.js\");\n/* harmony import */ var _todo_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-form.js */ \"./src/scripts/todo-form.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list.js */ \"./src/scripts/todo-list.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.js */ \"./src/scripts/utility.js\");\n\n\n\n\n\nfunction Data(){\n    const data = (0,_todo_storage__WEBPACK_IMPORTED_MODULE_0__.retrieveFromLocalStorage)();\n    const currentProj = data[_todo_form_js__WEBPACK_IMPORTED_MODULE_1__.CURRENT_PROJ_STATE];\n    return currentProj;\n}\n\nfunction isCurrentProjectValid(){\n    const currentProj = Data();\n    if(Array.isArray(currentProj)) return true;\n    else  return false;\n}\nfunction priorityColor(value, div){\n    switch (value) {\n        case 'high':\n            div.style.borderRight = '4px solid RGB(255, 124, 92)'\n            break;\n        case 'mid':\n            div.style.borderRight = '4px solid RGB(252, 241, 111)'\n            break;\n        case 'low':\n            div.style.borderRight = '4px solid RGB(98, 252, 109'\n            break;\n    \n        default:\n            break;\n    }\n}\n\nfunction datefns(value, dateP){ \n    const splitedDateArr = value.split('');\n    splitedDateArr.splice(0,8);\n    const extractedDate = splitedDateArr.join('');\n    const curDate = new Date();\n    if (value === '') {\n        dateP.textContent = 'Due today';\n    } \n    else if((extractedDate - curDate.getDate()) === 1){\n        dateP.textContent = 'Due tommorow';\n    }\n\n    else {\n        dateP.textContent = `Due ${extractedDate}th`;\n    }\n}\n\nfunction taskCounterUpdate(){\n    const taskCounterP = document.getElementById('taskCounter')\n    let noOfTasks = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.taskCounter)(_todo_form_js__WEBPACK_IMPORTED_MODULE_1__.CURRENT_PROJ_STATE);\n    if(noOfTasks === 0){\n        taskCounterP.textContent = `No tasks left 📝`;\n    }\n    else{\n        taskCounterP.textContent = `${noOfTasks} tasks left`;\n    }\n    \n}\n\nfunction displayProject(){\n    const currentProj = Data();\n    const _itemsDiv = document.getElementById('items');\n    \n    _itemsDiv.textContent = '';\n    if (isCurrentProjectValid()) {\n        for (const item of currentProj) {\n\n            taskCounterUpdate();\n            const _date = item.date;\n            const checkBox = document.createElement('input');\n            checkBox.setAttribute('type', 'checkbox');\n            \n            const itemDiv = document.createElement('div');\n            itemDiv.setAttribute('class', 'item')\n\n            const titleH4 = document.createElement('h4');\n            titleH4.setAttribute('class', 'taskTitle')\n\n            const dateP = document.createElement('p');\n            dateP.setAttribute('class', 'date')\n\n\n            titleH4.textContent = item.title;\n            \n            datefns(_date, dateP);\n\n            itemDiv.appendChild(checkBox);\n            itemDiv.appendChild(titleH4);\n            itemDiv.appendChild(dateP);\n\n\n            _itemsDiv.appendChild(itemDiv);\n\n            \n            priorityColor(item.priority, itemDiv);\n\n            checkBox.addEventListener('click', (e) => {\n                if (checkBox.checked) {\n                    titleH4.style.textDecoration = 'line-through';\n                    setTimeout(() => {\n                        _itemsDiv.removeChild(itemDiv);\n                        (0,_todo_list_js__WEBPACK_IMPORTED_MODULE_2__.popItem)(item);\n                    }, 2000);\n                }\n            });\n\n        }\n    } else {\n        console.error('currentProj is not an array:', currentProj);\n    }\n    \n}\n\n\n\n\n//# sourceURL=webpack://todolist-js/./src/scripts/todo-dom.js?");

/***/ }),

/***/ "./src/scripts/todo-form.js":
/*!**********************************!*\
  !*** ./src/scripts/todo-form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CURRENT_PROJ_STATE: () => (/* binding */ CURRENT_PROJ_STATE),\n/* harmony export */   addTaskModal: () => (/* binding */ addTaskModal),\n/* harmony export */   inputForm: () => (/* binding */ inputForm),\n/* harmony export */   projectBtnSelection: () => (/* binding */ projectBtnSelection)\n/* harmony export */ });\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list */ \"./src/scripts/todo-list.js\");\n/* harmony import */ var _todo_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-items */ \"./src/scripts/todo-items.js\");\n/* harmony import */ var _todo_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-dom */ \"./src/scripts/todo-dom.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility */ \"./src/scripts/utility.js\");\n\n\n\n\n\nlet CURRENT_PROJ_STATE = 'today';\n\nfunction projectBtnSelection(){\n    const projectBtns = document.getElementsByClassName('project');\n    for (const btn of projectBtns) {\n        btn.addEventListener('click', e => {\n            CURRENT_PROJ_STATE = e.target.textContent;\n            (0,_todo_dom__WEBPACK_IMPORTED_MODULE_2__.displayProject)()\n        })\n    }\n}\nfunction addTaskModal(){\n    const dialog = document.querySelector(\"dialog\");\n    const showButton = document.getElementById(\"addTask\");\n    const closeButton = document.getElementById(\"submit\");\n\n    showButton.addEventListener(\"click\", () => {\n        dialog.showModal();\n      });\n      closeButton.addEventListener(\"click\", (e) => {\n        dialog.close();\n        e.preventDefault();\n      });\n}\n\nfunction inputForm(){\n   document.getElementById('submit').addEventListener('click', e => {\n    const title = document.getElementById('title').value;\n    const date = document.getElementById('date').value;\n    const priority = document.getElementById('priority').value;\n    const project = CURRENT_PROJ_STATE;\n\n    if( (0,_utility__WEBPACK_IMPORTED_MODULE_3__.checkDublicates)(title, project) === false){\n        prompt('This alread exists!');\n    }\n    else{\n        const newItem = new _todo_items__WEBPACK_IMPORTED_MODULE_1__.Items(title, date, priority, project)\n        ;(0,_todo_list__WEBPACK_IMPORTED_MODULE_0__.pushItem)(newItem);\n    }\n\n    e.preventDefault();\n   });\n}\n\n\n\n\n//# sourceURL=webpack://todolist-js/./src/scripts/todo-form.js?");

/***/ }),

/***/ "./src/scripts/todo-items.js":
/*!***********************************!*\
  !*** ./src/scripts/todo-items.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Items: () => (/* binding */ Items)\n/* harmony export */ });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./src/scripts/utility.js\");\n\n\n\nclass Items{\n    constructor(title, date = 'today', priority = 'medium', project){\n        this.title = title;\n        this.date = date;\n        this.priority = priority;\n        this.project = project;\n    }\n    logItem(){\n        (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.Log)(`${this.title} ${this.date} ${this.priority} | ${this.project}`, 'green')\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todolist-js/./src/scripts/todo-items.js?");

/***/ }),

/***/ "./src/scripts/todo-list.js":
/*!**********************************!*\
  !*** ./src/scripts/todo-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectTemplate: () => (/* binding */ ProjectTemplate),\n/* harmony export */   loadProjectFromLocalStorage: () => (/* binding */ loadProjectFromLocalStorage),\n/* harmony export */   popItem: () => (/* binding */ popItem),\n/* harmony export */   pushItem: () => (/* binding */ pushItem)\n/* harmony export */ });\n/* harmony import */ var _todo_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-storage */ \"./src/scripts/todo-storage.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ \"./src/scripts/utility.js\");\n/* harmony import */ var _todo_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-dom */ \"./src/scripts/todo-dom.js\");\n\n\n\n\n\n\nconst ProjectTemplate = {\n    today: [],\n}\n\n\nfunction loadProjectFromLocalStorage(){\n    const storedProjects = (0,_todo_storage__WEBPACK_IMPORTED_MODULE_0__.retrieveFromLocalStorage)();\n    if(storedProjects){\n        return storedProjects;\n    }\n    else{\n        return ProjectTemplate;\n    }\n}\n\nconst pushItem = function(value){\n    const Projects = loadProjectFromLocalStorage();\n\n    if (!Projects.hasOwnProperty(value.project)) {\n        Projects[value.project] = [];\n    }\n\n    Projects[value.project].push(value);\n    (0,_todo_storage__WEBPACK_IMPORTED_MODULE_0__.pushToLocalStorage)(Projects);\n    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.Log)(value.title + \" added!\", \"green\");\n    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_2__.displayProject)();\n    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_2__.taskCounterUpdate)();\n}\n\nconst popItem = function(value){\n    const Projects = loadProjectFromLocalStorage();\n    Projects[value.project].splice(Projects[value.project].indexOf(value), 1);\n    (0,_todo_storage__WEBPACK_IMPORTED_MODULE_0__.pushToLocalStorage)(Projects);\n    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.Log)(value.title + \" removed!\", \"red\");\n    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_2__.taskCounterUpdate)();\n}\n\n\n     \n\n\n//# sourceURL=webpack://todolist-js/./src/scripts/todo-list.js?");

/***/ }),

/***/ "./src/scripts/todo-storage.js":
/*!*************************************!*\
  !*** ./src/scripts/todo-storage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pushToLocalStorage: () => (/* binding */ pushToLocalStorage),\n/* harmony export */   retrieveFromLocalStorage: () => (/* binding */ retrieveFromLocalStorage)\n/* harmony export */ });\nfunction pushToLocalStorage(project){\n    localStorage.setItem('Projects', JSON.stringify(project))\n}\n\n//This function returns the Projects from the local storage if available,\n//If not, it will return an object with an array['today'] in it \nfunction retrieveFromLocalStorage(){\n    const data = JSON.parse(localStorage.getItem('Projects'));\n    if(data === null){\n        return {\n            today: []\n        };\n    }\n    else{\n        return data\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todolist-js/./src/scripts/todo-storage.js?");

/***/ }),

/***/ "./src/scripts/utility.js":
/*!********************************!*\
  !*** ./src/scripts/utility.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Log: () => (/* binding */ Log),\n/* harmony export */   checkDublicates: () => (/* binding */ checkDublicates),\n/* harmony export */   taskCounter: () => (/* binding */ taskCounter),\n/* harmony export */   weekdayConv: () => (/* binding */ weekdayConv)\n/* harmony export */ });\n/* harmony import */ var _todo_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-storage */ \"./src/scripts/todo-storage.js\");\n\n\nconst Log = function(message, color){\n    console.log(`%c${message}`, `color: ${color}`)\n}\n\nconst checkDublicates = function(value, project){\n    const data = (0,_todo_storage__WEBPACK_IMPORTED_MODULE_0__.retrieveFromLocalStorage)();\n    const arr = data[project];\n        \n    for (const item of arr) {\n        if(item.title === value){\n                return false;\n            }\n        }\n    return true;\n    }\n\nconst weekdayConv = function(value){\n    let day = '';\n    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];\n    for (let i = 0; i < value; i++) {\n        day = weekdays[i]\n    }\n    return day;\n}\n\nfunction taskCounter(value){\n    let data = (0,_todo_storage__WEBPACK_IMPORTED_MODULE_0__.retrieveFromLocalStorage)();\n    return data[value].length;\n\n}\n\n\n\n\n//# sourceURL=webpack://todolist-js/./src/scripts/utility.js?");

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