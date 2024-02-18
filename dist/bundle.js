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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: \"Verdana\";\r\n  font-size: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 100vh;\r\n  padding-top: 100px;\r\n}\r\n\r\n#gameboard {\r\n  width: 300px;\r\n  height: 300px;\r\n  background-color: white;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  outline: 1px solid white;\r\n}\r\n\r\n.square {\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: white;\r\n  outline: solid 1px grey;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.circle {\r\n  height: 80px;\r\n  width: 80px;\r\n  border-radius: 50%;\r\n  border: 15px solid grey;\r\n}\r\n\r\n.cross {\r\n  height: 80px;\r\n  width: 80px;\r\n  position: relative;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.cross::before,\r\n.cross::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: grey;\r\n}\r\n\r\n.cross::before {\r\n  left: 50%;\r\n  width: 30%;\r\n  margin-left: -15%;\r\n  height: 100%;\r\n}\r\n\r\n.cross::after {\r\n  top: 50%;\r\n  height: 30%;\r\n  margin-top: -15%;\r\n  width: 100%;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.chooseWeaponDiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  padding: 12px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  font-family: \"Verdana\";\r\n  font-size: 20px;\r\n  padding: 5px;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ai-tictactoe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ai-tictactoe/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ai-tictactoe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ai-tictactoe/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ai-tictactoe/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ai-tictactoe/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ai-tictactoe/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ai-tictactoe/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _minimax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minimax */ \"./src/minimax.js\");\n/* harmony import */ var _translateIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translateIndex */ \"./src/translateIndex.js\");\n/* harmony import */ var _translateIndex2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translateIndex2 */ \"./src/translateIndex2.js\");\n\r\n\r\n\r\n\r\n\r\nconst Gameboard = (() => {\r\n  //const //infoDisplay = document.querySelector(\"#info\")\r\n  const gameBoard = document.querySelector(\"#gameboard\")\r\n  const cellElements = [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"]\r\n  const restartBtn = document.querySelector(\"#restartBtn\")\r\n\r\n  let round = 1\r\n  let go = \"cross\"\r\n  //infoDisplay.textContent = `It's round ${round} and ${go}'s turn`\r\n\r\n  let minimaxBoard = [\r\n    [\"_\", \"_\", \"_\"],\r\n    [\"_\", \"_\", \"_\"],\r\n    [\"_\", \"_\", \"_\"],\r\n  ]\r\n\r\n  restartBtn.addEventListener(\"click\", () => {\r\n    deleteBoard(gameBoard)\r\n    createBoard()\r\n    minimaxBoard = [\r\n      [\"_\", \"_\", \"_\"],\r\n      [\"_\", \"_\", \"_\"],\r\n      [\"_\", \"_\", \"_\"],\r\n    ]\r\n    round = 0\r\n    go = \"cross\"\r\n    //infoDisplay.textContent = `It's round ${round} and ${go}'s turn`\r\n  })\r\n\r\n  const deleteBoard = (parent) => {\r\n    while (parent.firstChild) {\r\n      parent.removeChild(parent.firstChild)\r\n    }\r\n  }\r\n\r\n  const createBoard = () => {\r\n    cellElements.forEach((_cell, index) => {\r\n      const div = document.createElement(\"div\")\r\n      div.classList.add(\"square\")\r\n      div.id = index\r\n      div.addEventListener(\"click\", addGo)\r\n      gameBoard.append(div)\r\n    })\r\n  }\r\n\r\n  const addGo = (e) => {\r\n    let [r, c] = (0,_translateIndex__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target.id)\r\n\r\n    const div2 = document.createElement(\"div\")\r\n    div2.classList.add(go)\r\n    e.target.append(div2)\r\n    minimaxBoard[r][c] = \"x\"\r\n\r\n    displayComputerMove()\r\n\r\n    round++\r\n    //infoDisplay.textContent = `It's round ${round} and ${go}'s turn`\r\n    e.target.removeEventListener(\"click\", addGo)\r\n    checkWinner()\r\n  }\r\n\r\n  const displayComputerMove = () => {\r\n    let [bestRow, bestCol] = (0,_minimax__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(minimaxBoard)\r\n    try {\r\n      minimaxBoard[bestRow][bestCol] = \"o\"\r\n      let bestIndex = (0,_translateIndex2__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(bestRow, bestCol)\r\n\r\n      let Best = document.getElementById(`${bestIndex}`)\r\n      let div = document.createElement(\"div\")\r\n      div.classList.add(\"circle\")\r\n      Best.appendChild(div)\r\n\r\n      let div2 = document.getElementById(`${bestIndex}`)\r\n\r\n      div2.removeEventListener(\"click\", addGo)\r\n    } catch {\r\n      console.log(\"its a draw\")\r\n    }\r\n  }\r\n\r\n  const checkWinner = () => {\r\n    const allSquares = document.querySelectorAll(\".square\")\r\n\r\n    const winCombinations = [\r\n      [0, 1, 2],\r\n      [3, 4, 5],\r\n      [6, 7, 8],\r\n      [0, 3, 6],\r\n      [1, 4, 7],\r\n      [2, 5, 8],\r\n      [0, 4, 8],\r\n      [2, 4, 6],\r\n    ]\r\n\r\n    winCombinations.forEach((arr) => {\r\n      const crossWins = arr.every((cell) =>\r\n        allSquares[cell].firstChild?.classList.contains(\"cross\")\r\n      )\r\n\r\n      if (crossWins) {\r\n        //infoDisplay.textContent = \"Cross wins\"\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      } else if (round === 10 && !crossWins) {\r\n        //infoDisplay.textContent = `It's a draw`\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      }\r\n    })\r\n\r\n    winCombinations.forEach((arr) => {\r\n      const circleWins = arr.every((cell) =>\r\n        allSquares[cell].firstChild?.classList.contains(\"circle\")\r\n      )\r\n\r\n      if (circleWins) {\r\n        //infoDisplay.textContent = \"Circle wins\"\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      } else if (round === 10 && !circleWins) {\r\n        //infoDisplay.textContent = `It's a draw`\r\n        allSquares.forEach((square) =>\r\n          square.replaceWith(square.cloneNode(true))\r\n        )\r\n        return\r\n      }\r\n    })\r\n  }\r\n\r\n  return { createBoard }\r\n})()\r\n\r\nconst Board = Gameboard\r\nBoard.createBoard()\r\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/index.js?");

