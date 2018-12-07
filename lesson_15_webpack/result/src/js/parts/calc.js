function calculation() {
	//Кулькулятор ===================================================

	let persons = document.querySelectorAll('.counter-block-input')[0],
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
			totalValue.textContent = total;
		}
	});


	restDays.addEventListener('input', function () {

		daysSum = +this.value;
		selOption = place.options[place.selectedIndex].value;
		total = (daysSum + personsSum) * 4000 * +selOption;

		if (daysSum == '' || daysSum == '0' || persons.value == '' || persons.value == '0') {
			totalValue.textContent = 0;
		} else {
			totalValue.textContent = total;
		}

	});

	persons.onkeypress = function (event) {
		if (event.key == '+' || event.key == 'e' || event.key == ',' || event.key == '.' || event.key == '-' || event.key == 'E') {
			return false;
		}
	}

	restDays.onkeypress = function (event) {
		if (event.key == '+' || event.key == 'e' || event.key == ',' || event.key == '.' || event.key == '-' || event.key == 'E') {
			return false;
		}
	}

	place.addEventListener('change', function () {
		if (personsSum == '' || personsSum == '0' || restDays.value == '' || restDays.value == '0') {
			totalValue.textContent = 0;
		} else {
			console.log(restDays.value);
			selOption = place.options[place.selectedIndex].value;
			total = (daysSum + personsSum) * 4000 * +selOption;
			totalValue.textContent = total;
		}
	});
};

module.exports = calculation;