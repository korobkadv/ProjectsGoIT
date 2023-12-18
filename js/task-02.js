/*
Напиши скрипт, який для кожного елемента масиву ingredients:

    - Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
    - Додасть назву інгредієнта як його текстовий вміст.
    - Додасть елементу клас item.
    - Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const createItemLi = [];

ingredients.forEach((item) => {
  const createItem = document.createElement("li");
  createItem.textContent = item;
  createItem.classList.add("item");

  createItemLi.push(createItem);
});

listIngredients.append(...createItemLi);
