$( document ).ready(function() {
// slick - auto
  
  $('.slider-auto').slick({
    slidesToShow: 1,
    asNavFor: ".slidersmall-auto",
  });

  $('.slidersmall-auto').slick({
    slidesToShow: $('.slidersmall-auto .slider__item-wrapper').length - 1,
    asNavFor: ".slider-auto",
    // centerMode: true,
  });
});
