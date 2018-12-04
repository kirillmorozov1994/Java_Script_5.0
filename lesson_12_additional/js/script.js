
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
		let request = new XMLHttpRequest();

		function getRequstion(data) {
			return new Promise(function (resolve, reject) {
				request.open('GET', 'js/current.json');
				request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
				request.send();

				request.addEventListener('load', function () {
					if (request.readyState === 4 && request.status == 200) {
						resolve();
					} else {
						 reject();
					}
				});
			});
		}

		getRequstion().then(() => {
			let data = JSON.parse(request.response);
			inputUsd.value = parseFloat(inputRub.value / data.usd, 2).toFixed(2);
			}).catch(inputUsd.value = "Что-то пошло не так!");

});