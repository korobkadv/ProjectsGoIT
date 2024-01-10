// Створюємо картки для зображень
function createMarkupUnsplash(arr) {
  return arr.results
    .map(
      ({
        urls: { full, small },
        alt_description,
        likes,
        user: { name, total_photos, total_likes },
      }) =>
        `<div class="photo-card">
            <a href="${full}" class="photo-card__link" target="_blanc">
                <img src="${small}" alt="${alt_description}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                <b>Likes</b>
                ${likes}
                </p>
                <p class="info-item">
                <b>Author</b>
                ${name}
                </p>
                <p class="info-item">
                <b>Total photos</b>
                ${total_photos}
                </p>
                <p class="info-item">
                <b>Total likes</b>
                ${total_likes}
                </p>
            </div>
          </div>`
    )
    .join('');
}

// Створюємо картки для зображень
export default function createMarkupPixabay(arr) {
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

export { createMarkupUnsplash, createMarkupPixabay };
