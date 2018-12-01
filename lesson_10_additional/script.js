window.addEventListener('DOMContentLoaded', function () {

	let input = document.querySelector(".masked");

		input.addEventListener('input', maskInput);
		input.addEventListener('click', maskInput);

	function maskInput() {
		let matrix = this.defaultValue,
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		if (def.length >= val.length) {
			val = def;
		}
		matrix = matrix.replace(/[_\d]/g, function (a) {
			console.log(val.charAt(i));
			if (val.charAt(i) == "") {
				return "_";
			}
			return val.charAt(i++);
		});
		console.log(matrix);
		this.value = matrix;
		i = matrix.lastIndexOf(val.substr(-1));
		if (i < matrix.length && matrix != this.defaultValue) {
			i++;
		} else {
			i = matrix.indexOf("_");
		}
		console.log(i);
		console.log(this);
		setCursorPosition(i, this);
	}	

	function setCursorPosition(pos, elem) {
		elem.focus();
		console.log(elem);
		console.log(elem.setSelectionRange);
		if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		else if (elem.createTextRange) {
			let range = elem.createTextRange();
			console.log(range);
			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select();
			console.log(range);
		}
	}

});