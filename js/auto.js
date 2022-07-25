$( document ).ready(function() {
// slick - auto
  $('.slider-auto').slick({
    slidesToShow: 1,
    // adaptiveHeight: true,
    asNavFor: ".slidersmall-auto",
  });

  $('.slidersmall-auto').slick({
    slidesToShow: 5,
    asNavFor: ".slider-auto",
    // centerMode: true,
  });
});
