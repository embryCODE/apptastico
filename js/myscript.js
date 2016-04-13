$(document).ready(function(){
  
  // change .selected class as if we are going to other pages on the site
  $('nav a').click(function() {
	  $('nav a').removeClass('selected');
	  $(this).addClass('selected').blur();
  });
 
	// slick.js carousel for projects section
  $('.projects-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    swipeToSlide: true
  });
  
  // slick.js carousel for projects section IN SMALL SCREEN SIZES
  $('.projects-carousel-small').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    swipeToSlide: true
  });
  
});