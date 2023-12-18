/*
Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. 
Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.

Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює рядкам 
"pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.

*/

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

  return canAccessContent;
}

checkIfCanAccessContent("pro"); // повертає true
checkIfCanAccessContent("starter"); // повертає false
