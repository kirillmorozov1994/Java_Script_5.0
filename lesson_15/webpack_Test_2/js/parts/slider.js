function slider() {
	
//Пишем слайдер ===================================================
	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');


	animateSliderPrev(slideIndex);

	function incrSlides(n) {
		if(n == -1) {
			animateSliderPrev(slideIndex += n);
		} else {
			animateSliderNext(slideIndex += n);
		}
	
	}

	function currentSlide(n) {
		animateSliderPrev(slideIndex = n);
	}

	prev.addEventListener('click', function () {
		incrSlides(-1);
	});
	next.addEventListener('click', function () {
		incrSlides(1);
	});

	dotsWrap.addEventListener('click', function (event) {
		for(let i = 0; i <= dots.length; i++) {
			if(event.target.classList.contains('dot') && event.target == dots[i -1]) {
				currentSlide(i);
			}
		}
	});

	//Анимация слайдера
	function animateSliderPrev(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');
		dots.forEach((item) => item.classList.remove('dot-active'));

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');
			let prev = 100;

		let animSlider = setInterval(function() {
			if(prev != 0) {
				prev--;
				slides[slideIndex - 1].style.transform = `translateX(${prev}%)`;
			} 
			else {
				clearInterval(animSlider);
			}
		}, 10);
	}

	function animateSliderNext(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');
		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
		let next = -100;

		let animSlider = setInterval(function () {
			if (next != 0) {
				next++;
				slides[slideIndex - 1].style.transform = `translateX(${next}%)`;
			}
			else {
				clearInterval(animSlider);
			}
		}, 10);
	}
//Пишем слайдер ===================================================	

}

module.exports = slider;