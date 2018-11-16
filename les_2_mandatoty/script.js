"use strict";

//Создаём начальные переменные
let money = +prompt("Ваш бюджет на месяц?", ""),
		time = prompt("Введите дату в формате YYYY-MM-DD", ""),
		i = 0;

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
};	

for (i; i < 2; i++) {
	let costs = prompt("Введите обязательную статью расходов в этом месяце", ""),
			price = +prompt("Во сколько обойдется?", "");
		if (typeof (costs) === 'string' && typeof (costs) != null && typeof(price) != null && costs != "" && price != 0 && costs.length <50) {
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
			if (price == 0 || typeof(price) == null) {
				do {
					alert("Некорректный ввод даных, попробуйте снова!");
					price = +prompt("Во сколько обойдется?", "");
				} while (price == "" || typeof(price) == null);
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



//Рассчитываем суточный бюджет
let resultOut = appData.budget/30;
appData.moneyPerDay = resultOut;
//Выводим результат в модальное окно
alert("Ваш суточный бюджет составляет: " + appData.moneyPerDay);

//Почему то не работает
switch (true) {
	case appData.moneyPerDay < 0:
		alert('Вы в долгах :-(');
		break;
	case appData.moneyPerDay < 100:
		alert('Минимальный уровень достатка');
		break;
	case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
		alert('Средний уровень достатка');
		break;
	case appData.moneyPerDay > 2000:
		alert('Высокий уровень достатка');
		break;
	default:
		alert('Непредвиденная ошибка');
		break;
}

/* //Рабочий вариант
if (appData.moneyPerDay < 0) {
	alert('Вы в долгах :-(');
} else if (appData.moneyPerDay < 100) {
	alert('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	alert('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	alert('Высокий уровень достатка');
} else {
	alert('Непредвиденная ошибка');
} */