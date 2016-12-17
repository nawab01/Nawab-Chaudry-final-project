
$('#enter').animate({
	'margin-left': '53%'
},2000)
$('#image').animate({
	'margin-left': '89%'
},2000)
var element = document.getElementById("start");
$('#enter').on('click', function(){
    apple();
	$('#enter').animate({
		'margin-left': '110%'
	},1000)
	$('#image').animate({
		'margin-left': '190%'
	},1000)
	setTimeout(function() {
		element.outerHTML = "";
		delete element;
	}, 1200)
	$('#main').animate({
		'margin-left': '10px'
	},1000)
})

//image-slider

function apple() {
    //settings for slider
    var width = 1200;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);
    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


}