/***/ }),

/***/ "./src/minimax.js":
/*!************************!*\
  !*** ./src/minimax.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findBestMove)\n/* harmony export */ });\n// Algorithm Credit: https://www.geeksforgeeks.org/finding-optimal-move-in-tic-tac-toe-using-minimax-algorithm-in-game-theory/\r\n\r\nlet player = \"o\"\r\nlet opponent = \"x\"\r\n\r\nfunction isMovesLeft(board) {\r\n  for (let i = 0; i < 3; i++)\r\n    for (let j = 0; j < 3; j++) if (board[i][j] == \"_\") return true\r\n\r\n  return false\r\n}\r\n\r\nfunction evaluate(b) {\r\n  for (let row = 0; row < 3; row++) {\r\n    if (b[row][0] == b[row][1] && b[row][1] == b[row][2]) {\r\n      if (b[row][0] == player) return +10\r\n      else if (b[row][0] == opponent) return -10\r\n    }\r\n  }\r\n\r\n  for (let col = 0; col < 3; col++) {\r\n    if (b[0][col] == b[1][col] && b[1][col] == b[2][col]) {\r\n      if (b[0][col] == player) return +10\r\n      else if (b[0][col] == opponent) return -10\r\n    }\r\n  }\r\n\r\n  if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {\r\n    if (b[0][0] == player) return +10\r\n    else if (b[0][0] == opponent) return -10\r\n  }\r\n\r\n  if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) {\r\n    if (b[0][2] == player) return +10\r\n    else if (b[0][2] == opponent) return -10\r\n  }\r\n\r\n  return 0\r\n}\r\n\r\nfunction minimax(board, depth, isMax) {\r\n  let score = evaluate(board)\r\n  if (score == 10) return score\r\n  if (score == -10) return score\r\n  if (isMovesLeft(board) == false) return 0\r\n\r\n  if (isMax) {\r\n    let best = -1000\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n      for (let j = 0; j < 3; j++) {\r\n        if (board[i][j] == \"_\") {\r\n          board[i][j] = player\r\n\r\n          best = Math.max(best, minimax(board, depth + 1, !isMax))\r\n\r\n          board[i][j] = \"_\"\r\n        }\r\n      }\r\n    }\r\n    return best\r\n  } else {\r\n    let best = 1000\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n      for (let j = 0; j < 3; j++) {\r\n        if (board[i][j] == \"_\") {\r\n          board[i][j] = opponent\r\n\r\n          best = Math.min(best, minimax(board, depth + 1, !isMax))\r\n\r\n          board[i][j] = \"_\"\r\n        }\r\n      }\r\n    }\r\n    return best\r\n  }\r\n}\r\n\r\nfunction findBestMove(board) {\r\n  let bestVal = -1000\r\n  let bestMove = [-1, -1]\r\n\r\n  for (let i = 0; i < 3; i++) {\r\n    for (let j = 0; j < 3; j++) {\r\n      if (board[i][j] == \"_\") {\r\n        board[i][j] = player\r\n\r\n        let moveVal = minimax(board, 0, false)\r\n\r\n        board[i][j] = \"_\"\r\n\r\n        if (moveVal > bestVal) {\r\n          bestMove[0] = i\r\n          bestMove[1] = j\r\n          bestVal = moveVal\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return bestMove\r\n}\r\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/minimax.js?");

