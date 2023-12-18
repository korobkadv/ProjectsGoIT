/*
Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з 
паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається 
у змінній message.

    - Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується 
      рядок "Canceled by user!".
    - Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок 
      "Welcome!".
    - Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".


*/

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}

checkPassword("mangohackzor"); // повертає "Access denied, wrong password!"
checkPassword(null); // повертає "Canceled by user!"
checkPassword("jqueryismyjam"); // повертає "Welcome!"
