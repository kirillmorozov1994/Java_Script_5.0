window.addEventListener('DOMContentLoaded', function () {

	let input = document.querySelector(".masked");

		input.addEventListener('input', maskInput);
		input.addEventListener('click', maskInput);

	function maskInput(event) {
		//if(this.length != 15)
		//console.log(i);
		let matrix = this.defaultValue;
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		if (def.length >= val.length) {
			val = def;
		}
		matrix = matrix.replace(/[_\d]/g, function (a) {
			if (val.charAt(i) == "") {
				return "_";
			}
			return val.charAt(i++);
		});
		this.value = matrix;
		if (i == 15) {
			console.log(i);
			return false;
		} else {
			i = matrix.lastIndexOf(val.substr(-1));
		}
		if (i < matrix.length && matrix != this.defaultValue) {
				i++;
		} else {
			i = matrix.indexOf("_");
		}
		setCursorPosition(i, this);
	}	

	function setCursorPosition(pos, elem) {
		if(pos == 15) {
			return false;
		}
		if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		else if (elem.createTextRange) {
			let range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select();
			//console.log(range);
		}
	}

});