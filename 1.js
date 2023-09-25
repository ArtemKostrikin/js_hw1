"use strict";


const celsius = prompt("Введите температуру в градусах Цельсия:");

const fahrenheit = (9 / 5) * celsius + 32;

const message = "Цельсий: " + celsius + ", Фаренгейт: " + fahrenheit;
alert(message);
