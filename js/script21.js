/*
Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, 
значення яких будуть задаватися під час її виклику:

    - number - число, входження якого перевіряється
    - start - початок числового проміжку
    - end - кінець числового проміжку

Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число 
повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль 
true або false.

*/

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

isNumberInRange(10, 30, 17); // повертає true
isNumberInRange(10, 30, 5); // повертає false
