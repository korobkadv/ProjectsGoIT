/*
Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу 
продажів.

Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу 
дроїдів і повертає повідомлення про результат операції. Вона оголошує три параметри, значення яких будуть 
задаватися під час її виклику:

    - pricePerDroid - ціна одного дроїда
    - orderedQuantity - кіл-сть замовлених дроїдів
    - customerCredits - сума коштів на рахунку клієнта

Доповни її наступним функціоналом:

    Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
    Додай перевірку, чи зможе клієнт оплатити замовлення:
        - якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок 
            "Insufficient funds!";
        - в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: 
            "You ordered <число> droids, you have <число> credits left".



*/

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  let totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  return message;
}

makeTransaction(3000, 5, 23000); // повертає "You ordered 5 droids, you have 8000 credits left"
makeTransaction(5000, 10, 8000); // повертає "Insufficient funds!"
