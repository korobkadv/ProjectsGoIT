import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_JgB0clPuL3nvKc4JFyvm6ISJhaKn3bvHlq3E5wx3cZ8JOdFI2w35Nnjv6MEpLfrB';

// Знаходимо необхідну HTML
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

// Обробляємо запит для списку породи котів
fetchBreeds()
  .then(data => {
    breedSelect.insertAdjacentHTML('beforeend', createMarkup(data));
    new SlimSelect({
      select: '#single',
      events: {
        beforeChange: newVal => {
          changeCat(newVal[0].value);
        },
      },
    });
    loader.hidden = true;
  })
  .catch(err => {
    loader.hidden = true;
    errors(err);
  });

function createMarkup(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

// Обробляєм вибір породи кота
function changeCat(breedId) {
  catInfo.textContent = '';
  loader.hidden = false;

  fetchCatByBreed(breedId)
    .then(data => {
      catInfo.insertAdjacentHTML('beforeend', createMarkupCatCard(data));
      loader.hidden = true;
    })
    .catch(err => {
      loader.hidden = true;
      errors(err);
    });
}

// Малюємо карточку однієї породи кота
function createMarkupCatCard(arr) {
  return `
  <img src='${arr[0].url}' width='350' align='left' alt='${arr[0].breeds[0].name}'>
  <h2>${arr[0].breeds[0].name}</h2>
  <p>${arr[0].breeds[0].description}</p>
  <p><b>Temperament: </b>${arr[0].breeds[0].temperament}</p>
    `;
}

// Оброблюємо помилку на сайті
function errors(err) {
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!',
    {
      timeout: 6000,
    }
  );
  console.log(err);
}
