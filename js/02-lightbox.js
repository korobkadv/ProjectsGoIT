import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const cardsGallery = createCardGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);

new SimpleLightbox(".gallery__link", {
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

// Створюємо галерею
function createCardGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>
        `;
    })
    .join("");
}
