"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.regexp.replace");

function forms() {
  //Отправка формы через модальное окно ==============================
  //Создание объекта валидации и ответа сервера ===================
  var message = {
    loadind: "img/loading.gif",
    success: "img/success.png",
    failure: "img/error.png",
    validate: "img/validate.png",
    novalidate: "img/novalidate.png"
  }; //Создание переменных с формой и инпутами

  var form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'); //Контейнер валидации формы и ответа сервeра

  statusMessage.classList.add('status');
  form.appendChild(statusMessage); // Валидация формы + маска телефона ===========================

  function validateInput() {
    if (event.target.value.lastIndexOf('_') != -1) {
      statusMessage.innerHTML = "<img src=\"".concat(message.novalidate, "\" />");
    } else {
      statusMessage.innerHTML = "<img src=\"".concat(message.validate, "\" />");
    }
  } //Событие input на поле ввода номера телефона


  form.addEventListener('input', function (event) {
    if (event.target.tagName == 'INPUT') {
      maskInput(event.target);
      validateInput();
    }
  }); //Функция маски номера телефона

  function maskInput(a) {
    var matrix = a.defaultValue,
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
  } //Функция определения позиции курсора в поле ввода


  function setCursorPosition(pos, elem) {
    if (pos == 15) {
      return false;
    } else {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    }
  } // Валидация формы + маска телефона ===========================
  //Отправка данных на сервер ===================================


  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (event.target.children[2].value.lastIndexOf('_') != -1) {
      statusMessage.innerHTML = "<img src=\"".concat(message.novalidate, "\" />");
      return false;
    } else {
      statusMessage.innerHTML = "<img src=\"".concat(message.validate, "\" />");
    }

    var request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    var formData = new FormData(form);

    function postData(formData) {
      return new Promise(function (resolve, reject) {
        var obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
        var json = JSON.stringify(obj);
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

    postData(formData).then(function () {
      return statusMessage.innerHTML = "<img src=\"".concat(message.loadind, "\" />");
    }).then(function () {
      return statusMessage.innerHTML = "";
    }).catch(function () {
      return statusMessage.innerHTML = "<img src=\"".concat(message.failure, "\" />");
    }).then(clearInput).then(clearInputFoot);
  }); //Отправка данных на сервер ===================================
  //Очистка полей инпута при закрытии формы и её отправки

  function clearInput() {
    for (var i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  }

  clearInput(); //Отправка формы через модальное окно ==============================
  //Отправка формы (footer) ==========================================
  //Создаем переменные с формой и инпутами

  var formFoot = document.querySelector('#form'),
      inputFoot = formFoot.getElementsByTagName('input'),
      btnFoot = formFoot.children[2]; //Контейнер валидации формы и ответа сервeра

  statusMessageFoot.classList.add('status');
  formFoot.insertBefore(statusMessageFoot, btnFoot); //Валидация формы + маска телефона ===========================
  //Событие input на поле ввода номера телефона

  formFoot.addEventListener('input', function (event) {
    if (event.target == inputFoot[1]) {
      maskInputFoot(event.target);
      validateInputFoot();
    }
  });

  function validateInputFoot() {
    if (event.target.value.lastIndexOf('_') != -1) {
      statusMessageFoot.innerHTML = "<img src=\"".concat(message.novalidate, "\" />");
    } else {
      statusMessageFoot.innerHTML = "<img src=\"".concat(message.validate, "\" />");
    }
  } //Функция маски номера телефона


  function maskInputFoot(b) {
    var matrix = b.defaultValue,
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
  } //Функция определения позиции курсора в поле ввода


  function setCursorPosition(pos, elem) {
    if (pos == 15) {
      return false;
    } else {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    }
  } //Валидация формы + маска телефона ===========================
  //Отправка данных на сервер ===================================


  formFoot.addEventListener('submit', function (event) {
    event.preventDefault();

    if (event.target.children[1].value.lastIndexOf('_') != -1) {
      statusMessageFoot.innerHTML = "<img src=\"".concat(message.novalidate, "\" />");
      return false;
    } else {
      statusMessageFoot.innerHTML = "<img src=\"".concat(message.validate, "\" />");
    }

    var request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    var formData = new FormData(formFoot);

    function postData(formData) {
      return new Promise(function (resolve, reject) {
        var obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
        var json = JSON.stringify(obj);
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

    postData(formData).then(function () {
      return statusMessageFoot.innerHTML = "<img src=\"".concat(message.loadind, "\" />");
    }).then(function () {
      return statusMessageFoot.innerHTML = '';
    }).catch(function () {
      return statusMessageFoot.innerHTML = "<img src=\"".concat(message.failure, "\" />");
    }).then(clearInputFoot).then(clearInput);
  }); //Отправка данных на сервер ===================================
  //Очистка полей инпута при закрытии формы и её отправки

  function clearInputFoot() {
    for (var i = 0; i < inputFoot.length; i++) {
      inputFoot[i].value = "";
    }
  }

  clearInputFoot(); //Отправка формы (footer) ==========================================
}

module.exports = forms;