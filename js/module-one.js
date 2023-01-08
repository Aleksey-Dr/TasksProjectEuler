"use strict";

// -- Task 1 --

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Если выписать все натуральные числа меньше 10, кратные 3 или 5,
// то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.

// Решение

// Объявляем глобальную переменную sumMultiplesNumber,
// в которую будет записываться результат
// и присваиваем ей начальное значение - 0
let sumMultiplesNumber = 0;

// Function declaration with three options
// endNumber - задаёт максиальное значение числа для проверки его на кратность
// numberOne - первое значение числа, которому должно быть кратно endNumber
// numberTwo - второе значение числа, которому должно быть кратно endNumber
function multiplesNumber(endNumber, numberOne, numberTwo) {
    
    // Проверяем значение endNumber для остановки цикла (заданного при
    // помощи рекурсии), когда значение endNumber достигает - 0
    if (endNumber === 0) {
        // и выводим результат
        console.log("Результат");
        return console.log(sumMultiplesNumber);
    }

    // проверка на кратность первому числу
    let multiplesNumberOne = endNumber / numberOne;

    if (multiplesNumberOne - Number.parseInt(multiplesNumberOne) === 0) {
        // добавляем в sumMultiplesNumber текущее значение endNumber
        sumMultiplesNumber += endNumber;
    }

    // проверка на кратность второму числу
    let multiplesNumberTwo = endNumber / numberTwo;

    if (multiplesNumberTwo - Number.parseInt(multiplesNumberTwo) === 0) {
        // добавляем в sumMultiplesNumber текущее значение endNumber
        sumMultiplesNumber += endNumber;
    }

    // рекурсия (для зацикливания вычислений)
    return multiplesNumber(endNumber - 1, numberOne, numberTwo);
}

// вызов функции
multiplesNumber(9, 3, 5);