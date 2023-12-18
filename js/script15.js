/*
Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

    - Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується 
      рядок "You are an adult".
    - В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".



*/

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return message;
}

checkAge(20); // повертає "You are an adult"
checkAge(14); // повертає "You are a minor"
