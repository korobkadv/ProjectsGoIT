/*
Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. 
Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

*/

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

normalizeInput("Hello world"); // повертає "hello world"
normalizeInput("This ISN'T SpaM"); // повертає "this isn't spam"
