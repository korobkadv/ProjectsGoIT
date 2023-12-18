/*
Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат 
перевірки входження підрядка name у рядок fullname.

    - fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
    - name - ім'я для перевірки входження в повне ім'я.

Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). 
Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

*/

function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}

checkForName("Egor Kolbasov", "Egor"); // повертає true
checkForName("Egor Kolbasov", "egor"); // повертає false
