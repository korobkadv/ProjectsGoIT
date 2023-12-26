import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Додаємо обробники подій для полів вводу
emailInput.addEventListener('input', handleInput);
messageInput.addEventListener('input', handleInput);

// Відстежуємо зміни та зберігаємо стан у локальне сховище з використанням throttle
const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

function handleInput() {
  saveFormState();
}

// Перевіряємо стан сховища при завантаженні сторінки
const storedState = localStorage.getItem('feedback-form-state');
if (storedState) {
  const parsedState = JSON.parse(storedState);
  emailInput.value = parsedState.email;
  messageInput.value = parsedState.message;
}

// Додаємо обробник події submit для форми
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Очищаємо сховище та поля форми
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  // Виводимо у консоль об'єкт з полями email та message та їхніми значеннями
  const formValues = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formValues);
}
