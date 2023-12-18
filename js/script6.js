/*
Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

    - pricePerDroid - ціна одного дроїда, значення 800
    - orderedQuantity - кількість дроїдів у замовленні, значення 6
    - deliveryFee - вартість доставки, значення 50
    - totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
    - message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
*/

// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;

const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
