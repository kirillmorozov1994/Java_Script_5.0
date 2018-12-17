window.addEventListener('DOMContentLoaded', function () {
	
	'use strick';

	let modalForms = require('./parts/modalForm'),
			accordion = require('./parts/accordion'),
			filterElement = require('./parts/filtresElements'),
			hoverImg = require('./parts/hoverImg'),
			mainSlider = require('./parts/mainSlider'),
			menuBurger = require('./parts/menuBurger'),
			moreInfoStyle = require('./parts/moreInfo'),
			reviewSliders = require('./parts/reviewSlider');

	modalForms();
	accordion();
	filterElement();
	hoverImg();
	mainSlider();
	menuBurger();
	moreInfoStyle();
	reviewSliders();

});