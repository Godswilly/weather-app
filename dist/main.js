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

eval("const getCity = document.querySelector('button.getCity');\nconst cityNameInput = document.querySelector('input.cityName');\nconst cityTag = document.querySelector('h1');\nconst cityTemp = document.querySelector('p.cityTemp');\nconst date = document.querySelector('p.date');\nconst tempDescription = document.querySelector('p.temp-description');\nconst tempCelcius = document.querySelector('button.celcius');\nconst tempFaren = document.querySelector('button.faren');\nconst wind = document.querySelector('span.wind');\nconst visibility = document.querySelector('span.visibility');\nconst humidity = document.querySelector('span.humidity');\n\nconst myKey = 'c2bfcc2580b3b62b338b0c119345b4fc';\n\nconst kelvinToCelsius = (temp) => `${(temp - 273.15).toFixed(0)}°C`;\n\nconst kelvinToFarenheit = (temp) => `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}°F`;\n\nconst weatherData = async () => {\n  try {\n    const cityName = cityNameInput.value;\n    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}`;\n    const response = await fetch(url, { mode: 'cors' });\n    const cityData = await response.json();\n    const city = await cityData;\n    cityTag.innerHTML = `${city.name} <span><sup>${city.sys.country}<sup></span>`;\n    cityTemp.innerHTML = kelvinToCelsius(city.main.temp);\n    date.innerHTML = `${Date().slice(16, 21)}, ${Date().slice(0, 10)}`;\n    cityNameInput.value = '';\n    wind.innerHTML = `Wind speed: ${city.wind.speed}m/s`;\n    visibility.innerHTML = `Visibility: ${(city.visibility) / 1000}km`;\n    humidity.innerHTML = `Humidity: ${city.main.humidity}%`;\n\n    tempCelcius.addEventListener('click', (e) => {\n      e.preventDefault();\n      cityTemp.innerHTML = kelvinToCelsius(city.main.temp);\n    });\n    tempFaren.addEventListener('click', (e) => {\n      e.preventDefault();\n      cityTemp.innerHTML = kelvinToFarenheit(city.main.temp);\n    });\n\n    if (city.main.temp >= 293) {\n      tempDescription.innerHTML = \"It's a Sunny day\";\n    } else {\n      tempDescription.innerHTML = \"It's a Cold day\";\n    }\n  } catch (err) {\n    cityNameInput.value = '';\n  }\n};\n\ngetCity.addEventListener('click', (e) => {\n  e.preventDefault();\n  weatherData();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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