/*
Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, 
значення яких будуть задаватися під час її виклику.

    - name - назва товару
    - price - ціна товару

Доповни код функції таким чином, щоб у змінну message записувався рядок 
"You picked <product name>, price per item is <product price> credits", де <product name> і 
<product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.


Увага

Зверни увагу на те, що в коді відсутній виклик функції makeMessage. 
З цього завдання і далі ми самі будемо викликати твої функції і перевіряти те, як вони працюють. 
Результат наших перевірок ти побачиш у блоці Результати під редактором коду.


*/

function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
}

makeMessage("Radar", 6150);
makeMessage("Scanner", 3500);
makeMessage("Reactor", 8000);
