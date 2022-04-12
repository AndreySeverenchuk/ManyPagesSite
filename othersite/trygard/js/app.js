$(function() {

	var heightFirstPage = $('.present__foto1').outerHeight();

	// scrolling by navigation ------

	$('[data-scroll]').on("click", function() {
		var idDiv = '#'+$(this).data('scroll');
		var positionDiv = $(idDiv).offset().top;

console.log(idDiv, positionDiv, heightFirstPage);

		if(positionDiv > heightFirstPage) {
			$('html, body').animate({
				scrollTop: positionDiv - 100
			}, 500);
		}
	});

});