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
	let dayWk = ["воскресенье","понедельник", "вторник", "среда", "пятница", "суббота"];

	return dayWk[date.getDay()];
	
}
let date = new Date();
alert("Сегодня " + dayWeek(date));

//Разница между датами
let date1 = new Date(2018, 0 , 1);
let date2 = new Date(2018, 0 , 10);
let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
let input = document.querySelector('#first_date');
let output = document.querySelector('.difference');
input.addEventListener('input', (event) => {
	output.innerHTML = event.target.value;
	console.log(output.innerHTML = event.target.value);
}, true);
console.log(daysLag);
