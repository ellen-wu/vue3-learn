/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {sum} = __webpack_require__(/*! ./two */ \"./src/two.js\");\r\n\r\nconsole.log(\"main: caculator sum = \" + sum);\r\n\n\n//# sourceURL=webpack://webpack01/./src/main.js?");

/***/ }),

/***/ "./src/one.js":
/*!********************!*\
  !*** ./src/one.js ***!
  \********************/
/***/ ((module) => {

eval("let n = 100;\r\n\r\nfunction add(x, y) {\r\n    return x + y;\r\n}\r\n\r\nfunction demo(string) {\r\n    return string;\r\n}\r\n\r\nmodule.exports = {n, add, demo}\r\n\n\n//# sourceURL=webpack://webpack01/./src/one.js?");

/***/ }),

/***/ "./src/two.js":
/*!********************!*\
  !*** ./src/two.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {n, add} = __webpack_require__(/*! ./one */ \"./src/one.js\")\r\n\r\nlet sum = add(n, 20)\r\n\r\nmodule.exports = {sum}\r\n\r\n\n\n//# sourceURL=webpack://webpack01/./src/two.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;