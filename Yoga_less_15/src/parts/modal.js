function modalForm() {

//Модальное окно ==================================================
	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');

	//Открытие модального окна
	more.addEventListener('click', function () {
		showPopup(this);
	});

	//Закрытие модального окна		
	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
		statusMessage.innerHTML = "";
		clearInput();
	});

	let infoBlock = document.querySelector('.info');

	//Событие click на кнопку
	infoBlock.addEventListener('click', function (event) {
			if (event.target && event.target.classList.contains('description-btn')) {
				showPopup(event.target);
			}
	});

	//Функция открытия модального окна
	let showPopup = (t) => {
		overlay.style.display = 'block';
		t.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	}
//Модальное окно ==================================================	

//Отправка формы через модальное окно ==============================

	//Создание объекта валидации и ответа сервера ===================
	let message = {
		loadind: "img/loading.gif",
		success: "img/success.png",
		failure: "img/error.png",
		validate: "img/validate.png",
		novalidate: "img/novalidate.png"
	};

	//Создание переменных с формой и инпутами
	let form = document.querySelector('.main-form'),
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');


	//Контейнер валидации формы и ответа сервeра
		statusMessage.classList.add('status');
		form.appendChild(statusMessage);

	// Валидация формы + маска телефона ===========================
		function validateInput() {
			if (event.target.value.lastIndexOf('_') != -1) {
				statusMessage.innerHTML = `<img src="${message.novalidate}" />`;
			} else {
				statusMessage.innerHTML = `<img src="${message.validate}" />`;
			}
		}
		//Событие input на поле ввода номера телефона
		form.addEventListener('input', function (event) {
			if(event.target.tagName == 'INPUT') {
					maskInput(event.target);
					validateInput();
			}
		});

			//Функция маски номера телефона
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
			//Функция определения позиции курсора в поле ввода
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
	// Валидация формы + маска телефона ===========================

	//Отправка данных на сервер ===================================
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
	//Отправка данных на сервер ===================================

	//Очистка полей инпута при закрытии формы и её отправки
	function clearInput() {
		for (let i = 0; i < input.length; i++) {
			input[i].value = "";
		}
	}
	clearInput();
//Отправка формы через модальное окно ==============================

//Отправка формы (footer) ==========================================

	//Создаем переменные с формой и инпутами
	let formFoot = document.querySelector('#form'),
			inputFoot = formFoot.getElementsByTagName('input'),
			btnFoot = formFoot.children[2],
			statusMessageFoot = document.createElement('div');

	//Контейнер валидации формы и ответа сервeра
	statusMessageFoot.classList.add('status');
	formFoot.insertBefore(statusMessageFoot, btnFoot);

	//Валидация формы + маска телефона ===========================
		//Событие input на поле ввода номера телефона
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

		//Функция маски номера телефона
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

		//Функция определения позиции курсора в поле ввода
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

	//Валидация формы + маска телефона ===========================

	//Отправка данных на сервер ===================================
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
	//Отправка данных на сервер ===================================

	//Очистка полей инпута при закрытии формы и её отправки
	function clearInputFoot() {
		for (let i = 0; i < inputFoot.length; i++) {
			inputFoot[i].value = "";
		}
	}
	clearInputFoot();
//Отправка формы (footer) ==========================================

}

module.exports = modalForm;