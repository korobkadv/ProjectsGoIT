// НЕ працює AXIOS
// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_JgB0clPuL3nvKc4JFyvm6ISJhaKn3bvHlq3E5wx3cZ8JOdFI2w35Nnjv6MEpLfrB';

const API_KEY =
  'live_JgB0clPuL3nvKc4JFyvm6ISJhaKn3bvHlq3E5wx3cZ8JOdFI2w35Nnjv6MEpLfrB';

// Знаходимо необхідну HTML
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

// Запит для отримання назв котів
function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
}

// Обробляємо запит для назв породи котів
fetchBreeds()
  .then(data => {
    breedSelect.insertAdjacentHTML('beforeend', createMarkup(data));
  })
  .catch(err => console.log(err));

function createMarkup(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

// Обробляєм вибір породи кота
breedSelect.addEventListener('change', event => {
  fetchCatByBreed(event.currentTarget.value)
    .then(data => {
      catInfo.textContent = '';
      catInfo.insertAdjacentHTML('beforeend', createMarkupCatCard(data));
    })
    .catch(err => console.log(err));
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

// Запит на одну породу кота
function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

// Експортуємо функції по назві
export { breedSelect, fetchBreeds };
