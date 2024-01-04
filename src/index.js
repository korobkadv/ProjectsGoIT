import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

import { fetchBreeds, fetchCatByBreed } from './cat-api';

// Знаходимо необхідну HTML
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.hidden = true;
error.hidden = true;

// Обробляємо запит для назв породи котів
fetchBreeds()
  .then(data => {
    breedSelect.insertAdjacentHTML('beforeend', createMarkup(data));
    new SlimSelect({
      select: '#single',
    });
  })
  .catch(err => {
    error.hidden = false;
    console.log(err);
  });

function createMarkup(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

// Обробляєм вибір породи кота
breedSelect.addEventListener('change', event => {
  catInfo.textContent = '';
  loader.hidden = false;

  fetchCatByBreed(event.currentTarget.value)
    .then(data => {
      catInfo.insertAdjacentHTML('beforeend', createMarkupCatCard(data));
      loader.hidden = true;
    })
    .catch(err => {
      loader.hidden = true;
      error.hidden = false;
      console.log(err);
    });
});

// Малюємо карточку однієї породи кота
function createMarkupCatCard(arr) {
  return `
  <img src='${arr[0].url}' width='350' align='left' alt='${arr[0].breeds[0].name}'>
  <h2>${arr[0].breeds[0].name}</h2>
  <p>${arr[0].breeds[0].description}</p>
  <p><b>Temperament: </b>${arr[0].breeds[0].temperament}</p>
    `;
}
