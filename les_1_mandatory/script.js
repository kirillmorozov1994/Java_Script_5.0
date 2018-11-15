"use strict";

//Создаём начальные переменные
let money = prompt("Ваш бюджет на месяц?", ""),
		time = prompt("Введите дату в формате YYYY-MM-DD", ""),
		costs = prompt("Введите обязательную статью расходов в этом месяце", ""),
		price = prompt("Во сколько обойдется?", ""),
		saving = false;

//Исходные данные в объекте
let appData = {
	budget: money,
	timeData: time,
	expenses: {
		[costs]: price
	},
	optionalExpenses: {

	},
	income: [1,2],
	saving: false
}	

// Выборка дня месяца из массива строки
let timeDay1 = ("" + time).split('')[8],
		timeDay2 = ("" + time).split('')[9],
		difference = 30 - +(timeDay1+timeDay2);

//Рассчитываем бюджет на 1 день после расходов статьи
let resultOut = Math.floor((+money - +price)/difference);

//Выводим результат в модальное окно
alert("Ваш бюджет на 1 день составляет: " + resultOut);