/*
Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), 
перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у 
змінній price.

Якщо значення параметра type - це рядок:

    - "starter" - ціна передплати 0 кредитів.
    - "professional" - ціна передплати 20 кредитів.
    - "organization" - ціна передплати 50 кредитів.

Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}

Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція 
працювала правильно.


*/

function getSubscriptionPrice(type) {
  let price;
  switch (type) {
    case "starter":
      price = 0;
      break;

    case "professional":
      price = 20;
      break;

    case "organization":
      price = 50;
      break;
  }
  return price;
}

getSubscriptionPrice("professional"); // повертає число 20
getSubscriptionPrice("starter"); // повертає число 0
