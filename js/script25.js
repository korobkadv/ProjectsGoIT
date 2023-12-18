/*
Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

*/

function checkStorage(available, ordered) {
  let message;
  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";
  return message;
}

checkStorage(100, 50); // повертає "The order is accepted, our manager will contact you"
checkStorage(100, 130); // повертає "Not enough goods in stock!"
