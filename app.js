"use strict";

let numberRandom = Math.round(Math.random() * 100);
console.log(numberRandom);
let number = prompt('Введите число от 1 до 100\nУ вас есть 7 попыток');

let tryCount = 1;
let maxTryCount = 7;
for (tryCount; tryCount < 7; tryCount++) {
    if (number == numberRandom) {
       alert('Верно!<br>');
        break;
    } else if (number > numberRandom) {
       alert('Загаданное число меньше вашего');
    } else {
       alert('Загаданное число больше вашего');
    }
    number = +prompt('Попробуйте ещё раз, Введите число от 1 до 100\nУ вас осталось ' + (maxTryCount - tryCount) + ' попыток');
}
