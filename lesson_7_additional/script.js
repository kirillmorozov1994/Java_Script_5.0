
	'use strict';

	function update() {
		let clock = document.querySelector('.timer');
		let	date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;
		clock.children[0].innerHTML = hours + ":";

		let minutes = date.getMinutes();
		if (minutes < 10) minutes = '0' + minutes;
		clock.children[1].innerHTML = minutes + ":";

		let seconds = date.getSeconds();
		if (seconds < 10) seconds = '0' + seconds;
		clock.children[2].innerHTML = seconds;
	}

	let timerId;

	function clockStart() {
		timerId = setInterval(update, 1000);
		update();
	}

	function clockStop() {
		clearInterval(timerId);
		timerId = null;
	}
	clockStart();
	
	let fps = 60,
			box = document.querySelector('.wrapper'),
			pos = 0;
	function step() {

		setTimeout(function () {
			requestAnimationFrame(step);
			if (pos > 90) {
				pos = 0;
			} else {
				pos += 0.1;
				box.style.top = pos + "%";
				box.style.left = pos + "%";
			}
			
		}, 1000 / fps);
	}
	step();