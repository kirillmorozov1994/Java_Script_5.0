"use strict";

//Создаём начальные переменные
let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while (isNaN(money) || money == null || money == "") {
		alert("Неверный ввод данных, введите Ваш бюджет в виде числа!")
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}
start();


//Исходные данные в объекте
let appData = {
	budget: money,
	timeData: time,
	expenses: {

	},
	optionalExpenses: {

	},
	income: [],
	saving: true
};	

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let costs = prompt("Введите обязательную статью расходов в этом месяце", ""),
			price = +prompt("Во сколько обойдется?", "");
		if (typeof (costs) === 'string' && typeof (costs) != null && typeof (price) != null && costs != "" && price != 0 && costs.length < 50) {
			appData.expenses[costs] = price;
		} else {
			do {
				alert('Некорректный ввод данных, повторите попытку!');
				costs = prompt("Введите обязательную статью расходов в этом месяце", ""),
					price = +prompt("Во сколько обойдется?", "");
			} while (typeof (costs) !== 'string' || typeof (costs) == null || typeof (price) == null || costs == "" || price == 0 || costs.length > 50);
			appData.expenses[costs] = price;
		}
	}
}
chooseExpenses();


//Другой способ с помощью цикла for
/* for ( i; i < 2; i++) {

		let costs = prompt("Введите обязательную статью расходов в этом месяце", "");

		if (costs == "" || costs == null) {
			do {
				alert("Некорректный ввод даных, попробуйте снова!");
				costs = prompt("Введите обязательную статью расходов в этом месяце", "");
			} while (costs == "" || costs == null);
		}

		let price = +prompt("Во сколько обойдется?", "");
			if (price == 0 || typeof(price) == null || price == NaN) {
				do {
					alert("Некорректный ввод даных, попробуйте снова!");
					price = +prompt("Во сколько обойдется?", "");
				} while (price == "" || typeof(price) == null || price == NaN);
			}

		appData.expenses[costs] = price;

} 
 */

//Другой способ с помощью цикла while
/*  while(i<2) {

		let costs = prompt("Введите обязательную статью расходов в этом месяце", "");

		if (costs == "" || costs == null) {
			do {
				alert("Некорректный ввод даных, попробуйте снова!");
				costs = prompt("Введите обязательную статью расходов в этом месяце", "");
			} while (costs == "" || costs == null);
		}

		let price = +prompt("Во сколько обойдется?", "");
		console.log(price);
		if (price == 0 || typeof (price) == null) {
			do {
				alert("Некорректный ввод даных, попробуйте снова!");
				price = +prompt("Во сколько обойдется?", "");
			} while (price == "" || typeof (price) == null);
		};

		appData.expenses[costs] = price;
		i++;

 } */

//Другой способ с помощью цикла do ... while
/* do {
	let costs = prompt("Введите обязательную статью расходов в этом месяце", ""),
			price = +prompt("Во сколько обойдется?", "");

	if (costs == "" || costs == null || price == 0 || typeof (price) == null ) {
		alert("Некорректный ввод даных, попробуйте снова!");
	} else {
		appData.expenses[costs] = price;
		i++;
	}
} while (i<2) */


function detectDayBudget() {
	//Рассчитываем суточный бюджет
	let resultOut = appData.budget / 30;
	appData.moneyPerDay = +resultOut.toFixed();
	//Выводим результат в модальное окно
	alert("Ваш суточный бюджет составляет: " + appData.moneyPerDay);
}
detectDayBudget();


/* //
switch (true) {
	case appData.moneyPerDay <= 0:
		alert('Вы в долгах :-(');
		break;
	case appData.moneyPerDay <= 100:
		alert('Минимальный уровень достатка');
		break;
	case appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000:
		alert('Средний уровень достатка');
		break;
	case appData.moneyPerDay > 2000:
		alert('Высокий уровень достатка');
		break;
	default:
		alert('Непредвиденная ошибка');
		break;
} */
function detectLevel() {
	//Уровень достатка
	if (appData.moneyPerDay < 0) {
		alert('Вы в долгах :-(');
	} else if (appData.moneyPerDay <= 100) {
		alert('Минимальный уровень достатка');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
		alert('Средний уровень достатка');
	} else if (appData.moneyPerDay > 2000) {
		alert('Высокий уровень достатка');
	} else {
		alert('Непредвиденная ошибка');
	}
}
detectLevel();

function checkSaving() {
	if (appData.saving == true) {
		let save = +prompt('Какова сумма накоплений?'),
				percent = +prompt('Под какой процент?');
		appData.monthIncome = save/100/12*percent;
		alert('Доход в месяц с вашего депозита: ' + appData.monthIncome.toFixed(2));
	}
}
checkSaving();

//Необязательные расходы
function chooseOptExpenses() {
	for( let i = 1; i <=3; i++) {
		let bindingExpenses = prompt('Статья необязательных расходов?');
		appData.optionalExpenses[i] = bindingExpenses;
	}
}
chooseOptExpenses();
console.log(appData);