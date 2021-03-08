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

eval("const form = document.querySelector(\".main-section form\");\nconst input = document.querySelector(\".main-section input\");\nconst msg = document.querySelector(\".main-section .msg\");\nconst list = document.querySelector(\".ajax-section .cities\");\n\nconst apiKey = 'c2bfcc2580b3b62b338b0c119345b4fc';\n\nform.addEventListener('submit', e => {\n  e.preventDefault();\n  const inputVal = input.value;\n  const listItems = list.querySelectorAll('.ajax-section .city');\n  const listItemsArray = Array.from(listItems);\n\n  if (listItemsArray.length > 0) {\n    const filteredArray = listItemsArray.filter(el => {\n      let content = '';\n      if (inputVal.includes(',')) {\n        if (inputVal.slice(',')[1].length > 2) {\n          inputVal = inputVal.slice(',')[0];\n          content = el\n            .querySelector('.city-name span')\n            .textContent.toLowerCase();\n        } else {\n          content = el.querySelector('.city-name').dataset.name.toLowerCase();\n        }\n      } else {\n        content = el.querySelector('.city-name span').textContent.toLowerCase();\n      }\n      return content === inputVal.toLowerCase();\n    });\n\n    if (filteredArray.length > 0) {\n      msg.textContent = `You already know the weather for ${\n        filteredArray[0].querySelector('.city-name span').textContent\n      } ...otherwise be more specific by providing the country code as well 😉`;\n      form.reset();\n      input.focus();\n      return;\n    }\n  }\n  \n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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