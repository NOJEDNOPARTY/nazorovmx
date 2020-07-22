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
			$(this).closest('header').find('.header-wrap').slideToggle('fast');
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
			$('body').removeClass('hidden');
			$(this).closest('header').removeClass('open');
			$(this).closest('header').find('.header-wrap').slideUp('fast');
		});


	},
	owl: function(){
		$('.reviews-slider').owlCarousel({
			loop:true,
			items: 3,
			margin:52,
			nav: true,
			dots: false,
			autoHeight: true,
			responsive:{
				0:{
					items:1,
					margin: 0
				},
				501:{
					items:2
				},
				768:{
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
		});

		$('.price-slider').owlCarousel({
			loop:true,
			items: 1,
			margin:0,
			nav: true,
			dots: false,
			autoHeight: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});

		$('.coaches-slider').owlCarousel({
			loop:true,
			items: 1,
			margin:0,
			nav: true,
			dots: false,
			autoHeight: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});

		var startSLider = $('.start-slider');

		startSLider.owlCarousel({
			loop:true,
			items: 1,
			margin:0,
			nav: true,
			dots: false,
			autoHeight: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed: 100
		});

		startSLider.on('translate.owl.carousel', function(event) {
			var nextImg = $(this).find('.owl-item.active').next().next().find('.start-slider-img img').attr('src');
			var prevImg = $(this).find('.owl-item.active').find('.start-slider-img img').attr('src');
			var startNext = $('.start-slider-next img');
			var startPrev = $('.start-slider-prev img');

			startNext.fadeOut('slow', function () {
				startNext.attr('src', nextImg);
				startNext.fadeIn('fast');
			});

			startPrev.fadeOut('slow', function () {
				startPrev.attr('src', prevImg);
				startPrev.fadeIn('fast');
			});
		});
	},
};

(function() {
	common.init();
}());
