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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const getCity = document.querySelector('button.getCity');\nconst cityNameInput = document.querySelector('input.cityName');\nconst cityTag = document.querySelector('h1');\nconst cityTemp = document.querySelector('p.cityTemp');\nconst date = document.querySelector('p.date');\nconst tempDescription = document.querySelector('p.temp-description');\nconst tempCelcius = document.querySelector('button.celcius');\nconst tempFaren = document.querySelector('button.faren');\nconst wind = document.querySelector('span.wind');\nconst visibility = document.querySelector('span.visibility');\nconst humidity = document.querySelector('span.humidity');\n\nconst myKey = 'c2bfcc2580b3b62b338b0c119345b4fc';\n\nconst kelvinToCelsius = (temp) => `${(temp - 273.15).toFixed(0)}°C`;\n\nconst kelvinToFarenheit = (temp) => `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}°F`;\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;