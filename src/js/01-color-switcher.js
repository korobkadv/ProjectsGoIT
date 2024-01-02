function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Знаходимо кнопки
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

stopButton.disabled = true;
let intervalId = null;

// Вішаємо слухачів кліку
startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

// Обробка кліку по кнопці старт
function startColorChange() {
  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Обробка кліку по кнопці стоп
function stopColorChange() {
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
}
