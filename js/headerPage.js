(function($) {
    "use strict";
     $(document).on('ready', function() {
		$(".hero-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:2000,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			dots:false,
		});

		/*====================================
		Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		$('.pro-features .get-pro').on( "click", function(){
			$('.pro-features').toggleClass('active');
		});

		/*================
		Wow JS
		==================*/		
			var window_width = $(window).width();   
			if(window_width > 767){
			new WOW().init();
		}
		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		}); 

		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
			horizontalOffset: 0,
			verticalOffset: 0
		});

	});
	
	/*===============================
			Portfolio Slider JS
	=================================*/ 
	$('.portfolio-slider').owlCarousel({
		autoplay:true,
		autoplayTimeout:1000,
		margin:15,
		smartSpeed:300,
		autoplayHoverPause:true,
		loop:true,
		nav:false,
		dots:false,
		responsive:{
			300: {
				items:1,
			},
			480: {
				items:2,
			},
			768: {
				items:2,
			},
			1170: {
				items:4,
			},
		}
	});

	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});

	/*=====================================
		Counter Up JS
	======================================*/
	$('.counter').counterUp({
		delay:20,
		time:2000
	});



	

})(jQuery);
