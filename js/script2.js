/*
Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. 
Перевизнач значення змінних pricePerItem і productName після їх оголошення.

Тести:

    - Змінна pricePerItem оголошена за допомогою let
    - При оголошенні змінної pricePerItem присвоєно значення — число 2000
    - Змінній pricePerItem присвоєно нове значення, більше за попереднє на 1500
    - Змінна productName оголошена за допомогою let
    - При оголошенні змінної productName присвоєно значення — рядок "Droid"
    - Змінній productName присвоєно нове значення — рядок "Repair droid"

*/

let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
productName = "Repair droid";
pricePerItem = pricePerItem + 1500;

console.log(productName);
console.log(pricePerItem);
