import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM = 'feedback-form-state';
let formState = {};
let resultStoredState = {};

// Перевіряємо стан сховища і якщо щось є то виводимо в форму
function storedState() {
  let storedState = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
  if (storedState) {
    resultStoredState = storedState;
  }
}

function outputToForm() {
  storedState();
  if (resultStoredState) {
    Object.keys(resultStoredState).map(key => {
      form.querySelector(`[name="${key}"]`).value = resultStoredState[key];
    });
  }
}

outputToForm();

// Відстежуємо зміни в формі з використанням throttle
form.addEventListener('input', throttle(handleInput, 500));

// Зберігаємо стан форми у локальне сховище
function handleInput(evt) {
  formState[evt.target.name] = evt.target.value;

  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formState));
}

// Додаємо обробник події submit для форми
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Виводимо у консоль об'єкт
  storedState();

  if (Object.keys(resultStoredState).length === 0) {
    console.log('Write something down on the form!');
  } else {
    console.log(resultStoredState);
  }

  // Очищаємо сховище та поля форми
  localStorage.removeItem(FEEDBACK_FORM);
  event.target.reset();
  formState = {};
  resultStoredState = {};
}
