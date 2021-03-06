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
	let deadLine = '2018-11-29';

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

	//Плавный скролл
	var linkMenu = document.querySelector('header'),
			V = 1/2;
		linkMenu.addEventListener('click', function (e) {
			if(e.target && e.target.tagName == "A") {
				e.preventDefault();
				let w = window.pageYOffset,
						hash = e.target.href.replace(/[^#]*(.*)/, '$1'), 
						t = document.querySelector(hash).getBoundingClientRect().top - 60,
						start = null;
        requestAnimationFrame(step);
        function step(time) {
						if (start === null) start = time;
							let progress = time - start;
							let	r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
							window.scrollTo(0, r);
							if (r != w + t) {
									requestAnimationFrame(step);
							}
				}
			}
		}, false);

});
