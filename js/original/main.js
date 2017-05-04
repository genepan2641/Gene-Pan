
$(window).on('load', function() {
	$('#preloader').fadeOut('slow', function() { 
		$(this).remove();
	});
});

$(document).ready(function(){

	var Scrolling = (function(){

	// <!-- Scroll To Works Section Binding -->
	let workScrollTop = $('#works').offset().top;

	function scrollToWorks() {
		$('#nav__works').on('click', function(e) {
			e.preventDefault();
			$('body').animate({scrollTop: workScrollTop}, 1500, 'easeOutCubic');
		});
	}

	function animateCss() {
		$(window).on('scroll', function() {
			let wScroll = $(this).scrollTop();

			$('.header__floating1').css({
				'transform' : `translate(0px, ${-wScroll/8}%)`
			});		

			$('.header__floating2').css({
				'transform' : `translate(0px, ${-wScroll/2}%)`
			});		

			$('.header__floating3').css({
				'transform' : `translate(0px, ${-wScroll/6}%)`
			});		

			$('.header__intro').css({
				'transform' : `translate(0px, ${-wScroll/8}%)`
			});

			$('#header__works').css({
				'transform' : `translate(0px, ${-wScroll/2}%)`
			});

			$('#header__line').css({
				'transform' : `translate(0px, ${-wScroll/10}%)`
			});
			
			$('.works__card').css({
				'transform' : `translate(0px, ${-wScroll/20}%)`
			});
		

			if (wScroll > workScrollTop - 10) {
				$('.nav').addClass('solid');
			} else {
				$('.nav').removeClass('solid');
			}		
		});
	}

	// wow.js
	new WOW().init();

	return {
		scrollToWorks: scrollToWorks,
		animateCss: animateCss
	};

	})();

	Scrolling.scrollToWorks();
	Scrolling.animateCss();

});
