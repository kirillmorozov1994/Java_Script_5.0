window.addEventListener('DOMContentLoaded', function () {
	
	'use strict';
	let age = document.getElementById('age');
	
	age.addEventListener('change', function () {
		showUser.call(age, 'Morozov', 'Kirill');
	});
	function showUser(surname, name) {
		alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	}	
});