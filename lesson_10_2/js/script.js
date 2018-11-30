window.addEventListener('DOMContentLoaded', function () {
	
	'use strict';
	class option {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		buildElem(text) {
			let div = document.createElement('div');
			document.body.appendChild(div);
			div.innerText = text;
			div.style.cssText = `height: ${this.height}px; 
			width: ${this.width}px; 
			background-color: ${this.bg}; 
			font-size: ${this.fontSize}px; 
			text-align: ${this.textAlign};`;

		}
	}
	const elem = new option(300, 500, '#8fab3f', 20, 'center');

	elem.buildElem("Привет, мир!!!");
});