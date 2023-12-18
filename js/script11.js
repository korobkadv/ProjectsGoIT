/*
Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри, 
значення яких будуть задаватися під час її виклику.

    - orderedQuantity - кількість одиниць товару в замовленні;
    - pricePerItem - ціна однієї одиниці товару.

Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна 
сума покупки - результат множення кількості товарів на ціну одного.


*/

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
}

calculateTotalPrice(5, 100); // повертає 500
calculateTotalPrice(1, 3500); // повертає 3500
