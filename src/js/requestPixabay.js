import axios from 'axios';
import { messages } from './index';

const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '20351609-965303b189c8fb7b47d74cc62';
const API_KEY = '41740366-db707f4ee602d5a7346c5644f';

// Запрос на сервер для отримання зображень
async function getImages(valueInput, currentPage) {
  const params = {
    key: API_KEY,
    q: valueInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    lang: 'en',
    page: currentPage,
  };
  const headers = {
    'Access-Control-Allow-Origin': '*',
  };

  try {
    const response = await axios.get(BASE_URL, { params, headers });
    return response.data;
  } catch (error) {
    messages(
      'failure',
      'The server is not responding or the request is invalid.'
    );
    throw new Error('The server is not responding or the request is invalid.');
  }
}

// Експортуємо функції по назві
export { getImages };
