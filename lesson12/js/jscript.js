$(document).ready(function(){
	$('.main_btn, .main_btna, .main_nav nav ul li a:nth-child(1)').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').show('slow');
	});

	$('.close').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').hide('slow');
	});
});