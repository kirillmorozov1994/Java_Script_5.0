$(document).ready(function () {
	$('.main_btna, .main_btn, .main_nav li:eq(1)').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').css({'display': 'block', 'marginTop': '-20%'}).animate(
			{
				marginTop: '10%'
			}, 'slow');
	});
	$('.overlay, .close').on('click', function () {
		$('.overlay').fadeOut('slow');
		$('.modal').animate(
			{
				marginTop: '-20%'
			}, 'slow');
	});
});