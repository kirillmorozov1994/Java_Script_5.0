"use strict";

//Сделать так, чтобы строка начиналась с большой буквы
let str = "урок-3-был слишком легким";
	str = str[0].toUpperCase() + str.slice(1);
	console.log(str);

//Теперь замените все “-” на пробелы
	str = str.replace(/-/g, " ");
	console.log(str);

//Из получившейся строки вырезать слово “легким”, в этом же слове заменить 2 последние буквы на букву “о”
let index = str.indexOf("легким");
	str = str.substr(index, 6).replace("им", "о");
	console.log(str);

//Вывести в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
let arr = [20, 33, 1, "Человек", 2, 3], summ = 0, result;

	for (let i = 0; i <= arr.length; i++) {
		if(typeof(arr[i]) == "number") {
			summ += arr[i]**3;
		} else {
			continue;
		}
	}
	result = Math.sqrt(summ).toFixed();
	console.log(result);

// Создайте функцию, которая принимает 1 аргумент (название произвольное)
//1)Если как аргумент передана не строка - функция оповещает об этом пользователя
//2)В полученной(как аргумент) строке функция должна убрать все пробелы в начале и в конце
//3)Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки(...)
function change(text) {
	if(typeof(text) == "string"){
		text = text.trim();
		if(text.length > 50) {
			text = text.slice(0, 47) + "...";
			return console.log(text);
		} 
		return console.log(text);
	} else {
		return console.log("Передана не строка!");
	}
}
change("                        tretetetwvbdg                 пав пвыпв пав пав      авыаыавцеп4нек    ");