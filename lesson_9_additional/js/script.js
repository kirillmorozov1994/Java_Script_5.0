window.addEventListener('DOMContentLoaded', function () {
	
	'use strict';

	//Модальное окно ===================================================
		console.log(/Trident/i.test(navigator.userAgent));
	let btn = document.querySelector('.btn'),
			popup = document.querySelector('.popup'),
			close = document.querySelector('.close');
	
	btn.addEventListener('click', function () {
			showPopup();
	});		
	close.addEventListener('click', function () {
		if (/Edge/i.test(navigator.userAgent)) {
			popup.classList.remove('fade');
			popup.classList.add('hide');
		} else if (/Trident/i.test(navigator.userAgent)) {
			popup.classList.remove('fade');
			popup.classList.add('hide');
		} else if(/Mobi/i.test(navigator.userAgent)) {
			popup.style.opacity = "0";
			popup.style.transform = "translateY(-200%)";
		} else {
			let trans = 0,
				op = 1;
			let id_1 = setInterval(hide, 1);

			function hide() {
				if (trans == 200 || op == 0) {
					clearInterval(id_1);
				} else {
					trans = trans + 0.5;
					op = op - 0.0025;
					popup.style.transform = 'translateY(' + trans + '%)';
					popup.style.opacity = op;
				}
			}
		}
	});

	//console.log(/Edge/i.test(navigator.userAgent));
	function showPopup() {

		if (/Edge/i.test(navigator.userAgent)) {
			popup.classList.remove('hide');
			popup.classList.add('fade');
		} else if (/Trident/i.test(navigator.userAgent)) {
			popup.classList.remove('hide');
			popup.classList.add('fade');
			close.style.top = '-20%';
		} else if (/Mobi/i.test(navigator.userAgent)) {
			popup.style.opacity = "1";
			popup.style.transform = "translateY(0%)";
		} else {
			let trans = 200,
				op = 0;
			let id = setInterval(fade, 1);

			function fade() {
				if (trans == 0 || op == 1) {
					clearInterval(id);
				} else {
					trans = trans - 0.5;
					op = op + 0.0025;
					popup.style.transform = 'translateY(' + trans + '%)';
					popup.style.opacity = op;
				}
			}
		}

	}
	//Модальное окно ==================================================
});