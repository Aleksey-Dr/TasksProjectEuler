"use strict";

// -- Task 1 --
// Version 1

// Решение

// Объявляем глобальную переменную sumMultiplesNumber,
// в которую будет записываться результат
// и присваиваем ей начальное значение - 0

// console.log("Task 1");
// let sumMultiplesNumber = 0;

// Function declaration with three options
// endNumber - задаёт максиальное значение числа для проверки его на кратность
// numberOne - первое значение числа, которому должно быть кратно endNumber
// numberTwo - второе значение числа, которому должно быть кратно endNumber
// function multiplesNumber(endNumber, numberOne, numberTwo) {
    // Проверяем значение endNumber для остановки цикла (заданного при
    // помощи рекурсии), когда значение endNumber достигает - 0
    // if (endNumber === 0) {
        // и выводим результат
        // console.log("Результат");
        // return console.log(sumMultiplesNumber);
    // }
    // проверка на кратность первому числу
    // let multiplesNumberOne = endNumber / numberOne;
    // проверка на кратность второму числу
    // let multiplesNumberTwo = endNumber / numberTwo;

    // if (multiplesNumberOne - Number.parseInt(multiplesNumberOne) === 0) {
        // добавляем в sumMultiplesNumber текущее значение endNumber
        // sumMultiplesNumber += endNumber;
    // } else if (multiplesNumberTwo - Number.parseInt(multiplesNumberTwo) === 0) {
        // добавляем в sumMultiplesNumber текущее значение endNumber
        // sumMultiplesNumber += endNumber;
    // }
    // recursion (для зацикливания вычислений)
    // return multiplesNumber(endNumber - 1, numberOne, numberTwo);
// }
// вызов функции
// multiplesNumber(999, 3, 5);

// -- Task 2 --

// Решение
// console.log("Task 2");
// let sumEvenFibonacciNumbers = 0;
// let firstFibonacciItem = 1;
// let secondFibonacciItem = 2;

// function evenFibonacciNumbers(endFibonacciSequence) {

//     if (firstFibonacciItem >= endFibonacciSequence) {
//         return console.log("Answer:" + " " + sumEvenFibonacciNumbers);
//     }

//     if ((firstFibonacciItem / 2 - Number.parseInt(firstFibonacciItem / 2)) === 0) {
//         sumEvenFibonacciNumbers += firstFibonacciItem;

//     }

//     let sumFibonacciItems = firstFibonacciItem + secondFibonacciItem;
//     firstFibonacciItem = secondFibonacciItem;
//     secondFibonacciItem = sumFibonacciItems;

    // recursion
//     evenFibonacciNumbers(endFibonacciSequence);
// }

// evenFibonacciNumbers(4000000);
// console.log("Stop!")