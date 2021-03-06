function timer() {

	//Таймер ===========================================================
	let deadLine = '2018-12-10';

	let getTimerRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	let setClock = (id, endtime) => {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');
		let timeInterval = setInterval(upDateClock, 1000);

		function upDateClock(a = '0', b = '00') {
			let t = getTimerRemaining(endtime);
			if (t.hours < 10) {
				t.hours = `0${t.hours}`;
			}
			if (t.minutes < 10) {
				t.minutes = `0${t.minutes}`;
			}
			if (t.seconds < 10) {
				t.seconds = `0${t.seconds}`;
			}
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
			}
		}
	};

	setClock('timer', deadLine);
	//Таймер ===========================================================
	
}

module.exports = timer;