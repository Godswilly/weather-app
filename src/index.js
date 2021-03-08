const form = document.querySelector(".main-section form");
const input = document.querySelector(".main-section input");
const msg = document.querySelector(".main-section .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = 'c2bfcc2580b3b62b338b0c119345b4fc';

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputVal = input.value;
  const listItems = list.querySelectorAll('.ajax-section .city');
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = '';
      if (inputVal.includes(',')) {
        if (inputVal.slice(',')[1].length > 2) {
          inputVal = inputVal.slice(',')[0];
          content = el
            .querySelector('.city-name span')
            .textContent.toLowerCase();
        } else {
          content = el.querySelector('.city-name').dataset.name.toLowerCase();
        }
      } else {
        content = el.querySelector('.city-name span').textContent.toLowerCase();
      }
      return content === inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector('.city-name span').textContent
      } ...otherwise be more specific by providing the country code as well 😉`;
      form.reset();
      input.focus();
      return;
    }
  }

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
const celciusToFarenheit = (celcius) => ((celcius * 9) / 5 + 32).toFixed(2);

fetch(url)
    .then(response => response.json())
    .then(data => {
      const {
        main, name, sys, weather,
      } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0].icon}.svg`;
      const li = document.createElement('li');
      li.classList.add('city');
      const markup = `
        <h1 class='city-name' data-name='${name},${sys.country}'>
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h1>
        <div class='city-temp'>${Math.round(main.temp)}<sup>°C</sup> / ${celciusToFarenheit(Math.round(main.temp))}<sup>°F</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
  weather[0].description
}">
          <figcaption>${weather[0].description}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = 'Please search for a valid city 😩';
    });

  msg.textContent = '';
  form.reset();
  input.focus();
  
});
