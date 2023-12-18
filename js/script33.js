/*
Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує 
значення в параметрі maxLength.

Доповни код функції таким чином, що якщо довжина рядка:

    - не перевищує maxLength, функція повертає його в початковому вигляді.
    - більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", 
      після чого повертає скорочену версію.



*/

function formatMessage(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + "...";
  }
  return result;
}

formatMessage("Curabitur ligula sapien", 23); // повертає "Curabitur ligula sapien"
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); // повертає "Nunc sed turpis..."
