import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const cardsGallery = createCardGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);

galleryContainer.addEventListener("click", openModalImages);

// Створюємо галерею
function createCardGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
        `;
    })
    .join("");
}

// Створюємо зображення для модального вікна
function createModalImages(img) {
  return basicLightbox.create(`<img src="${img}" width="1280" height="800">`);
}

// Відкриваємо модальне вікно з зображенням
function openModalImages(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const image = createModalImages(evt.target.dataset.source);

  image.show();

  // Закриття модального вікна по Escape
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      image.close();
    }
  });
}
