window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	let selCountry = document.querySelector('.country'),
			germCars = document.querySelector('.germany-cars'),
			italCars = document.querySelector('.italian-cars'),
			franCars = document.querySelector('.france-cars'),
			descCars = document.querySelector('.desc-cars'),
			price = document.querySelector('.price'),
			imgCars = document.querySelector('.section-img');

	function getData() {
		let request = new XMLHttpRequest();

		request.open('GET', 'js/cars.json');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		request.send();

		if(request.readyState === 4 && request.status == 200) {
			return JSON.parse(request.response);
		} else {
			imgCars.style.backgroundImage = 'url(img/error.jpg)';
		}
	}
	
	let dataServer = getData();
	console.log(dataServer);
		
});