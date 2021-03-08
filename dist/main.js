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

eval("const form = document.querySelector('.main-section form');\nconst input = document.querySelector('.main-section input');\nconst msg = document.querySelector('.main-section .msg');\nconst list = document.querySelector('.ajax-section .cities');\n\nconst myKey = config.API_KEY;\n\nform.addEventListener('submit', e => {\n  e.preventDefault();\n  let inputVal = input.value;\n  const listItems = list.querySelectorAll('.ajax-section .city');\n  const listItemsArray = Array.from(listItems);\n\n  if (listItemsArray.length > 0) {\n    const filteredArray = listItemsArray.filter(el => {\n      let content = '';\n      if (inputVal.includes(',')) {\n        if (inputVal.slice(',')[1].length > 2) {\n          inputVal = inputVal.slice(',')[0];// eslint-disable-line\n          content = el\n            .querySelector('.city-name span')\n            .textContent.toLowerCase();\n        } else {\n          content = el.querySelector('.city-name').dataset.name.toLowerCase();\n        }\n      } else {\n        content = el.querySelector('.city-name span').textContent.toLowerCase();\n      }\n      return content === inputVal.toLowerCase();\n    });\n\n    if (filteredArray.length > 0) {\n      msg.textContent = `You already know the weather for ${\n        filteredArray[0].querySelector('.city-name span').textContent\n      } ...otherwise be more specific by providing the country code as well 😉`;\n      form.reset();\n      input.focus();\n      return;\n    }\n  }\n\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${myKey}&units=metric`;\n  const celciusToFarenheit = (celcius) => ((celcius * 9) / 5 + 32).toFixed(2);\n\n  fetch(url)\n    .then(response => response.json())\n    .then(data => {\n      const {\n        main, name, sys, weather,\n      } = data;\n      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${\n        weather[0].icon}.svg`;\n      const li = document.createElement('li');\n      li.classList.add('city');\n      const markup = `\n        <h1 class='city-name' data-name='${name},${sys.country}'>\n          <span>${name}</span>\n          <sup>${sys.country}</sup>\n        </h1>\n        <div class='city-temp'>${Math.round(main.temp)}<sup>°C</sup> / ${celciusToFarenheit(Math.round(main.temp))}<sup>°F</sup></div>\n        <figure>\n          <img class=\"city-icon\" src=\"${icon}\" alt=\"${\n  weather[0].description\n}\">\n          <figcaption>${weather[0].description}</figcaption>\n        </figure>\n      `;\n      li.innerHTML = markup;\n      list.appendChild(li);\n    })\n    .catch(() => {\n      msg.textContent = 'Please search for a valid city 😩';\n    });\n\n  msg.textContent = '';\n  form.reset();\n  input.focus();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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