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
  
});
