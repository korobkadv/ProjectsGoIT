/*
Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про 
результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

    - available - доступна кількість товарів на складі
    - ordered - одиниць товару в замовленні

Використовуючи розгалуження, доповни код функції таким чином, що:

    - Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message 
      присвоюється рядок "There are no products in the order!".
    - Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок 
      "Your order is too large, there are not enough items in stock!".
    - В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".


*/

function checkStorage(available, ordered) {
  let message;
  if (ordered === 0) {
    message = "There are no products in the order!";
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
}

checkStorage(100, 50); // повертає "The order is accepted, our manager will contact you"
checkStorage(100, 130); // повертає "Your order is too large, there are not enough items in stock!"
checkStorage(70, 0); //повертає "There are no products in the order!"