/***/ }),

/***/ "./src/translateIndex.js":
/*!*******************************!*\
  !*** ./src/translateIndex.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ translateIndex)\n/* harmony export */ });\nfunction translateIndex(i) {\r\n  if (i == 0) {\r\n    return [0, 0]\r\n  }\r\n  if (i == 1) {\r\n    return [0, 1]\r\n  }\r\n  if (i == 2) {\r\n    return [0, 2]\r\n  }\r\n  if (i == 3) {\r\n    return [1, 0]\r\n  }\r\n  if (i == 4) {\r\n    return [1, 1]\r\n  }\r\n  if (i == 5) {\r\n    return [1, 2]\r\n  }\r\n  if (i == 6) {\r\n    return [2, 0]\r\n  }\r\n  if (i == 7) {\r\n    return [2, 1]\r\n  }\r\n  if (i == 8) {\r\n    return [2, 2]\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/translateIndex.js?");

/***/ }),

/***/ "./src/translateIndex2.js":
/*!********************************!*\
  !*** ./src/translateIndex2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ translateIndex2)\n/* harmony export */ });\nfunction translateIndex2(row, col) {\r\n  if (row == 0 && col == 0) {\r\n    return 0\r\n  }\r\n  if (row == 0 && col == 1) {\r\n    return 1\r\n  }\r\n  if (row == 0 && col == 2) {\r\n    return 2\r\n  }\r\n  if (row == 1 && col == 0) {\r\n    return 3\r\n  }\r\n  if (row == 1 && col == 1) {\r\n    return 4\r\n  }\r\n  if (row == 1 && col == 2) {\r\n    return 5\r\n  }\r\n  if (row == 2 && col == 0) {\r\n    return 6\r\n  }\r\n  if (row == 2 && col == 1) {\r\n    return 7\r\n  }\r\n  if (row == 2 && col == 2) {\r\n    return 8\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ai-tictactoe/./src/translateIndex2.js?");

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