$(document).ready(function() {
    $('#tomato-btn').on('click',function() {
        $('#tomato-content').fadeToggle();
    });

    $('#eggplant-btn').on('click',function() {
        $('#eggplant-content').fadeToggle();
    });

    $('#corn-btn').on('click',function() {
        $('#corn-content').fadeToggle();
    });

    $('#cucumber-btn').on('click',function() {
        $('#cucumber-content').fadeToggle();
    });
});

$(function() {
	var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;

	// cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	setInterval(function(){
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
			currentSlide++;
			if (currentSlide === $slides.length) {
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			}
		});
	}, pause)
});