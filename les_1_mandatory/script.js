"use strict";

//Создаём начальные переменные
let money = prompt("Ваш бюджет на месяц?", ""),
		time = prompt("Введите дату в формате YYYY-MM-DD", ""),
		costs_1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
		price_1 = prompt("Во сколько обойдется?", ""),
		costs_2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
		price_2 = prompt("Во сколько обойдется?", ""),
		saving = false;

//Исходные данные в объекте
let appData = {
	budget: money,
	timeData: time,
	expenses: {
		
	},
	optionalExpenses: {

	},
	income: [],
	saving: false
}	

//Добавляем расходы в объект expenses
	appData.expenses[costs_1] = price_1;
	appData.expenses[costs_2] = price_2;
	console.log(appData.expenses);

//Рассчитываем бюджет на 1 день
let resultOut = +money/30;

//Выводим результат в модальное окно
alert("Ваш бюджет на 1 день составляет: " + resultOut);