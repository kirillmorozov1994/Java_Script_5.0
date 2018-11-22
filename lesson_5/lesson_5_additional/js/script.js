'use strict';

let now = new Date();

//Текущее время и дата
var options_1 = {
	second: 'numeric',
	minute: 'numeric',
	hour: 'numeric'
};
var options_2 = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric'
};
alert(now.toLocaleString("ru", options_1) + " " + now.toLocaleString("ru", options_2));


//Получаем дату
function haveDate(day) {
	let today = day.getDate(),
			month = day.getMonth() + 1,
			year = day.getFullYear();
	if (today < 10) {
		today = "0" + today;
	}
	if (month < 10) {
		month = "0" + month;
	}
	return today + "." + month + "." + year;
}

let day = new Date(2019, 0, 1);

alert(haveDate(day));

//Текущий день недели
function dayWeek(date) {
	let dayWk = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

	return dayWk[date.getDay()];
	
}
let date = new Date();
alert("Сегодня " + dayWeek(date));


//Разница между датами
let	input_1 = document.querySelectorAll('.day_date')[0],
		input_2 = document.querySelectorAll('.day_date')[1],
		output = document.querySelector('.difference'),
		date1 = new Date(input_1.value),
		date2 = new Date(input_2.value),
		daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));

	output.innerHTML = "Разница между датами: <br> " + daysLag + " дня (дней)";

input_1.addEventListener('input', function () {
	let changeInp = input_1.value;
	date1 = new Date(changeInp);
	daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
	output.innerHTML = "Разница между датами: <br> " + daysLag + " дня (дней)";
}, true);
input_2.addEventListener('input', function () {
	let changeInp = input_2.value;
	date2 = new Date(changeInp);
	daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
	output.innerHTML = "Разница между датами: <br> " + daysLag + " дня (дней)";
}, true);