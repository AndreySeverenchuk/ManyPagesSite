$(function() {
	
	// fixed menu ---------

	var heightFirstPage = $('.name').outerHeight();

	$(window).on("scroll load", function(even) {
		even.preventDefault();
		var positionScroll = $(window).scrollTop();

		if(positionScroll > heightFirstPage) {
			$('header').addClass('fixed');
		}
		else {
			$('header').removeClass('fixed');
		}
	});

	// scrolling by navigation ------

	$('[data-scroll]').on("click", function() {
		var idDiv = '#'+$(this).data('scroll');
		var positionDiv = $(idDiv).offset().top;
		if(positionDiv > heightFirstPage) {
			$('html, body').animate({
				scrollTop: positionDiv - 100
			}, 500);
			console.log(positionDiv, heightFirstPage);
		}
	});

	// sort by category -------

	$('[data-filter]').on("click", function(even) {
		even.preventDefault();
		var nameFilter = $(this).data('filter');
		var cat = $('[data-cat]');
		if(nameFilter == "all") {
			$(cat).each(function() {				
				$(this).removeClass('hide');
			});
		}
		else {
			$(cat).each(function() {
				var nameCat = $(this).data('cat');
				if(nameCat == nameFilter) {
					$(this).removeClass('hide');
				}
				else {
					$(this).addClass('hide');
				}
			});
		}	
	});

	// opening/closing modal windows ----
		// opening

	$('[data-m]').on("click", function(event) {
		event.preventDefault();
		var mName = "#" + $(this).data('m');
		$(mName).addClass('active');
		$('body').addClass('noscroll');
		setTimeout(function() {
			$(mName).children().css({
				'transform': 'scaleY(1)'
			});		
		}, 200);
		$('[data-slick="slick"]').slick('setPosition');
	});

		// closing

	$('.icon-modal').on("click", function(event) {
		event.preventDefault();
		var close = $(this);
		$(close).parents('.modal-aline').css({
			'transform': 'scaleY(0)'
		});
		setTimeout(function() {
			$(close).parents('.modal').removeClass('active');
			$('body').removeClass('noscroll');
		}, 200);
	});

	$('.modal').on("click", function(event) {
		event.preventDefault();
		var close = $(this);
		$(close).children('.modal-aline').css({
			'transform': 'scaleY(0)'
		});
		setTimeout(function() {
			$(close).removeClass('active');
			$('body').removeClass('noscroll');
		}, 200);
	});

	$('.modal-aline').on("click", function(event) {
		event.stopPropagation();
	});

	// slider -----
	
	
	$('[data-slick="slick"]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: true,
		arrows: false
	  });

	$('.m-p-right-but-prev').on("click", function() {
		$(this).parents('.modal-project').find('[data-slick="slick"]').slick('slickPrev');
	});

	$('.m-p-right-but-next').on("click", function() {
		$(this).parents('.modal').find('[data-slick="slick"]').slick('slickNext');
	});

	// burger -----

	$('.burger-svg').on("click", function(event) {
		event.preventDefault();
		var onBurger = $(this);

		$(onBurger).css({'transform': 'scaleY(0)'});
		setTimeout(function() {
			$(onBurger).addClass('hide');
			$(onBurger).parents('.sub-header').find('.nav').removeClass('nav').addClass('nav--a');
			$(onBurger).parents('.sub-header').find('.burger-svg--a').removeClass('hide');
		}, 200);
		
		setTimeout(function() {
			$(onBurger).parent().children('.burger-svg--a').css({'transform': 'scaleY(1)'});
		}, 250);	
	});

	$('.burger-svg--a').on("click", function(event) {
		event.preventDefault();
		var onBurgerA = $(this);

		$(onBurgerA).css({'transform': 'scaleY(0)'});
		setTimeout(function() {
			$(onBurgerA).addClass('hide');
			$(onBurgerA).parents('.sub-header').find('.nav--a').removeClass('nav--a').addClass('nav');
			$(onBurgerA).parents('.sub-header').find('.burger-svg').removeClass('hide');
		}, 200);
		
		setTimeout(function() {
			$(onBurgerA).parent().children('.burger-svg').css({'transform': 'scaleY(1)'});
		}, 250);	
	});

});