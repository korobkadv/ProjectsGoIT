import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

// Відстежуємо зміни з використанням throttle
form.addEventListener('input', throttle(handleInput, 500));
let formState = {};

// Зберігаємо стан у локальне сховище
function handleInput(evt) {
  formState[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

// Перевіряємо стан сховища при завантаженні сторінки
function storedState() {
  return JSON.parse(localStorage.getItem('feedback-form-state'));
}
let resultStoredState = storedState();

if (resultStoredState) {
  Object.keys(resultStoredState).map(key => {
    form.querySelector(`[name="${key}"]`).value = resultStoredState[key];
  });
}

// Додаємо обробник події submit для форми
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Виводимо у консоль об'єкт
  if (!resultStoredState) {
    resultStoredState = {};
  }
  console.log(resultStoredState);

  // Очищаємо сховище та поля форми
  localStorage.removeItem('feedback-form-state');
  event.target.reset();
  formState = {};
}
