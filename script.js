'use strict';

let user;
let number;

number = Math.floor(Math.random() * 100);
user = prompt('Угадай число от одного до 100');

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
const game = function () {
    switch (true) {
        case (user > number):
            user = prompt('Загаданное число меньше');
            game();
            break;
        case (user < number && user > 0):
            user = prompt('Загаданное число больше');
            game();
            break;
        case (!isNumber(user) && user != null):
            user = prompt('Введи число!');
            game();
            break;
        case (user == number):
            user = alert('Поздравляю, Вы угадали!!!');
            game();
            break;
        case (user == null):
            user = alert('Игра окончена');
            break;
        default:
            game();
            break;
    }
};



game();