"use strict";

//Принимаем число от пользователя
let num = 33721,
		numLength = num.toString().length,
		summ = 1;

//
alert("Значение переменной равно: " + num);
//Создаём цикл, находящий произведение цифр вводимого числа
for( let i = 1; i <= numLength; i++) {

	let result = Math.floor((num/Math.pow(10, i-1))%10);
	summ = summ * result;

}

//Выводим информацию пользователю
alert('Произведение цифр числа ' + num + ' равно:  ' + summ);

//Находим куб произведения цифр числа
let cube = summ**3;
alert('Куб произведения равен:  ' + cube);

// Выборка дня месяца из массива строки
alert(cube.toString().substring(0,2));