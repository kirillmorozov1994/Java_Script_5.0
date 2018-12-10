(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
	let yoga = require('./script.js');

	yoga();
},{"./script.js":2}],2:[function(require,module,exports){
function yoga() {
	//╨Ш╨╜╤Д╨╛╤А╨╝╨░╤Ж╨╕╨╛╨╜╨╜╤Л╨╡ ╤В╨░╨▒╤Л ==============================================
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
	//╨Ш╨╜╤Д╨╛╤А╨╝╨░╤Ж╨╕╨╛╨╜╨╜╤Л╨╡ ╤В╨░╨▒╤Л ==============================================

	//╨в╨░╨╣╨╝╨╡╤А ===========================================================
	let deadLine = '2018-12-10';

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
							t.hours = `0${t.hours}`;
						}
						if (t.minutes < 10) {
							t.minutes= `0${t.minutes}`;
						}
						if (t.seconds < 10) {
							t.seconds = `0${t.seconds}`;
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
//╨в╨░╨╣╨╝╨╡╤А ===========================================================

//╨Я╨╗╨░╨▓╨╜╤Л╨╣ ╤Б╨║╤А╨╛╨╗╨╗ ===================================================
	var linkMenu = document.querySelector('header'),
		V = 0.75;
	linkMenu.addEventListener('click', function (e) {
		if (e.target && e.target.tagName == "A") {
			e.preventDefault();
			let w = window.pageYOffset,
				hash = e.target.href.replace(/[^#]*(.*)/, '$1'),
				t = document.querySelector(hash).getBoundingClientRect().top - 60,
				start = null;
			requestAnimationFrame(step);

			function step(time) {
				if (start === null) start = time;
				let progress = time - start;
				let r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
				window.scrollTo(0, r);
				if (r != w + t) {
					requestAnimationFrame(step);
				}
			}
		}
	}, false);
//╨Я╨╗╨░╨▓╨╜╤Л╨╣ ╤Б╨║╤А╨╛╨╗╨╗ ===================================================

//╨Ь╨╛╨┤╨░╨╗╤М╨╜╨╛╨╡ ╨╛╨║╨╜╨╛ ==================================================
	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close'),
			statusMessage = document.createElement('div'),
			statusMessageFoot = document.createElement('div');

	//╨Ю╤В╨║╤А╤Л╤В╨╕╨╡ ╨╝╨╛╨┤╨░╨╗╤М╨╜╨╛╨│╨╛ ╨╛╨║╨╜╨░
	more.addEventListener('click', function () {
		showPopup(this);
	});

	//╨Ч╨░╨║╤А╤Л╤В╨╕╨╡ ╨╝╨╛╨┤╨░╨╗╤М╨╜╨╛╨│╨╛ ╨╛╨║╨╜╨░		
	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
		statusMessage.innerHTML = "";
		clearInput();
	});

	let infoBlock = document.querySelector('.info');

	//╨б╨╛╨▒╤Л╤В╨╕╨╡ click ╨╜╨░ ╨║╨╜╨╛╨┐╨║╤Г
	infoBlock.addEventListener('click', function (event) {
			if (event.target && event.target.classList.contains('description-btn')) {
				showPopup(event.target);
			}
	});

	//╨д╤Г╨╜╨║╤Ж╨╕╤П ╨╛╤В╨║╤А╤Л╤В╨╕╤П ╨╝╨╛╨┤╨░╨╗╤М╨╜╨╛╨│╨╛ ╨╛╨║╨╜╨░
	let showPopup = (t) => {
		overlay.style.display = 'block';
		t.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	}
//╨Ь╨╛╨┤╨░╨╗╤М╨╜╨╛╨╡ ╨╛╨║╨╜╨╛ ==================================================

//╨Ю╤В╨┐╤А╨░╨▓╨║╨░ ╤Д╨╛╤А╨╝╤Л ╤З╨╡╤А╨╡╨╖ ╨╝╨╛╨┤╨░╨╗╤М╨╜╨╛╨╡ ╨╛╨║╨╜╨╛ ==============================

	//╨б╨╛╨╖╨┤╨░╨╜╨╕╨╡ ╨╛╨▒╤К╨╡╨║╤В╨░ ╨▓╨░╨╗╨╕╨┤╨░╤Ж╨╕╨╕ ╨╕ ╨╛╤В╨▓╨╡╤В╨░ ╤Б╨╡╤А╨▓╨╡╤А╨░ ===================
	let message = {
		loadind: "img/loading.gif",
		success: "img/success.png",
		failure: "img/error.png",
		validate: "img/validate.png",
		novalidate: "img/novalidate.png"
	};

	//╨б╨╛╨╖╨┤╨░╨╜╨╕╨╡ ╨┐╨╡╤А╨╡╨╝╨╡╨╜╨╜╤Л╤Е ╤Б ╤Д╨╛╤А╨╝╨╛╨╣ ╨╕ ╨╕╨╜╨┐╤Г╤В╨░╨╝╨╕
	let form = document.querySelector('.main-form'),
			input = form.getElementsByTagName('input');


	//╨Ъ╨╛╨╜╤В╨╡╨╣╨╜╨╡╤А ╨▓╨░╨╗╨╕╨┤╨░╤Ж╨╕╨╕ ╤Д╨╛╤А╨╝╤Л ╨╕ ╨╛╤В╨▓╨╡╤В╨░ ╤Б╨╡╤А╨▓e╤А╨░
		statusMessage.classList.add('status');
		form.appendChild(statusMessage);

	// ╨Т╨░╨╗╨╕╨┤╨░╤Ж╨╕╤П ╤Д╨╛╤А╨╝╤Л + ╨╝╨░╤Б╨║╨░ ╤В╨╡╨╗╨╡╤Д╨╛╨╜╨░ ===========================
		function validateInput() {
			if (event.target.value.lastIndexOf('_') != -1) {
				statusMessage.innerHTML = `<img src="${message.novalidate}" />`;
			} else {
				statusMessage.innerHTML = `<img src="${message.validate}" />`;
			}
		}
		//╨б╨╛╨▒╤Л╤В╨╕╨╡ input ╨╜╨░ ╨┐╨╛╨╗╨╡ ╨▓╨▓╨╛╨┤╨░ ╨╜╨╛╨╝╨╡╤А╨░ ╤В╨╡╨╗╨╡╤Д╨╛╨╜╨░
		form.addEventListener('input', function (event) {
			if(event.target.tagName == 'INPUT') {
					maskInput(event.target);
					validateInput();
			}
		});

			//╨д╤Г╨╜╨║╤Ж╨╕╤П ╨╝╨░╤Б╨║╨╕ ╨╜╨╛╨╝╨╡╤А╨░ ╤В╨╡╨╗╨╡╤Д╨╛╨╜╨░
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
			//╨д╤Г╨╜╨║╤Ж╨╕╤П ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╕╤П ╨┐╨╛╨╖╨╕╤Ж╨╕╨╕ ╨║╤Г╤А╤Б╨╛╤А╨░ ╨▓ ╨┐╨╛╨╗╨╡ ╨▓╨▓╨╛╨┤╨░
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
	// ╨Т╨░╨╗╨╕╨┤╨░╤Ж╨╕╤П ╤Д╨╛╤А╨╝╤Л + ╨╝╨░╤Б╨║╨░ ╤В╨╡╨╗╨╡╤Д╨╛╨╜╨░ ===========================

	//╨Ю╤В╨┐╤А╨░╨▓╨║╨░ ╨┤╨░╨╜╨╜╤Л╤Е ╨╜╨░ ╤Б╨╡╤А╨▓╨╡╤А ===================================
			form.addEventListener('submit', function (event) {
				event.preventDefault();

				if (event.target.children[2].value.lastIndexOf('_') != -1) {
					statusMessage.innerHTML = `<img src="${message.novalidate}" />`;
					return false;
				} else {
					statusMessage.innerHTML = `<img src="${message.validate}" />`;
				}

				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

				let formData = new FormData(form);

				function postData(formData) {
					return new Promise(function (resolve, reject) {
						let obj = {};
						formData.forEach(function (value, key) {
							obj[key] = value;
						});
						let json = JSON.stringify(obj);

						request.send(json);

						request.addEventListener('readystatechange', function () {
							if (request.readyState < 4) {
								resolve();
							} else if (request.readyState === 4 && request.status == 200) {
								resolve();
							} else {
								reject();
							}
						});
					});
				}

				postData(formData).then(() => statusMessage.innerHTML = `<img src="${message.loadind}" />`)
													.then(() => statusMessage.innerHTML = "")
													.catch(() => statusMessage.innerHTML = `<img src="${message.failure}" />`).then(clearInput).then(clearInputFoot);

			});
	//╨Ю╤В╨┐╤А╨░╨▓╨║╨░ ╨┤╨░╨╜╨╜╤Л╤Е ╨╜╨░ ╤Б╨╡╤А╨▓╨╡╤А ===================================

	//╨Ю╤З╨╕╤Б╤В╨║╨░ ╨┐╨╛╨╗╨╡╨╣ ╨╕╨╜╨┐╤Г╤В╨░ ╨┐╤А╨╕ ╨╖╨░╨║╤А╤Л╤В╨╕╨╕ ╤Д╨╛╤А╨╝╤Л ╨╕ ╨╡╤С ╨╛╤В╨┐╤А╨░╨▓╨║╨╕
	function clearInput() {
		for (let i = 0; i < input.length; i++) {
			input[i].value = "";
		}
	}
	clearInput();
//╨Ю╤В╨┐╤А╨░╨▓╨║╨░ ╤Д╨╛╤А╨╝╤Л ╤З╨╡╤А╨╡╨╖ ╨╝╨╛╨┤╨░╨╗╤М╨╜╨╛╨╡ ╨╛╨║╨╜╨╛ ==============================

//╨Ю╤В╨┐╤А╨░╨▓╨║╨░ ╤Д╨╛╤А╨╝╤Л (footer) ==========================================

	//╨б╨╛╨╖╨┤╨░╨╡╨╝ ╨┐╨╡╤А╨╡╨╝╨╡╨╜╨╜╤Л╨╡ ╤Б ╤Д╨╛╤А╨╝╨╛╨╣ ╨╕ ╨╕╨╜╨┐╤Г╤В╨░╨╝╨╕
	let formFoot = document.querySelector('#form'),
			inputFoot = formFoot.getElementsByTagName('input'),
			btnFoot = formFoot.children[2];

	//╨Ъ╨╛╨╜╤В╨╡╨╣╨╜╨╡╤А ╨▓╨░╨╗╨╕╨┤╨░╤Ж╨╕╨╕ ╤Д╨╛╤А╨╝╤Л ╨╕ ╨╛╤В╨▓╨╡╤В╨░ ╤Б╨╡╤А╨▓e╤А╨░
	statusMessageFoot.classList.add('status');
	formFoot.insertBefore(statusMessageFoot, btnFoot);

	//╨Т╨░╨╗╨╕╨┤╨░╤Ж╨╕╤П ╤Д╨╛╤А╨╝╤Л + ╨╝╨░╤Б╨║╨░ ╤В╨╡╨╗╨╡╤Д╨╛╨╜╨░ ===========================
		//╨б╨╛╨▒╤Л╤В╨╕╨╡ input ╨╜╨░ ╨┐╨╛╨╗╨╡ ╨▓╨▓╨╛╨┤╨░ ╨╜╨╛╨╝╨╡╤А╨░ ╤В╨╡╨╗╨╡╤Д╨╛╨╜╨░
		formFoot.addEventListener('input', function (event) {
			if (event.target == inputFoot[1]) {
				maskInputFoot(event.target);
				validateInputFoot();
			}
		});

		function validateInputFoot() {
			if (event.target.value.lastIndexOf('_') != -1) {
				statusMessageFoot.innerHTML = `<img src="${message.novalidate}" />`;
			} else {
				statusMessageFoot.innerHTML = `<img src="${message.validate}" />`;
			}
		}

		//╨д╤Г╨╜╨║╤Ж╨╕╤П ╨╝╨░╤Б╨║╨╕ ╨╜╨╛╨╝╨╡╤А╨░ ╤В╨╡╨╗╨╡╤Д╨╛╨╜╨░
		function maskInputFoot(b) {
			let matrix = b.defaultValue,
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = b.value.replace(/\D/g, "");
			if (def.length >= val.length) {
				val = def;
			}
			matrix = matrix.replace(/[_\d]/g, function (a) {
				if (val.charAt(i) == "") {
					return "_";
				}
				return val.charAt(i++);
			});
			b.value = matrix;
			if (i == 11) {
				i = 15;
			} else {
				i = matrix.lastIndexOf(val.substr(-1));
			}
			if (i < matrix.length && matrix != b.defaultValue) {
				i++;
			} else {
				i = matrix.indexOf("_");
			}
			setCursorPosition(i, b);
		}

		//╨д╤Г╨╜╨║╤Ж╨╕╤П ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╕╤П ╨┐╨╛╨╖╨╕╤Ж╨╕╨╕ ╨║╤Г╤А╤Б╨╛╤А╨░ ╨▓ ╨┐╨╛╨╗╨╡ ╨▓╨▓╨╛╨┤╨░
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

	//╨Т╨░╨╗╨╕╨┤╨░╤Ж╨╕╤П ╤Д╨╛╤А╨╝╤Л + ╨╝╨░╤Б╨║╨░ ╤В╨╡╨╗╨╡╤Д╨╛╨╜╨░ ===========================

	//╨Ю╤В╨┐╤А╨░╨▓╨║╨░ ╨┤╨░╨╜╨╜╤Л╤Е ╨╜╨░ ╤Б╨╡╤А╨▓╨╡╤А ===================================
	formFoot.addEventListener('submit', function (event) {
		event.preventDefault();

		if (event.target.children[1].value.lastIndexOf('_') != -1) {
			statusMessageFoot.innerHTML = `<img src="${message.novalidate}" />`;
			return false;
		} else {
			statusMessageFoot.innerHTML = `<img src="${message.validate}" />`;
		}

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		let formData = new FormData(formFoot);

		function postData(formData) {
			return new Promise(function (resolve, reject) {
				let obj = {};
				formData.forEach(function (value, key) {
					obj[key] = value;
				});
				let json = JSON.stringify(obj);

				request.send(json);

				request.addEventListener('readystatechange', function () {
					if (request.readyState < 4) {
						resolve();
					} else if (request.readyState === 4 && request.status == 200) {
						resolve();
					} else {
						reject();
					}
				});
			});
		}

		postData(formData).then(() => statusMessageFoot.innerHTML = `<img src="${message.loadind}" />`)
			.then(() => statusMessageFoot.innerHTML = '')
			.catch(() => statusMessageFoot.innerHTML = `<img src="${message.failure}" />`).then(clearInputFoot).then(clearInput);

	});
	//╨Ю╤В╨┐╤А╨░╨▓╨║╨░ ╨┤╨░╨╜╨╜╤Л╤Е ╨╜╨░ ╤Б╨╡╤А╨▓╨╡╤А ===================================

	//╨Ю╤З╨╕╤Б╤В╨║╨░ ╨┐╨╛╨╗╨╡╨╣ ╨╕╨╜╨┐╤Г╤В╨░ ╨┐╤А╨╕ ╨╖╨░╨║╤А╤Л╤В╨╕╨╕ ╤Д╨╛╤А╨╝╤Л ╨╕ ╨╡╤С ╨╛╤В╨┐╤А╨░╨▓╨║╨╕
	function clearInputFoot() {
		for (let i = 0; i < inputFoot.length; i++) {
			inputFoot[i].value = "";
		}
	}
	clearInputFoot();
//╨Ю╤В╨┐╤А╨░╨▓╨║╨░ ╤Д╨╛╤А╨╝╤Л (footer) ==========================================

//╨Я╨╕╤И╨╡╨╝ ╤Б╨╗╨░╨╣╨┤╨╡╤А ===================================================

	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');


	animateSliderPrev(slideIndex);

	function incrSlides(n) {
		if(n == -1) {
			animateSliderPrev(slideIndex += n);
		} else {
			animateSliderNext(slideIndex += n);
		}
	
	}

	function currentSlide(n) {
		animateSliderPrev(slideIndex = n);
	}

	prev.addEventListener('click', function () {
		incrSlides(-1);
	});
	next.addEventListener('click', function () {
		incrSlides(1);
	});

	dotsWrap.addEventListener('click', function (event) {
		for(let i = 0; i <= dots.length; i++) {
			if(event.target.classList.contains('dot') && event.target == dots[i -1]) {
				currentSlide(i);
			}
		}
	});

	//╨Р╨╜╨╕╨╝╨░╤Ж╨╕╤П ╤Б╨╗╨░╨╣╨┤╨╡╤А╨░
	function animateSliderPrev(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');
		dots.forEach((item) => item.classList.remove('dot-active'));

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');
			let prev = 100;

		let animSlider = setInterval(function() {
			if(prev != 0) {
				prev--;
				slides[slideIndex - 1].style.transform = `translateX(${prev}%)`;
			} 
			else {
				clearInterval(animSlider);
			}
		}, 10);
	}

	function animateSliderNext(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');
		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
		let next = -100;

		let animSlider = setInterval(function () {
			if (next != 0) {
				next++;
				slides[slideIndex - 1].style.transform = `translateX(${next}%)`;
			}
			else {
				clearInterval(animSlider);
			}
		}, 10);
	}

//╨Я╨╕╤И╨╡╨╝ ╤Б╨╗╨░╨╣╨┤╨╡╤А ===================================================

//╨Ъ╤Г╨╗╤М╨║╤Г╨╗╤П╤В╨╛╤А =====================================================

	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0,
		selOption = 0;

		totalValue.textContent = 0;

		persons.addEventListener('input', function () {
				personsSum = +this.value;
				selOption = place.options[place.selectedIndex].value;
				total = (daysSum + personsSum) * 4000 * +selOption;

				if (personsSum == '' || personsSum == '0' || restDays.value == '' || restDays.value == '0') {
					totalValue.textContent = 0;
				} else {
					animateCalc(total);
				}
		});


		restDays.addEventListener('input', function () {

				daysSum = +this.value;
				selOption = place.options[place.selectedIndex].value;
				total = (daysSum + personsSum) * 4000 * +selOption;

				if (daysSum == '' || daysSum == '0' || persons.value == '' || persons.value == '0') {
					totalValue.textContent = 0;
				} else {
					animateCalc(total);
				}

		});

		persons.onkeypress = function (event) {
			if (event.key == '+' || event.key == 'e' || event.key == ',' || event.key == '.' || event.key == '-' || event.key == 'E') {
				return false;
			}
		}

		restDays.onkeypress = function (event) {
			if (event.key == '+' || event.key == 'e' || event.key == ',' || event.key == '.' || event.key == '-' || event.key == 'E') {
				return false;
			}
		}

		place.addEventListener('change', function() {
			selOption = place.options[place.selectedIndex].value;
			total = (daysSum + personsSum) * 4000 * +selOption;
			if (personsSum == '' || personsSum == '0' || restDays.value == '' || restDays.value == '0') {
				totalValue.textContent = 0;
			} else {
				animateCalc(total);
			}
		});

		function animateCalc(result) {
				let num = 0;
				let anim = setInterval(() => {
					if(num != result) {
						if (!personsSum == '' || !personsSum == '0' || !restDays.value == '' || !restDays.value == '0') {
							num += 400;
							totalValue.textContent = num;
						} else {
							clearInterval(anim);
						}
					} else {
						clearInterval(anim);
					}
				}, 5);
		}
//╨Ъ╤Г╨╗╤М╨║╤Г╨╗╤П╤В╨╛╤А =====================================================
}

module.exports = yoga;

},{}]},{},[1]);
