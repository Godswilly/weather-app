const getCity = document.querySelector('button.getCity');
const cityNameInput = document.querySelector('input.cityName');
const cityTag = document.querySelector('h1');
const cityTemp = document.querySelector('p.cityTemp');
const date = document.querySelector('p.date');
const tempDescription = document.querySelector('p.temp-description');
const tempCelcius = document.querySelector('button.celcius');
const tempFaren = document.querySelector('button.faren');
const wind = document.querySelector('span.wind');
const visibility = document.querySelector('span.visibility');
const humidity = document.querySelector('span.humidity');

const myKey = 'c2bfcc2580b3b62b338b0c119345b4fc';

const kelvinToCelsius = (temp) => `${(temp - 273.15).toFixed(0)}°C`;

const kelvinToFarenheit = (temp) => `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}°F`;