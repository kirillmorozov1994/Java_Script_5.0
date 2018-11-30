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
			div.style.height = `${this.height}px`;
			div.style.width = `${this.width}px`;
			div.style.backgroundColor = this.bg;
			div.style.fontSize = `${this.fontSize}px`;
			div.style.textAlign = this.textAlign;

		}
	}
	const elem = new option(300, 500, '#8fab3f', 20, 'center');

	elem.buildElem("Привет, мир!!!");
});