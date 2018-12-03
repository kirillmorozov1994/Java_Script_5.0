window.addEventListener('DOMContentLoaded', function () {
	
	'use strict';
	//Информационные табы ==============================================
	let tab = document.querySelectorAll('.info-header-tab'),
			info = document.querySelector('.info-header'),
			tabContent = document.querySelectorAll('.info-tabcontent');
	
	let hideTabContent = (a) => {
		for(let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}


	hideTabContent(1);

	let showTabContent = (b) => {
		if(tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if(target && target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
	//Информационные табы ==============================================

	//Таймер ===========================================================
	let deadLine = '2018-12-07';

	let getTimerRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor((t/1000) % 60),
				minutes = Math.floor((t/1000/60) % 60),
				hours = Math.floor((t/(1000*60*60)));

				return {
					'total' : t,
					'hours' : hours,
					'minutes' : minutes,
					'seconds' : seconds
				};
	}
	
	let setClock = (id, endtime) => {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');
				let timeInterval = setInterval(upDateClock, 1000);

				function upDateClock(a = '0', b = '00') {
					let t = getTimerRemaining(endtime);
						if (t.hours < 10) {
							t.hours = `0 + ${t.hours}`;
						}
						if (t.minutes < 10) {
							t.minutes= `0 + ${t.minutes}`;
						}
						if (t.seconds < 10) {
							t.seconds = `0 + ${t.seconds}`;
						}
							hours.textContent = t.hours;
							minutes.textContent = t.minutes;
							seconds.textContent = t.seconds;

							if(t.total <= 0) {
								clearInterval(timeInterval);
								hours.textContent = "00";
								minutes.textContent = "00";
								seconds.textContent = "00";
							}
				}
	}

	setClock('timer', deadLine);
	//Таймер ===========================================================

	//Модальное окно ==================================================
	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');
	
	more.addEventListener('click', function () {
		showPopup(this);
	});		
	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let infoBlock = document.querySelector('.info');

	infoBlock.addEventListener('click', function (event) {
			if (event.target && event.target.classList.contains('description-btn')) {
				showPopup(event.target);
			}
	});
	let showPopup = (e) => {
		overlay.style.display = 'block';
		e.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	}
	//Модальное окно ==================================================

	//Отправка формы ==================================================

	let message = {
		loadind: "img/loading.gif",
		success: "img/success.png",
		failure: "img/error.png",
		validate: "img/validate.png",
		novalidate: "img/novalidate.png"
	};

	let form = document.querySelector('.main-form'),
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');

			statusMessage.classList.add('status');
			form.appendChild(statusMessage);

			// Валидация формы + маска телефона ===========================
			form.addEventListener('input', function (event) {
				if(event.target.tagName == 'INPUT') {
						maskInput(event.target);
						if(event.target.value.lastIndexOf('_') != -1) {
							statusMessage.innerHTML = `<img src="${message.novalidate}" />`;
						} else {
							statusMessage.innerHTML = `<img src="${message.validate}" />`;
						}
				}
			});
			
			function maskInput(a) {
				let matrix = a.defaultValue,
						i = 0,
						def = matrix.replace(/\D/g, ""),
						val = a.value.replace(/\D/g, "");
				if (def.length >= val.length) {
					val = def;
				}
				matrix = matrix.replace(/[_\d]/g, function (a) {
					if (val.charAt(i) == "") {
						return "_";
					}
					return val.charAt(i++);
				});
				a.value = matrix;
				if (i == 11) {
					i = 15;
				} else {
					i = matrix.lastIndexOf(val.substr(-1));
				}
				if (i < matrix.length && matrix != a.defaultValue) {
					i++;
				} else {
					i = matrix.indexOf("_");
				}
				setCursorPosition(i, a);
			}
			// Валидация формы + маска телефона ===========================
			function setCursorPosition(pos, elem) {
				if (pos == 15) {
					return false;
				} else {
					elem.focus();
					if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
					else if (elem.createTextRange) {
						let range = elem.createTextRange();
						range.collapse(true);
						range.moveEnd("character", pos);
						range.moveStart("character", pos);
						range.select();
					}
				}
			}
			
			form.addEventListener('submit', function (event) {
				event.preventDefault();
				form.appendChild(statusMessage);

				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

				let formData = new FormData(form);

				let obj = {};
				formData.forEach(function (value, key) {
					obj[key] = value;
				});
				let json = JSON.stringify(obj);

				request.send(json);

				request.addEventListener('readystatechange', function () {
					if(request.readyState < 4) {
						statusMessage.innerHTML = `<img src="${message.loadind}" />`;
					} else if(request.readyState === 4 && request.status == 200) {
						statusMessage.innerHTML = `<img src="${message.success}" />`;
					} else {
						statusMessage.innerHTML = `<img src="${message.failure}" />`;
					}
				});

					for(let i = 0; i < input.length; i++) {
						input[i].value = "";
					}
			});
});