/* global $, alert, console */
$(function () {

	'user strict';

	// Adjust Slider Height

	var winH = $(window).height(),
		navH = $('.navbar').innerHeight();

	$('.slider, .carousel-item').height(winH - navH);

	// Add Class Active

	$('.navbar-nav .nav-item .nav-link').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});

	// Smooth Scroll to div

	$('.navbar-nav .nav-item .nav-link').click(function (){
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1200);
	});

});