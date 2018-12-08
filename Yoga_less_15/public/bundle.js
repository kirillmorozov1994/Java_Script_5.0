/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js"),
    timer = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js"),
    scroll = __webpack_require__(/*! ./parts/scroll.js */ "./parts/scroll.js"),
    modal = __webpack_require__(/*! ./parts/modal.js */ "./parts/modal.js"),
    slider = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js"),
    calc = __webpack_require__(/*! ./parts/calc.js */ "./parts/calc.js");

tabs();
timer();
scroll();
modal();
slider();
calc();

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculation() {
  //Кулькулятор =====================================================
  var persons = document.querySelectorAll('.counter-block-input')[0],
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
  };

  restDays.onkeypress = function (event) {
    if (event.key == '+' || event.key == 'e' || event.key == ',' || event.key == '.' || event.key == '-' || event.key == 'E') {
      return false;
    }
  };

  place.addEventListener('change', function () {
    selOption = place.options[place.selectedIndex].value;
    total = (daysSum + personsSum) * 4000 * +selOption;

    if (personsSum == '' || personsSum == '0' || restDays.value == '' || restDays.value == '0') {
      totalValue.textContent = 0;
    } else {
      animateCalc(total);
    }
  });

  function animateCalc(result) {
    var num = 0;
    var anim = setInterval(function () {
      if (num != result) {
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
  } //Кулькулятор =====================================================	

}

module.exports = calculation;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalForm() {
  //Модальное окно ==================================================
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'); //Открытие модального окна

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
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div'); //Контейнер валидации формы и ответа сервeра

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
      statusMessage.innerHTML = "<img src=\"".concat(message.success, "\" />");
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
      btnFoot = formFoot.children[2],
      statusMessageFoot = document.createElement('div'); //Контейнер валидации формы и ответа сервeра

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

module.exports = modalForm;

/***/ }),

/***/ "./parts/scroll.js":
/*!*************************!*\
  !*** ./parts/scroll.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slowScroll() {
  //Плавный скролл ===================================================
  var linkMenu = document.querySelector('header'),
      V = 0.75;
  linkMenu.addEventListener('click', function (e) {
    if (e.target && e.target.tagName == "A") {
      var step = function step(time) {
        if (start === null) start = time;
        var progress = time - start;
        var r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);

        if (r != w + t) {
          requestAnimationFrame(step);
        }
      };

      e.preventDefault();
      var w = window.pageYOffset,
          hash = e.target.href.replace(/[^#]*(.*)/, '$1'),
          t = document.querySelector(hash).getBoundingClientRect().top - 60,
          start = null;
      requestAnimationFrame(step);
    }
  }, false); //Плавный скролл ===================================================
}

module.exports = slowScroll;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  //Пишем слайдер ===================================================
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  animateSliderPrev(slideIndex);

  function incrSlides(n) {
    if (n == -1) {
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
    for (var i = 0; i <= dots.length; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  }); //Анимация слайдера

  function animateSliderPrev(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
    var prev = 100;
    var animSlider = setInterval(function () {
      if (prev != 0) {
        prev--;
        slides[slideIndex - 1].style.transform = "translateX(".concat(prev, "%)");
      } else {
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

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
    var next = -100;
    var animSlider = setInterval(function () {
      if (next != 0) {
        next++;
        slides[slideIndex - 1].style.transform = "translateX(".concat(next, "%)");
      } else {
        clearInterval(animSlider);
      }
    }, 10);
  } //Пишем слайдер ===================================================	

}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  //Информационные табы ==============================================
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  var showTabContent = function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  //Таймер ===========================================================
  var deadLine = '2018-12-10';

  var getTimerRemaining = function getTimerRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
    var timeInterval = setInterval(upDateClock, 1000);

    function upDateClock() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '00';
      var t = getTimerRemaining(endtime);

      if (t.hours < 10) {
        t.hours = "0".concat(t.hours);
      }

      if (t.minutes < 10) {
        t.minutes = "0".concat(t.minutes);
      }

      if (t.seconds < 10) {
        t.seconds = "0".concat(t.seconds);
      }

      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  };

  setClock('timer', deadLine); //Таймер ===========================================================
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map