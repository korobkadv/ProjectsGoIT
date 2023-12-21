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

/*
Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. 

Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

    - Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
    - Реалізація делегування на ul.gallery і отримання url великого зображення.
    - Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і 
      додай у проект посилання на мініфіковані (.min) файли бібліотеки.
    - Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
    - Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку 
      модального вікна із зображенням з прикладів бібліотеки basicLightbox.
    - Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури 
      було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного 
      закриття модального вікна.

Розмітка елемента галереї

Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в 
href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>

Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде 
перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

*/
