window.addEventListener('DOMContentLoaded', function () {
	'use strick';


	//Слайдер главного экрана =========================================

		let mainSlideItems = document.querySelectorAll('.main-slider-item'),
				slideIndex = 0,
				tracking = 0;

				function showSlideMain() {

					if (slideIndex == 1) {
						slideIndex = 0;
						mainSlideItems[slideIndex + 1].style.cssText = 'display: none';
						mainSlideItems[slideIndex].style.cssText = 'display: block';
						mainSlideItems[slideIndex].style.cssText = 'animation-duration: 1.5s';
					} else if (slideIndex == 0) {
						slideIndex = 1;
						mainSlideItems[slideIndex - 1].style.cssText = 'display: none';
						mainSlideItems[slideIndex].style.cssText = 'display: block';
						mainSlideItems[slideIndex].style.cssText = 'animation-duration: 1.5s';
					}

				}

				function currentSlide(n) {
					if(n == 0) {
						mainSlideItems.forEach((item) => item.classList.add('slideInDown'));
						mainSlideItems[n].style.cssText = 'animation-duration: 1.5s';
						mainSlideItems[n + 1].style.cssText = 'display: none';
						slideIndex = 0;
					}
					if(n == 1) {
						mainSlideItems.forEach((item) => item.classList.add('slideInDown'));
						mainSlideItems[n].style.cssText = 'animation-duration: 1.5s';
						mainSlideItems[n - 1].style.cssText = 'display: none';
						slideIndex = 1;
					}

				}
				currentSlide(0);

				setInterval(showSlideMain, 3000);

	//Слайдер главного экрана ==================================================


	//Модальное окно design ====================================================

		let popupDesign = document.querySelector('.popup-design');

				function showPopupDesign() {
					popupDesign.classList.add('fadeInLeft');
					popupDesign.style.cssText = 'animation-duration: 1s';
					popupDesign.style.display = 'block';
				}

				function closePopupDesign() {
					popupDesign.classList.remove('fadeInLeft');
					popupDesign.style.display = 'none';
					inputFormsDesign[1].style.marginBottom = '15px';
					inputFormsDesign[2].style.marginBottom = '15px';
					mesStatusName.innerHTML = '';
					mesStatusPhone.innerHTML = '';
					fileImg.children[1].innerText = 'Файл не выбран';
					fileImg.children[1].classList.remove('novalidate');
					fileImg.children[1].classList.remove('validate');
					clearInputs();
					clearTextAreas();
				}
		
				document.body.addEventListener('click', function (event) {
					if(event.target && event.target.classList.contains('button-design')) {
						showPopupDesign();
						tracking++;
					}
				});

				popupDesign.addEventListener('click', function (event) {
					if(event.target.classList.contains('popup-design') || event.target.classList.contains('popup-close')) {
						closePopupDesign();
					}
				});
	
	//Модальное окно design ==========================================================


	//Модальное окно consultation ====================================================

		let popupConsultation = document.querySelector('.popup-consultation');

				function showPopupConsultation() {
					popupConsultation.classList.add('fadeInRight');
					popupConsultation.style.cssText = 'animation-duration: 1s';
					popupConsultation.style.display = 'block';
				}

				function closePopupConsultation() {
					popupConsultation.classList.remove('fadeInRight');
					popupConsultation.style.display = 'none';
					clearInputs();
					inputFormsformsConsultation[0].style.marginBottom = '15px';
					inputFormsformsConsultation[1].style.marginBottom = '15px';
					mesStatusNameCons.innerHTML = '';
					mesStatusPhoneCons.innerHTML = '';
				}
				document.body.addEventListener('click', function (event) {
					if (event.target && event.target.classList.contains('button-consultation')) {
						showPopupConsultation();
						tracking++;
					}
				});

				popupConsultation.addEventListener('click', function (event) {
					if (event.target.classList.contains('popup-close') || event.target.classList.contains('popup-consultation')) {
						closePopupConsultation();
					}
				});
	//Модальное окно consultation ====================================================


	//Модальное окно gift ============================================================

		let btnPopupGift = document.querySelector('.fixed-gift'),
				popupGift = document.querySelector('.popup-gift');

				function showPopupGift() {
					popupGift.classList.add('zoomIn');
					popupGift.style.cssText = 'animation-duration: 1s';
					popupGift.style.display = 'block';
					btnPopupGift.style.display = 'none';
				}

				function closePopupGift() {
					popupGift.classList.remove('zoomIn');
					popupGift.style.display = 'none';
				}
		
				btnPopupGift.addEventListener('click', function () {
					showPopupGift();
					tracking++;
				});

				popupGift.addEventListener('click', function (event) {
					if (event.target.classList.contains('popup-close') || event.target.classList.contains('popup-gift')) {
						closePopupGift();
					}
				});

	//Модальное окно gift ==========================================================
	

	//Появление модального окна consultation через 1 минуту ========================

				setTimeout(function () {
					if (getComputedStyle(popupGift).display == 'none' && getComputedStyle(popupConsultation).display == 'none' && getComputedStyle(popupDesign).display == 'none') {
						showPopupConsultation();
					}
				}, 60000);

	//Появление модального окна consultation  через 1 минуту =======================


	//Появление модального окна, если не нажата ни одна кнопка =====================

				window.addEventListener('scroll', function () {
					if (window.pageYOffset == 13585 && getComputedStyle(popupGift).display == 'none' && getComputedStyle(popupConsultation).display == 'none' && getComputedStyle(popupDesign).display == 'none' && tracking == 0) {
						showPopupGift();
					}
				});			

	//Появление модального окна, если не нажата ни одна кнопка =====================


	//Формы отправки ===============================================================

		//Форма "Заказать дизайн портрета" ===============================

				let message = {
					loadind: "img/loading.gif",
					success: "img/success.png",
					failure: "img/error.jpg"
				};
		
				let formsDesign = document.querySelector('.form-design'),
						inputs = document.querySelectorAll('input'),
						textAreas = document.querySelectorAll('textarea'),
						inputFormsDesign = formsDesign.querySelectorAll('input'),
						fileImg = document.querySelector('.file_uploa'),
						messageStatus = document.createElement('div');
						
						messageStatus.classList.add('status');
						messageStatus.classList.add('fadeInUp');
						
						//Валидация загрузки изображения
						function validateInputImg(t) {
							if(!t.value == "") {
								fileImg.children[1].classList.remove('novalidate');
								fileImg.children[1].classList.add('validate');
								fileImg.children[1].innerText = 'Файл загружен';
							} else {
								fileImg.children[1].classList.remove('validate');
								fileImg.children[1].classList.add('novalidate');
							}
						}
						//Валидация загрузки изображения

						//Валидация имени пользователя
							let mesStatusName = document.createElement('div');
									document.querySelectorAll('.form')[2].appendChild(mesStatusName);
									document.querySelectorAll('.form')[2].insertBefore(mesStatusName, inputFormsDesign[2]);

						function validateInputName(t) {
							if(t.value.length < 3) {
								t.style.marginBottom = 0;
								mesStatusName.classList.remove('validate');
								mesStatusNameCons.classList.remove('validate');

								mesStatusName.classList.add('novalidate');
								mesStatusNameCons.classList.add('novalidate');

								mesStatusName.innerHTML = 'Имя должно быть не менее 3 букв';
								mesStatusNameCons.innerHTML = 'Имя должно быть не менее 3 букв';

							} else {
								t.style.marginBottom = 0;

								mesStatusName.classList.remove('novalidate');
								mesStatusNameCons.classList.remove('novalidate');

								mesStatusName.classList.add('validate');
								mesStatusNameCons.classList.add('validate');

								mesStatusName.innerHTML = 'Готово';
								mesStatusNameCons.innerHTML = 'Готово';
								
							}
						}
						//Валидация имени пользователя

						//Валидация номера телефона
						let mesStatusPhone = document.createElement('div');
								document.querySelectorAll('.form')[2].appendChild(mesStatusPhone);
								document.querySelectorAll('.form')[2].insertBefore(mesStatusPhone, inputFormsDesign[3]);

						function validateInputPhone(t) {
							if (t.value.lastIndexOf('_') != -1 || t.value == '') {
								t.style.marginBottom = 0;
								mesStatusPhone.classList.remove('validate');
								mesStatusPhoneCons.classList.remove('validate');

								mesStatusPhone.classList.add('novalidate');
								mesStatusPhoneCons.classList.add('novalidate');

								mesStatusPhone.innerHTML = 'Заполните маску номера телефона';
								mesStatusPhoneCons.innerHTML = 'Заполните маску номера телефона';

							} else {
								t.style.marginBottom = 0;
								mesStatusPhone.classList.remove('novalidate');
								mesStatusPhoneCons.classList.remove('novalidate');

								mesStatusPhone.classList.add('validate');
								mesStatusPhoneCons.classList.add('validate');

								mesStatusPhone.innerHTML = 'Готово';
								mesStatusPhoneCons.innerHTML = 'Готово';

							}
						}
						//Валидация номера телефона

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
						//Функция маски номера телефона

						//Функция отправки формы
						function sendingForms (t) {
							
							let request = new XMLHttpRequest();

							request.open('POST', 'server.php');
							request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

							let formData_1 = new FormData(t),
								obj_1 = {};

							formData_1.forEach(function (value, key) {
								obj_1[key] = value;
							});

							let json = JSON.stringify(obj_1);

							request.send(json);

							request.addEventListener('readystatechange', function () {
								t.appendChild(messageStatus);
								if (request.readyState < 4) {
									messageStatus.innerHTML = `<img src="${message.loadind}" />`;
								} else if (request.readyState === 4 && request.status == 200) {
									messageStatus.style.cssText = 'z-index: 10';
									messageStatus.innerHTML = `<img src="${message.success}" />`;
									messageStatus.style.cssText = 'animation-duration: 1s';
								} else {
									messageStatus.style.cssText = 'z-index: 10';
									messageStatus.innerHTML = `<img src="${message.failure}" />`
									messageStatus.style.cssText = 'animation-duration: 1s';
								}
								setTimeout(() => {
									messageStatus.innerHTML = '';
									messageStatus.style.cssText = 'z-index: -1';
									closePopupDesign();
									closePopupConsultation();
								}, 2000);
							});
						}
						//Функция отправки формы

						function clearInputs() {
							for (let i = 0; i < inputs.length; i++) {
								inputs[i].value = "";
							}
						}

						function clearTextAreas() {
							for (let i = 0; i < textAreas.length; i++) {
								textAreas[i].value = "";
							}
						}

						//Событие submit при отправки формы
						formsDesign.addEventListener('submit', function (event) {
							event.preventDefault();
							if (fileImg.children[2].value == "" || inputFormsDesign[1].value.length < 3 || inputFormsDesign[2].value.lastIndexOf('_') != -1) {
								validateInputImg(inputFormsDesign[0]);
								validateInputName(inputFormsDesign[1]);
								validateInputPhone(inputFormsDesign[2]);
							} else {
								sendingForms(event.target);
							}
						});
						//Событие submit при отправки формы

						//Событие инпут в поле загрузки картинки
						inputFormsDesign[0].addEventListener('input', function (event) {
							validateInputImg(event.target);
						});
						//Событие инпут в поле загрузки картинки

						//Событие инпут поля имени
						inputFormsDesign[1].addEventListener('input', function (event) {
							validateInputName(event.target);
						});
						inputFormsDesign[1].onkeypress = (event) => {
							let pattern = /[^а-яА-я]/ig;
									if(pattern.test(event.key)) {
										return false;
									}
						};
						//Событие инпут поля имени

						//Событие интуп поля номера телефона
						inputFormsDesign[2].addEventListener('input', function (event) {
							maskInput(event.target);
							validateInputPhone(event.target);
						});
						//Событие интуп поля номера телефона

						//Валидация комментария
						textAreas[0].onkeypress = (event) => {
							let pattern = /[^а-яА-я]/ig;
							if (pattern.test(event.key)) {
								return false;
							}
						};
						//Валидация комментария

						clearInputs();
						clearTextAreas();

		//Форма "Заказать дизайн портрета" ===============================
		

		//Форма "Остались вопросы" =======================================

			let formsConsultation = document.querySelector('.form-questions'),
					inputFormsformsConsultation = formsConsultation.querySelectorAll('input');

			//Валидация имени пользователя
			let mesStatusNameCons = document.createElement('div');
					formsConsultation.appendChild(mesStatusNameCons);
					formsConsultation.insertBefore(mesStatusNameCons, inputFormsformsConsultation[1]);
			//Валидация имени пользователя

			//Валидация номера телефона
			let mesStatusPhoneCons = document.createElement('div');
					formsConsultation.appendChild(mesStatusPhoneCons);
					formsConsultation.insertBefore(mesStatusPhoneCons, formsConsultation.children[3]);
			//Валидация номера телефона

			//Событие submit при отправки формы
			formsConsultation.addEventListener('submit', function (event) {
				event.preventDefault();
				if (inputFormsformsConsultation[0].value.length < 3 || inputFormsformsConsultation[1].value.lastIndexOf('_') != -1) {
					validateInputName(inputFormsformsConsultation[0]);
					validateInputPhone(inputFormsformsConsultation[1]);
				} else {
					sendingForms(event.target);
				}
			});
			//Событие submit при отправки формы

			//Событие инпут поля имени
			inputFormsformsConsultation[0].addEventListener('input', function (event) {
				validateInputName(event.target);
			});
			inputFormsformsConsultation[0].onkeypress = (event) => {
				let pattern = /[^а-яА-я]/ig;
				if (pattern.test(event.key)) {
					return false;
				}
			};
			//Событие инпут поля имени

			//Событие интуп поля номера телефона
			inputFormsformsConsultation[1].addEventListener('input', function (event) {
				maskInput(event.target);
				validateInputPhone(event.target);
			});
			//Событие интуп поля номера телефона

		//Форма "Остались вопросы" =======================================


	//Формы отправки ===============================================================


	//Подгружаемая информация при клике на кнопку "Посмотреть больше стилей" =======

		let btnMoreStyle = document.querySelector('.button-styles'),
				contentStyles = document.querySelectorAll('.styles-2');

				btnMoreStyle.addEventListener('click', function () {
					btnMoreStyle.style.display = 'none';
					contentStyles.forEach((item) => {
						if(window.innerWidth >= 768) {
							item.classList.remove('hidden-lg');
							item.classList.remove('hidden-md');
							item.classList.add('fadeInLeft');
							item.style.cssText = 'animation-duration: 1s';
						} else {
							item.classList.remove('hidden-sm');
							item.classList.remove('hidden-xs');
						}
					});
				});

	//Подгружаемая информация при клике на кнопку "Посмотреть больше стилей" =======


	//Наведение на картинки и тач на телефоне ======================================
	
		let imgWrapper = document.querySelector('.sizes-wrapper'),
				sizeBlocks = document.querySelectorAll('.sizes-block');

				imgWrapper.addEventListener('mouseover', function (event) {
					showImgSize(event.target);
				});

				imgWrapper.addEventListener('mouseout', function (event) {
					hideImgSize(event.target);
				});

				document.body.addEventListener('touchstart', function () {
					if (event.target && !event.target.classList.contains('sizes-block') && !event.target.classList.contains('size') && !event.target.classList.contains('starting-price') && !event.target.classList.contains('final-price') && !event.target.classList.contains('size-1') && !event.target.classList.contains('size-2') && !event.target.classList.contains('size-3') && !event.target.classList.contains('size-4')) {
						for(let i = 0; i < 4; i++) {
							if(i == 0) {
								showContent(sizeBlocks[i]);
								sizeBlocks[i].children[0].setAttribute('src', 'img/sizes-1.png');
							}
							if(i == 1) {
								showContent(sizeBlocks[i]);
								sizeBlocks[i].children[0].setAttribute('src', 'img/sizes-2.png');
							}
							if(i == 2) {
								showContent(sizeBlocks[i]);
								sizeBlocks[i].children[0].setAttribute('src', 'img/sizes-3.png');
							}
							if(i == 3) {
								showContent(sizeBlocks[i]);
								sizeBlocks[i].children[0].setAttribute('src', 'img/sizes-4.png');
							}
						}
					} else {
						tabsPhone(event.target);
					}
				});


				function hideContent(n) {
					n.children[0].style.cssText = 'z-index: 10';
					n.children[1].style.cssText = 'z-index: -1';
					n.children[2].style.cssText = 'z-index: -1';
					n.children[3].style.cssText = 'z-index: -1';
				}

				function showContent(n) {
					n.children[0].style.cssText = 'z-index: -1';
					n.children[1].style.cssText = 'z-index: 10';
					n.children[2].style.cssText = 'z-index: 10';
					n.children[3].style.cssText = 'z-index: 10';
				}

				function showImgSize(t) {
					if (!t.classList.contains('sizes-wrapper')) {
						while (!t.classList.contains('sizes-block')) {
							t = t.parentNode;
						}
					} else {
						return false;
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-1.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-1-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-2.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-2-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-3.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-3-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-4.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-4-1.png');
					}
				}

				function hideImgSize(t) {
					if (!t.classList.contains('sizes-wrapper')) {
						while (!t.classList.contains('sizes-block')) {
							t = t.parentNode;
						}
					} else {
						return false;
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-1-1.png') {
						showContent(t);
						t.children[0].setAttribute('src', 'img/sizes-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-2-1.png') {
						showContent(t);
						t.children[0].setAttribute('src', 'img/sizes-2.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-3-1.png') {
						showContent(t);
						t.children[0].setAttribute('src', 'img/sizes-3.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-4-1.png') {
						showContent(t);
						t.children[0].setAttribute('src', 'img/sizes-4.png');
					}
				}

				function tabsPhone(t) {
					if(!t.classList.contains('sizes-wrapper')) {
						while (!t.classList.contains('sizes-block')) {
							t = t.parentNode;
						}
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-1.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-1-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-2.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-2-1.png');
					} 
					if (t && t.children[0].getAttribute('src') == 'img/sizes-3.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-3-1.png');
					} 
					if (t && t.children[0].getAttribute('src') == 'img/sizes-4.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-4-1.png');
					}
				}
	
	//Наведение на картинки и тач на телефоне ======================================

	//Слайдер с отзывами ===========================================================
		
		let slideNumber = 1,
				slidesItems = document.querySelectorAll('.feedback-slider-item'),
				prev = document.querySelector('.main-prev-btn'),
				next = document.querySelector('.main-next-btn');

				let id = setInterval(function () {
					incrSlides(1);
				}, 5000);

				animateSliderNext(slideNumber);

				function incrSlides(n) {
					if (n == -1) {
						animateSliderPrev(slideNumber += n);
					} else {
						animateSliderNext(slideNumber += n);
					}
				}

				prev.addEventListener('click', function () {
					incrSlides(-1);
				});
				next.addEventListener('click', function () {
					incrSlides(1);
				});

				function animateSliderPrev(n) {

					if (n > slidesItems.length) {
						slideNumber = 1;
					}
					if (n < 1) {
						slideNumber = slidesItems.length;
					}

					slidesItems.forEach((item) => item.style.display = 'none');
					slidesItems[slideNumber - 1].classList.remove('fadeInLeft');
					slidesItems[slideNumber - 1].classList.add('fadeInRight');
					slidesItems[slideNumber - 1].style.cssText = 'animation-duration: 1s';
					slidesItems[slideNumber - 1].style.display = 'block';

				}

				function animateSliderNext(n) {
					if (n > slidesItems.length) {
						slideNumber = 1;
					}
					if (n < 1) {
						slideNumber = slidesItems.length;
					}

					slidesItems.forEach((item) => item.style.display = 'none');
					slidesItems[slideNumber - 1].classList.remove('fadeInRight');
					slidesItems[slideNumber - 1].classList.add('fadeInLeft');
					slidesItems[slideNumber - 1].style.cssText = 'animation-duration: 1s';
					slidesItems[slideNumber - 1].style.display = 'block';

				}


	//Слайдер с отзывами ===========================================================



});