"use strict";

function modal() {
  //Модальное окно ==================================================
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      statusMessage = document.createElement('div'),
      statusMessageFoot = document.createElement('div'); //Открытие модального окна

  more.addEventListener('click', function () {
    showPopup(this);
  }); //Закрытие модального окна		

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
    statusMessage.innerHTML = "";
    clearInput();
  });
  var infoBlock = document.querySelector('.info'); //Событие click на кнопку

  infoBlock.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('description-btn')) {
      showPopup(event.target);
    }
  }); //Функция открытия модального окна

  var showPopup = function showPopup(t) {
    overlay.style.display = 'block';
    t.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }; //Модальное окно ==================================================	

}

module.exports = modal;