$(function () {
	
	/* fixed header */
	
	var fixed = $("#fixed");
	var hBanner = $("#banner").innerHeight();
	var hScroll = $(window).scrollTop();
	
	function changeFixed(hScroll) {
		hScroll = $(window).scrollTop();
		if(hScroll>hBanner) {
			fixed.addClass("fixed");
		}
		else {
			fixed.removeClass("fixed");
		}
	}
	
	changeFixed(hScroll);
	$(window).on("scroll", function() {
		changeFixed(hScroll);
	});
	
	
	/* Srolling by click */
	
	$('[data-scroll]').on("click", function(event) {
		event.preventDefault();
		var blockId = $(this).data('scroll');
		var blockOffset = $(blockId).offset().top;
		$("html, body").animate({
			scrollTop: blockOffset - 70
		}, 500);
	});
	
	/* burger - menu */
	
	$("#burger").on("click", function(event) {
		event.preventDefault();
		$("#openBurger").toggleClass("openBurger");
	});
	
	/* Accordion */
	
	$(".wwdAItemTitle").on("click", function() {
		$('.wwdAItemTitle').not(this).parent().removeClass("active");
		$(this).parent().toggleClass("active");
	});
	
	/* Slider 1 method 
	
	
	$(".arrowLeft").on("click", function(event) {
		
		event.preventDefault();
				
		var parentId = $(this).parent().removeClass("active");
		var ind = $(parentId).index();
		var parent2Id = $(parentId).parent();
		var first = $(parent2Id).children(".wwdSlider:first");
		var last = $(parent2Id).children(".wwdSlider:last");
		 
		changeSlideL(ind);
		
		function changeSlideL(ind) {
			
			if(ind == 0) {
				$(last).addClass("active");
				
			}
			else {
				$(parentId).prev().addClass("active");
			}
		}
	});
	
	$(".arrowRight").on("click", function(event) {
		
		event.preventDefault();
				
		var parentId = $(this).parent().removeClass("active");
		var ind = $(parentId).index();
		var parent2Id = $(parentId).parent();
		var first = $(parent2Id).children(".wwdSlider:first");
		var last = $(parent2Id).children(".wwdSlider:last");
		var lastind = $(parent2Id).children(".wwdSlider").length - ind - 1;
		 
		changeSlideR(lastind);
		
		function changeSlideR(lastind) {
			console.log(lastind);
			if(lastind == 0) {
				$(first).addClass("active");
			}
			else {
				$(parentId).next().addClass("active");
			}
		}
	}); */
	
	$('.one-time').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	  });
});