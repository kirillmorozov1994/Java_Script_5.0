"use strict";

//Создаём массив с днями недели
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		toDay = 'Friday';
//Выводим дни недели в строку
	document.write(week + '<br>');

//Выводим дни недели с новой строки
	for (let i = 0; i < week.length; i++) {
		if (i == 5 || i == 6) {
			document.write('<br>' + '<b>' + week[i] + '</b>');
			continue;
		} else if (i == 4) {
			document.write('<br>' + '<i>' + week[i] + '</i>');
			continue;
		}
		document.write( '<br>' + week[i]);
	}
//Создаём массив arr[]
let arr = ['356464','6546464', '245356634', '754353', '365464', '53452', '743242'];

//Выводим числа, начинающиеся на 3 и 7
for (let i = 0; i < arr.length; i++) {
	if (arr[i].substring(0,1) == 3 || arr[i].substring(0,1) == 7) {
		console.log(arr[i]);
	}
}