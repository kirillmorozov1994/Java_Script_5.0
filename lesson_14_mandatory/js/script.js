$(document).ready(function () {
	$('.main_btna, .main_btn, .main_nav li:eq(1)').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});
	$('.overlay, .close').on('click', function () {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	});
});