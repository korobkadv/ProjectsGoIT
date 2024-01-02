import Notiflix from 'notiflix';

// Додаємо обробник події для форми
document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Отримуємо значення полів форми
  const firstDelay = parseInt(this.elements.delay.value);
  const step = parseInt(this.elements.step.value);
  const amount = parseInt(this.elements.amount.value);

  // чи коректно введені всі значення
  if (isNaN(firstDelay) || isNaN(step) || isNaN(amount)) {
    Notiflix.Notify.failure(
      'Please fill in all the fields with valid numbers.'
    );
    return;
  }

  createPromises(firstDelay, step, amount);
});

// Функція для створення промісу з вказаною затримкою
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// Функція для створення та обробки масиву промісів
function createPromises(firstDelay, step, amount) {
  for (let i = 1; i <= amount; i++) {
    createPromise(i, firstDelay + (i - 1) * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
