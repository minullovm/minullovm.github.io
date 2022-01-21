"use strict";

let a = new Date().toLocaleDateString();
let b = new Date().toLocaleTimeString();
alert('Привет!\nСегодня ' + a + '\nВремя сейчас ' + b + '\nЯ предлагаю сыграть тебе в игру - Угадайку!\nЖми кнопку и поехали!');


let numberRandom = Math.round(Math.random() * 100);
console.log(numberRandom);
let number = prompt('Угадайте число от 1 до 100\nУ вас есть 7 попыток');

let tryCount = 1;
let maxTryCount = 7;
for (tryCount; tryCount < 7; tryCount++) {
    if (number == numberRandom) {
       alert('Верно!');
        break;
    } else if (number > numberRandom) {
       alert('Загаданное число меньше вашего');
    } else {
       alert('Загаданное число больше вашего');
    }
    number = +prompt('Попробуйте ещё раз\nУгадайте число от 1 до 100\nУ вас осталось ' + (maxTryCount - tryCount) + ' попыток');
}

if(tryCount == maxTryCount) {
    alert (`Увы, вы проиграли... Не расстраивайтесь! Попробуйте ещё раз!\nПравильное число: ${number}\nДля того чтобы попробовать заново, просто обновите страницу`)
}
