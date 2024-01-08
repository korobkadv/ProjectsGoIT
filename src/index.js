import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

let currentPage = 1;
let valueInput = '';
let lightbox;

gallery.insertAdjacentHTML('afterend', `<div class="loader" hidden></div>`);
const loader = document.querySelector('.loader');

// Нескінченний скрол
async function infiniteScroll(totalPage) {
  gallery.insertAdjacentHTML('afterend', `<div class="guard"></div>`);

  let options = {
    root: null,
    rootMargin: '300px',
    threshold: 1.0,
  };

  // Накладаєм слідкування
  let observer = new IntersectionObserver(onLoad, options);
  const target = document.querySelector('.guard');
  observer.observe(target);

  // Функція додання нових зображень в кінець сторінки
  async function onLoad(entries, observer) {
    if (entries[0].isIntersecting && currentPage <= totalPage) {
      if (currentPage === totalPage) {
        observer.unobserve(target);
      }
      if (currentPage > 1) {
        loader.hidden = false;
        await createGallery(valueInput);
        // Викликаємо функцію прокручування
        await smoothScroll();
        currentPage += 1;
        loader.hidden = true;
      }
    }

    // Умова при першому пошуку
    if (currentPage === 1 && !entries[0].isIntersecting) {
      currentPage += 1;
    }
  }
}

// Обробляємо натискання кнопки пошуку
searchForm.addEventListener('submit', handlerForm);
async function handlerForm(evt) {
  evt.preventDefault();

  loader.hidden = false;

  valueInput = new FormData(evt.currentTarget).get('searchQuery');
  gallery.innerHTML = '';
  currentPage = 1;

  const totalHits = await createGallery(valueInput);
  if (totalHits) {
    await messages('success', `Hooray! We found ${totalHits} images.`);
    await infiniteScroll(Math.ceil(totalHits / 40));
    loader.hidden = true;
  }
}

// Функція прокручування сторінки
async function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2, // Змініть це значення, якщо потрібно інше прокручування
    behavior: 'smooth',
  });
}

// Вставляємо картки з зображеннями в HTML
async function createGallery(valueInput) {
  try {
    const resp = await getImages(valueInput);

    if (resp.total === 0) {
      gallery.innerHTML = '';
      return messages(
        'failure',
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    gallery.insertAdjacentHTML('beforeend', createMarkup(resp));

    // Налаштування SimpleLightbox. Оновлюємо якщо доповнили сторінку скролом
    if (lightbox) {
      lightbox.destroy();
    }
    lightbox = new SimpleLightbox('.photo-card__link', {
      captions: true,
      captionSelector: 'img',
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });

    return resp.totalHits;
  } catch (e) {
    console.error(e);
  }
}

// Запрос на сервер для отримання зображень
async function getImages(valueInput) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '20351609-965303b189c8fb7b47d74cc62';

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

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    messages(
      'failure',
      'The server is not responding or the request is invalid.'
    );
    throw new Error('The server is not responding or the request is invalid.');
  }
}

// Створюємо картки для зображень
function createMarkup(arr) {
  return arr.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card">
            <a href="${largeImageURL}" class="photo-card__link">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                <b>Likes</b>
                ${likes}
                </p>
                <p class="info-item">
                <b>Views</b>
                ${views}
                </p>
                <p class="info-item">
                <b>Comments</b>
                ${comments}
                </p>
                <p class="info-item">
                <b>Downloads</b>
                ${downloads}
                </p>
            </div>
          </div>`
    )
    .join('');
}

// Функція виводу повідомлень на сайті
async function messages(types, text) {
  Notiflix.Notify[types](text, {
    timeout: 3000,
  });
}
