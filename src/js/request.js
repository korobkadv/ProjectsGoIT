import axios from 'axios';

const BASE_URL_UNSPLASH = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY_UNSPLASH = '5yJkCLsmVv3qaXZ14UY_FkOalcWXDMASHFlh5eHy-eA';

const BASE_URL_PIXABAY = 'https://pixabay.com/api/';
const ACCESS_KEY_PIXABAY = '20351609-965303b189c8fb7b47d74cc62';

let params;
let headers;
let base_url;

// Запрос на сервер для отримання зображень
async function getImages(valueInput, currentPage, userSelectedAPI) {
  if (userSelectedAPI === 'pixabay') {
    base_url = BASE_URL_PIXABAY;
    params = {
      key: ACCESS_KEY_PIXABAY,
      q: valueInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      lang: 'en',
      page: currentPage,
    };
  }
  if (userSelectedAPI === 'unsplash') {
    base_url = BASE_URL_UNSPLASH;
    params = {
      query: valueInput,
      orientation: 'landscape',
      per_page: 30, // Це максімум на Unsplash
      lang: 'en',
      page: currentPage,
    };
    headers = {
      Authorization: `Client-ID ${ACCESS_KEY_UNSPLASH}`,
    };
  }

  try {
    const response = await axios.get(base_url, { params, headers });
    return response.data;
  } catch (error) {
    throw new Error('The server is not responding or the request is invalid.');
  }
}

// Експортуємо функції по назві
export { getImages };
