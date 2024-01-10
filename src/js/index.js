import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './requestPixabay';

let currentPage = 1;
let valueInput = 'space';
let lastPage = false;
let lightbox;

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterend', `<div class="guard"></div>`);
const target = document.querySelector('.guard');

// Встановлюємо лоадер
gallery.insertAdjacentHTML('afterend', `<div class="loader" hidden></div>`);
const loader = document.querySelector('.loader');

// Нескінченний скрол
async function infiniteScroll(totalPage) {
  let options = {
    root: null,
    rootMargin: '300px',
    threshold: 1.0,
  };

  // Накладаєм слідкування
  let observer = new IntersectionObserver(onLoad, options);
  observer.observe(target);

  // Функція додання нових зображень в кінець сторінки
  async function onLoad(entries, observer) {
    if (entries[0].isIntersecting && currentPage <= totalPage) {
      if (currentPage === totalPage) {
        observer.unobserve(target);
        lastPage = true;
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
    if (lastPage) {
      target.innerHTML =
        "We're sorry, but you've reached the end of search results.";
      target.classList.add('lastPage');
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
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

// Вставляємо картки з зображеннями в HTML
async function createGallery(valueInput) {
  try {
    const resp = await getImages(valueInput, currentPage);

    if (resp.total === 0) {
      gallery.innerHTML = '';
      loader.hidden = true;
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
export async function messages(types, text) {
  Notiflix.Notify[types](text, {
    timeout: 3000,
  });
}
