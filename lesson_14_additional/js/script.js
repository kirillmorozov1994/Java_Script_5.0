$(document).ready(function () {

//Модальное окно ====================================================================
	$('.main_btna, .main_btn, .main_nav li:eq(1)').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').css({'width': '60%'}).slideDown('slow').animate(
			{
				opacity: '1',
				width: '40%'
			},
		 	{
				queue: false,
				duration: 'slow'
			},
			'slow');
	});
	$('.overlay, .close').on('click', function () {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow').animate(
			{
				opacity: '0',
				width: '60%'
			},
			{
				queue: false,
				duration: 'slow'
			},
			 'slow');
	});
//Модальное окно ====================================================================

//Асинхронная отправка формы ========================================================
$('.form-inline').submit(function (event) {
	event.preventDefault();
	console.log('success');
	$.ajax({
		type: "POST",
		url: "server.php",
		data: $('.form-inline').serialize()
	}).done(function(){
		console.log($('.form-inline').serialize());
		$('.form-inline')[0].reset();
		$('.overlay').fadeOut('slow');
		$('.modal').animate({
			opacity: '0',
			marginTop: '-30%',
			width: '60%'
		}, 'slow');
	}).fail(function () {
		console.log('fail');
	});
});
//Асинхронная отправка формы ========================================================

});