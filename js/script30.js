/*
Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. 
Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

*/

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

getNameLength("Poly"); // повертає "Name Poly is 4 characters long"
