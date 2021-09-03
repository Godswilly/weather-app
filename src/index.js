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

const weatherData = async () => {
  try {
    const cityName = cityNameInput.value;
    let url;
    if (cityName === '') {
      url = `http://api.openweathermap.org/data/2.5/weather?q=${'aba'}&appid=${myKey}`;
    } else {
      url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}`;
    }
    const response = await fetch(url, { mode: 'cors' });
    const cityData = await response.json();
    const city = await cityData;
    cityTag.innerHTML = `${city.name} <span><sup>${city.sys.country}<sup></span>`;
    cityTemp.innerHTML = kelvinToCelsius(city.main.temp);
    date.innerHTML = `${Date().slice(16, 21)}, ${Date().slice(0, 10)}`;
    cityNameInput.value = '';
    wind.innerHTML = `Wind speed: ${city.wind.speed}m/s`;
    visibility.innerHTML = `Visibility: ${(city.visibility) / 1000}km`;
    humidity.innerHTML = `Humidity: ${city.main.humidity}%`;

    tempCelcius.addEventListener('click', (e) => {
      e.preventDefault();
      cityTemp.innerHTML = kelvinToCelsius(city.main.temp);
    });
    tempFaren.addEventListener('click', (e) => {
      e.preventDefault();
      cityTemp.innerHTML = kelvinToFarenheit(city.main.temp);
    });

    if (city.main.temp >= 293) {
      tempDescription.innerHTML = "It's a Sunny day";
    } else {
      tempDescription.innerHTML = "It's a Cold day";
    }
  } catch (err) {
    cityNameInput.value = '';
  }
};

getCity.addEventListener('click', (e) => {
  e.preventDefault();
  weatherData();
});

weatherData();
