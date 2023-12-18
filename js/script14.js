/*
Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат 
перевірки - буль true або false. Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. 
Введений пароль передається у параметр password.

Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. 
Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.


*/

function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  const isMatch = SAVED_PASSWORD === password;
  return isMatch;
}

isValidPassword("jqueryismyjam"); // повертає true
isValidPassword("mangodab3st"); // повертає fals
