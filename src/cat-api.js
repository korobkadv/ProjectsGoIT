// НЕ працює AXIOS
// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_JgB0clPuL3nvKc4JFyvm6ISJhaKn3bvHlq3E5wx3cZ8JOdFI2w35Nnjv6MEpLfrB';

const API_KEY =
  'live_JgB0clPuL3nvKc4JFyvm6ISJhaKn3bvHlq3E5wx3cZ8JOdFI2w35Nnjv6MEpLfrB';
const BASE_URL = 'https://api.thecatapi.com/v1';

// Запит для отримання назв породи котів
function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

// Запит на одну породу кота
function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

// Експортуємо функції по назві
export { fetchBreeds, fetchCatByBreed };
