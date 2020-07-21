var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('body').toggleClass('hidden');
			$(this).closest('header').toggleClass('open');
		});

		$('.question-trigger').click(function(event){
			event.preventDefault();
			$(this).closest('.question').toggleClass('open');
			$(this).closest('.question').find('.question-cnt').slideToggle('fast');
		})

		var bLazy = new Blazy({});

		$('.tabs-section-item').click(function(e){
			e.preventDefault();
			if($(this).hasClass('.active') == false) {
				var tabCnt = '.' + $(this).attr('data-cnt');
				$(this).closest('.tabs-section-wrap').find('.tabs-section .active').removeClass('active')
				$(this).closest('.tabs-section-wrap').find('.tab-cnt').removeClass('active')
				$(tabCnt).addClass('active')
				$(this).addClass('active');
				var bLazy = new Blazy({});
			}
		});

		$(".phone-trigger").mask("+81(999) 999-99-99");

		jQuery(function($){
			$(document).mouseup(function (e){ 
				var popup = $(".popup");
				if (!popup.is(e.target) 
					&& popup.has(e.target).length === 0) { 
					$('.popup-wrapper').fadeOut('fast');
					$('body').removeClass('hidden');
				}
			});
		});


		$('.owl-carousel').on('changed.owl.carousel', function(event) {
			var bLazy = new Blazy({});
		})

		$('.form-row input').keyup(function(){
			if($(this).val() == '') {
				$(this).closest('.form-row').removeClass('active')
			}else {$(this).closest('.form-row').addClass('active')}
		});

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$('header').removeClass('open');
			$(popup).fadeIn('fast');
			$('body').addClass('hidden');
		});

		
		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').fadeOut('fast');
			$('body').removeClass('hidden');
		})

		$('.tel-trigger').mask("+7(999) 999-99-99");

		function fixedHead() {
			if($(window).scrollTop() > 1){
				$('header').addClass('fixed');
			}else {
				$('header').removeClass('fixed');
			}
		};

		fixedHead();

		$( window ).scroll(function() {
			fixedHead();
		});

		$(window).resize(function() {
			fixedHead();
		});
		
		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 100}, 3000);
			$('.menu-trigger').removeClass('open');
			$('header').removeClass('open');
		});

	},
	owl: function(){
		$('.reviews-slider').owlCarousel({
			loop:true,
			items: 3,
			margin:0,
			nav: true,
			dots: false,
			center: true,
			autoHeight: true,
			responsive:{
				0:{
					items:1,
					center: false
				},
				551:{
					items:3
				},
			}
		})
		$('.gallery').owlCarousel({
			loop:true,
			items: 1,
			margin:0,
			nav: false,
			dots: true,
			autoHeight: true,
		})
	},
};

(function() {
	common.init();
}());
