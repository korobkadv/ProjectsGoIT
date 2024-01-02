import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// Налаштування для Flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleDateSelection(selectedDates[0]);
  },
};

// Ініціалізація Flatpickr з заданими опціями
flatpickr('#datetime-picker', options);

// Отримання посилань на елементи
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let countdownInterval;

// Функція для обробки вибору дати
function handleDateSelection(selectedDate) {
  const currentDate = new Date();
  const selectedDateTime = new Date(selectedDate);

  // Перевірка, чи вибрана дата в майбутньому
  if (selectedDateTime <= currentDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
    startButton.disabled = true;
  } else {
    startButton.disabled = false;
  }
}

// Функція для початку відліку часу
function startCountdown(selectedDate) {
  const targetTime = new Date(selectedDate).getTime();

  // Встановлення інтервалу для оновлення таймера щосекунди
  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    // Перевірка, чи минула кінцева дата
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      updateTimer(0);
      Notiflix.Notify.success('Countdown has ended!');
      startButton.disabled = true;
    } else {
      updateTimer(timeDifference);
    }
  }, 1000);
}

// Функція для оновлення таймера у інтерфейсі
function updateTimer(timeDifference) {
  const { days, hours, minutes, seconds } = convertMs(timeDifference);

  daysElement.textContent = days.toString().padStart(2, '0');
  hoursElement.textContent = hours.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Функція для конвертації мілісекунд в дні, години, хвилини і секунди
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Додавання обробника події для кнопки "Start"
startButton.addEventListener('click', () => {
  const selectedDate = new Date(
    document.getElementById('datetime-picker').value
  );
  startCountdown(selectedDate);
  startButton.disabled = true;
  Notiflix.Notify.success('Countdown started!');
});
