/*
Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. 
Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

    - string - оригінальний рядок
    - length - кількість символів з початку рядка для підрядка

Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.


*/

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

getSubstring("Hello world", 3); // повертає "Hel"
getSubstring("Hello world", 0); // повертає ""
