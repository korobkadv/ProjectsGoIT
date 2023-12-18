/*
Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора 
у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

Якщо значення параметра password:

    - дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
    - збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
    - не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".

Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).


*/

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;

    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;

    default:
      message = "Access denied, wrong password!";
  }
  return message;
}

checkPassword("mangohackzor"); // повертає "Access denied, wrong password!"
checkPassword(null); // повертає "Canceled by user!"
