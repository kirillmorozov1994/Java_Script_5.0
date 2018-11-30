window.addEventListener('DOMContentLoaded', function () {
	
	'use strict';
	//Информационные табы ==============================================
	let tab = document.querySelectorAll('.info-header-tab'),
			info = document.querySelector('.info-header'),
			tabContent = document.querySelectorAll('.info-tabcontent');
	
	function hideTabContent(a) {
		for(let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
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
	let deadLine = '2018-12-01';

	function getTimerRemaining(endtime) {
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
	
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');
				let timeInterval = setInterval(upDateClock, 1000);

				function upDateClock() {
					let t = getTimerRemaining(endtime);
						if (t.hours < 10) {
							t.hours = '0' + t.hours;
						}
						if (t.minutes < 10) {
							t.minutes= '0' + t.minutes;
						}
						if (t.seconds < 10) {
							t.seconds = '0' + t.seconds;
						}
							hours.textContent = t.hours;
							minutes.textContent = t.minutes;
							seconds.textContent = t.seconds;

							if(t.total <= 0) {
								clearInterval(timeInterval);
								hours.textContent = '00';
								minutes.textContent = '00';
								seconds.textContent = '00';
							}
				}
	}

	setClock('timer', deadLine);
	//Таймер ===========================================================

	//Модальное окно ===================================================
	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');
	
	more.addEventListener('click', function () {
		showPopup();
	});		
	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let infoBlock = document.querySelector('.info');

	infoBlock.addEventListener('click', function (event) {
			if (event.target && event.target.classList.contains('description-btn')) {
				showPopup();
			}
	});

	function showPopup() {
		if (document.documentMode || /Edge/.test(navigator.userAgent)) {
			overlay.style.display = 'block';
			event.target.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		}
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			overlay.classList.remove('fade');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		}
			let trans = 200,
					op = 0;
		overlay.classList.remove('fade');			
		let id = setInterval(frame, 1);
				function frame() {
					if (trans == 0 || op == 1) {
						clearInterval(id);
					} else {
						overlay.style.display = 'block';
						trans = trans - 0.5;
						op = op + 0.0025;
						overlay.style.transform = `translateY(${trans}%)`;
						overlay.style.opacity = `${op}`;
					}
				}
	}
	//Модальное окно ==================================================
});