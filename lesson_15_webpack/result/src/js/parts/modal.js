function popup() {
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
		statusMessageFoot.innerHTML = "";
		clearInput();
		clearInputFoot();
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
};

module.exports = popup;