/* Пишем свой калькулятор на сайт */

$(function() {
	var floorModel = $('.floor-model'),
			basePriceModel = 700000;
			floorWheels = $('.floor-wheels'),
			basePriceWheels = 30000;
			typeOfColor = $('input[name="typeOfColor"]'),
			basePriceColor = 10000;
			signaling = $('input[type="checkbox"]'),
			basePriceSignaling = 0,
			carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling,
			summ = $('#price');

		//Model-car
		floorModel.change(function() {
			if($(this).val() == 1){
				basePriceModel = 700000;
				typeCarCivic();
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
			} else if ($(this).val() == 2){
				basePriceModel = 1500000;
				typeCarCRV();
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
			} else {
				basePriceModel = 1600000;
				typeCarAccord();
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
			}
		});	

		function typeCarCivic () {
				var typeColorCheck = $('input[name="typeOfColor"]:checked');
				if (typeColorCheck.val() == 1) {
					$('img').attr('src', 'img/Civic_black.jpg');
				} else if (typeColorCheck.val() == 2) {
					$('img').attr('src', 'img/Civic_blue.jpg');
				} else if (typeColorCheck.val() == 3) {
					$('img').attr('src', 'img/Civic_red.jpg');
				}
		}

		function typeCarCRV () {
				var typeColorCheck = $('input[name="typeOfColor"]:checked');
				if (typeColorCheck.val() == 1) {
					$('img').attr('src', 'img/CRV_black.png');
				} else if (typeColorCheck.val() == 2) {
					$('img').attr('src', 'img/CRV_blue.jpg');
				} else if (typeColorCheck.val() == 3) {
					$('img').attr('src', 'img/CRV_red.png');
				}
		}
		function typeCarAccord () {
				var typeColorCheck = $('input[name="typeOfColor"]:checked');
				if (typeColorCheck.val() == 1) {
					$('img').attr('src', 'img/Accord_black.jpg');
				} else if (typeColorCheck.val() == 2) {
					$('img').attr('src', 'img/Accord_blue.jpg');
				} else if (typeColorCheck.val() == 3) {
					$('img').attr('src', 'img/Accord_red.png');
				}
		}

		//Raduis-wheels
		floorWheels.change(function() {
			if($(this).val() == 1){
				basePriceWheels = 30000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
			} else if ($(this).val() == 2){
				basePriceWheels = 40000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
			} else {
				basePriceWheels = 50000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
			}
		});	

		//Color-car
		typeOfColor.change(function(event) {
			if ($(this).val() == 1 && basePriceModel == 700000) {
				basePriceColor = 10000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
				$('img').attr('src', 'img/Civic_black.jpg');
			} else if ($(this).val() == 1 && basePriceModel == 1500000) {
				basePriceColor = 10000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
				$('img').attr('src', 'img/CRV_black.png');
			} else if ($(this).val() == 1 && basePriceModel == 1600000) {
				basePriceColor = 10000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
				$('img').attr('src', 'img/Accord_black.jpg');
			}

			if ($(this).val() == 2 && basePriceModel == 700000) {
				basePriceColor = 15000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
				$('img').attr('src', 'img/Civic_blue.jpg');
			} else if ($(this).val() == 2 && basePriceModel == 1500000) {
				basePriceColor = 15000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
				$('img').attr('src', 'img/CRV_blue.jpg');
			} else if ($(this).val() == 2 && basePriceModel == 1600000) {
				basePriceColor = 15000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
				$('img').attr('src', 'img/Accord_blue.jpg');
			}

			if ($(this).val() == 3 && basePriceModel == 700000) {
				basePriceColor = 20000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
				$('img').attr('src', 'img/Civic_red.jpg');
			} else if ($(this).val() == 3 && basePriceModel == 1500000) {
				basePriceColor = 20000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
				$('img').attr('src', 'img/CRV_red.png');
			} else if ($(this).val() == 3 && basePriceModel == 1600000) {
				basePriceColor = 20000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
				$('img').attr('src', 'img/Accord_red.png');
			}
		});

		//signaling
		signaling.change(function(event) {
			if ($(this).is(':checked')) {
				basePriceSignaling = 30000;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
			}
			else {
				basePriceSignaling = 0;
				carPrice = basePriceModel + basePriceWheels + basePriceColor + basePriceSignaling;
				summ.text(carPrice);
			}
		});
		summ.text(carPrice);
});			


