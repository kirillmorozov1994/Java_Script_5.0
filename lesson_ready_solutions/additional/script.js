$(document).ready(function ($) {
	$('#tabs').tabulous({
		effect: 'slideLeft'
	});

	var slider = new IdealImageSlider.Slider('#slider');
	slider.start();

// $('.parallax-window').parallax({
// 	naturalWidth: 600,
// 	naturalHeight: 400
// });
});

