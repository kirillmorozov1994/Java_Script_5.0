"use strict";

//Находим все необходимые DOM элементы
let btn = document.getElementById('start'),
		budget = document.getElementsByClassName('budget-value')[0],
		dayBudget = document.getElementsByClassName('daybudget-value')[0],
		level = document.getElementsByClassName('level-value')[0],
		expenses = document.getElementsByClassName('expenses-value')[0],
		optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
		income = document.getElementsByClassName('income-value')[0],
		monthSavings = document.getElementsByClassName('monthsavings-value')[0],
		yearSavings = document.getElementsByClassName('yearsavings-value')[0],
		expensesItem = document.getElementsByClassName('expenses-item'),
		btnState_1 = document.getElementsByTagName('button')[0],
		btnState_2 = document.getElementsByTagName('button')[1],
		btnCalc = document.getElementsByTagName('button')[2],
		optionalItem = document.querySelectorAll('.optionalexpenses-item'),
		chooseIncome = document.querySelector('.choose-income'),
		chooseSumm = document.querySelector('.choose-sum'),
		choosePercent = document.querySelector('.choose-percent'),
		saving = document.querySelector('#savings'),
		year = document.querySelector('.year-value'),
		month = document.querySelector('.month-value'),
		day = document.querySelector('.day-value');


//Создаём начальные переменные
let money, time;


//Нажатие на кнопку "Начать расчёт"
btn.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == null || money == "") {
		alert("Неверный ввод данных, введите Ваш бюджет в виде числа!")
		money = +prompt("Ваш бюджет на месяц?", "");
	}
	appData.budget = money;
	appData.timeData = time;
	budget.textContent = money.toFixed();

	if (appData.budget <= 5000) {
		budget.style.color = "#800000";
	} else if (appData.budget <= 15000) {
		budget.style.color = "red";
	} else if (appData.budget > 15000 && appData.moneyPerDay <= 40000) {
		budget.style.color = "#006400";
	} else if (appData.budget > 40000) {
		budget.style.color = "#00FF00";
	} else {
		//level.textContent = 'Непредвиденная ошибка';
	}

	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();
});


//Нажатие на 1 кнопку "Утвердить"
let summ = 0;
btnState_1.addEventListener('click', function () {
	summ = 0;
	if (expensesItem[0].value && expensesItem[1].value || expensesItem[2].value && expensesItem[3].value) {
		if (+expensesItem[1].value != 0 || +expensesItem[3].value != 0) {
			if (appData.expenses)
			for (let i = 0; i < expensesItem.length; i++) {
				let a = expensesItem[i].value,
						b = +expensesItem[++i].value;
						if(a == "" && b == 0) {
							continue;
						} else {
							appData.expenses[a] = b;
							summ += b;
						}
			}
			expenses.textContent = summ;
			btnCalc.disable = false;
			btnCalc.style.filter = 'brightness(1)';
		}
	}
});


////Нажатие на 2 кнопку "Утвержить"
btnState_2.addEventListener('click', function () {
	optionalExpenses.textContent = '';
		if (optionalItem[0].value || optionalItem[1].value || optionalItem[2].value) {
			btnState_2.disable = false;
			for (let i = 0; i < optionalItem.length; i++) {
				let bindingExpenses = optionalItem[i].value;
				if (bindingExpenses == "") {
					continue;
				} else {
					appData.optionalExpenses[i] = bindingExpenses;
					optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
				}
			}
		} else {
			event.target.disable = true;
			alert("Заполните хотя бы одно поле необязательных расходов!");
		}
});


//Ввод букв в необязательные расходы
optionalItem[0].onkeypress = function (event) {
		let bindingExpenses = event.key;
		let patternName = /[^а-яА-ЯёЁ]/g;
		if (patternName.test(bindingExpenses)) {
			return false;
		}
};

optionalItem[1].onkeypress = function (event) {
	let bindingExpenses = event.key;
	let patternName = /[^а-яА-ЯёЁ]/g;
	if (patternName.test(bindingExpenses)) {
		return false;
	}
};

optionalItem[2].onkeypress = function (event) {
	let bindingExpenses = event.key;
	let patternName = /[^а-яА-ЯёЁ]/g;
	if (patternName.test(bindingExpenses)) {
		return false;
	}
};

//Ввод только цифр в поля обязательных расходов и букв в их имена
expensesItem[0].onkeypress = function (event) {
	let bindingExpenses = event.key;
	let patternName = /[^a-zA-Zа-яА-ЯёЁ]/g;
	if (patternName.test(bindingExpenses)) {
		return false;
	}
};

expensesItem[1].onkeypress = function (event) {
	let bindingExpenses = event.key;
	let patternName = /[^0-9]/g;
	if (patternName.test(bindingExpenses)) {
		return false;
	}
};

expensesItem[2].onkeypress = function (event) {
	let bindingExpenses = event.key;
	let patternName = /[^a-zA-Zа-яА-ЯёЁ]/g;
	if (patternName.test(bindingExpenses)) {
		return false;
	}
};

