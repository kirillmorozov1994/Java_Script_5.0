var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;}; /** Inspired by coursetro.com **/

// Refs
var wrapCta = document.querySelector('#wrap-cta'),
btnCta = document.querySelector('#cta'),
content = document.querySelector('#content'),
btnClose = document.querySelector('#close');


// Anime.js Commons Values for SVG Morph
var common = {
  targets: '.polymorph',
  easing: 'easeOutQuad',
  duration: 600,
  loop: false };



// Show content
btnCta.addEventListener('click', function () {
  // Elements apparence
  wrapCta.classList.remove('active');
  content.classList.add('active');

  // Morph SVG
  anime(_extends({},
  common, {
    points: [
    { value: '215,110 0,110 186,86 215,0' }] }));


});


// Hide content  
btnClose.addEventListener('click', function () {
  // Elements apparence
  content.classList.remove('active');
  wrapCta.classList.add('active');

  // Morph SVG
  anime(_extends({},
  common, {
    points: [
    { value: '215,110 0,110 0,0 215,0' }] }));


});