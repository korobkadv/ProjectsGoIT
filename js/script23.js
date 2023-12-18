/*
Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок. Тобто число повинно 
бути меншим або дорівнювати start і більшим або дорівнювати end. Результатом виразу перевірки буде буль true або 
false.

Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

    - number - число, невходження якого перевіряється
    - start - початок числового проміжку
    - end - кінець числового проміжку

Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.

*/

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

isNumberNotInRange(10, 30, 17); // повертає false
isNumberNotInRange(10, 30, 5); // повертає true