expensesItem[3].onkeypress = function (event) {
	let bindingExpenses = event.key;
	let patternName = /[^0-9]/g;
	if (patternName.test(bindingExpenses)) {
		return false;
	}
};

//Разблокируем кнопку "Утвердить при заполнении полей ввода"
expensesItem[0].addEventListener('input', function () {
	if (expensesItem[0].value && expensesItem[1].value || expensesItem[2].value && expensesItem[3].value) {
		btnState_1.disable = false;
		btnState_1.style.filter = 'brightness(1)';
	} else {
		btnState_1.disable = true;
		btnState_1.style.filter = 'brightness(0.6)';
	}
});

expensesItem[1].addEventListener('input', function () {
	if (expensesItem[0].value && expensesItem[1].value || expensesItem[2].value && expensesItem[3].value) {
		btnState_1.disable = false;
		btnState_1.style.filter = 'brightness(1)';
	} else {
		btnState_1.disable = true;
		btnState_1.style.filter = 'brightness(0.6)';
	}
});

expensesItem[2].addEventListener('input', function () {
	if (expensesItem[2].value && expensesItem[3].value || expensesItem[0].value && expensesItem[1].value) {
		btnState_1.disable = false;
		btnState_1.style.filter = 'brightness(1)';
	} else {
		btnState_1.disable = true;
		btnState_1.style.filter = 'brightness(0.6)';
	}
});

expensesItem[3].addEventListener('input', function () {
	if (expensesItem[2].value && expensesItem[3].value || expensesItem[0].value && expensesItem[1].value) {
		btnState_1.disable = false;
		btnState_1.style.filter = 'brightness(1)';
	} else {
		btnState_1.disable = true;
		btnState_1.style.filter = 'brightness(0.6)';
	}
});

//Нажатие кнопки "Рассчитать"
btnCalc.addEventListener('click', function () {
		
	if (appData.budget != undefined && summ != 0) {
		let resultOut = (appData.budget - summ)/ 30;
		appData.moneyPerDay = +resultOut.toFixed();
		dayBudget.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay <= 0) {
			dayBudget.style.color = "#800000";
			level.style.color = "#800000";
			level.textContent = 'Вы в долгах :-(';
		} else if (appData.moneyPerDay <= 100) {
			dayBudget.style.color = "red";
			level.style.color = "red";
			level.textContent = 'Минимальный уровень достатка';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
			dayBudget.style.color = "#006400";
			level.style.color = "#006400";
			level.textContent = 'Средний уровень достатка';
		} else if (appData.moneyPerDay > 2000) {
			dayBudget.style.color = "#00FF00";
			level.style.color = "#00FF00";
			level.textContent = 'Высокий уровень достатка';
		} else {
			level.textContent = 'Непредвиденная ошибка';
		}
	} else {
		alert('Нажмите кнопку "Начать расчет", введите Ваш бюджет, затем заполните хотя одну статью обязательных расходов и нажмите кнопку "Утвердить"' );
	}
});

//Статьи возможного дохода
chooseIncome.addEventListener('input', function (event) {
	let items = chooseIncome.value;
	appData.income = items.split(", ");
	income.textContent = appData.income;
});

//Есть ли накопления?
saving.addEventListener('click', function () {
	if (appData.saving == true) {
		appData.saving = false;
	} else {
		appData.saving = true;
	}
});

//Рассчёт накоплений
chooseSumm.addEventListener('input', function () {
	if (appData.saving == true ) {
		let summ = +chooseSumm.value,
				percent = +choosePercent.value;
		appData.monthIncome = summ / 100 / 12 * percent;
		appData.yearIncome = summ / 100 * percent;

		monthSavings.textContent = appData.monthIncome.toFixed(1);
		yearSavings.textContent = appData.yearIncome.toFixed(1);
	}
});

choosePercent.addEventListener('input', function () {
	if (appData.saving == true) {
		let summ = +chooseSumm.value,
				percent = +choosePercent.value;
		appData.monthIncome = summ / 100 / 12 * percent;
		appData.yearIncome = summ / 100 * percent;

		monthSavings.textContent = appData.monthIncome.toFixed(1);
		yearSavings.textContent = appData.yearIncome.toFixed(1);
	}
});

//=======================================================================================
//Исходные данные в объекте
let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	saving: false
};

//Начальные условия:
//1. Если не нажата кнопка "Начать рассчёт", блокировать 1 кнопку "Утвердить" и "Рассчитать"
function blockBtn() {
	if (appData.budget === undefined || expensesItem[0].value && expensesItem[1].value || expensesItem[2].value && expensesItem[3].value) {
		btnState_1.disable = true;
		btnCalc.disable = true;
		btnState_1.style.filter = 'brightness(0.6)';
		btnCalc.style.filter = 'brightness(0.6)';
	}
};
blockBtn();


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









