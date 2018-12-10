"use strict";

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