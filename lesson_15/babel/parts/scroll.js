"use strict";

require("core-js/modules/es6.regexp.replace");

function slowScroll() {
  //Плавный скролл ===================================================
  var linkMenu = document.querySelector('header'),
      V = 0.75;
  linkMenu.addEventListener('click', function (e) {
    if (e.target && e.target.tagName == "A") {
      e.preventDefault();
      var w = window.pageYOffset,
          hash = e.target.href.replace(/[^#]*(.*)/, '$1'),
          t = document.querySelector(hash).getBoundingClientRect().top - 60,
          start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        var progress = time - start;
        var r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);

        if (r != w + t) {
          requestAnimationFrame(step);
        }
      }
    }
  }, false); //Плавный скролл ===================================================
}

module.exports = slowScroll;