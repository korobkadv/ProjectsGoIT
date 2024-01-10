import Notiflix from 'notiflix';

// Функція виводу повідомлень на сайті
export async function messages(types, text) {
  Notiflix.Notify[types](text, {
    timeout: 3000,
  });
}
