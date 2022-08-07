$( document ).ready(function() {
  document.addEventListener ("mouseleave", function (e) {
    if (e.clientY < 0) {
      $('.popup-fade').fadeIn(0);
		  return false;
    }
  }, false);

  $('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut(0);
		return false;
	});

  $(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut(0);
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut(0);					
		}
	});
  
  console.log( "ready!" );
  
  function RS( time , money ) {
    var cs = 1;
    return ( money * ( time * (cs) ) ).toFixed(0);
  }
  function RW() {
    var t = parseInt( $("#daycount").val() );
    var m = parseInt( $("#moneycount").val() );
    $('.how__summ-value').text( RS( t , m ) );
  }
  var slidermoneyMin = 1820;
  var slidermoneyMax = 25480;
  
 
  $( "#moneycount" ).val( 20020 );
  var slidermoney = $("#slidermoney").slider({
      animate:1000,
      min:slidermoneyMin,
      max:slidermoneyMax,
      value:20020,
      step:1820,
      slide:function(event,ui){
          $( "#moneycount" ).val( ui.value );
          console.log(ui.value);
          $( "#moneycount_label" ).text( ui.value / 1820 );
          RW();
          //itogoProfit();
      }
  });
  $('.how__summ-value').on('input',function() {
      var v = parseInt($(this).val(), 10);
      if(!isNaN(v) && v <= maxV && v >= 0) slider.slider('value', v);
      else $(this).val('');
  });
  
  
  var slidertimeMin = 1;
  var slidertimeMax = 7;
  $( "#daycount" ).val( slidertimeMin );
  var slidertime = $("#slidertime").slider({
      animate:1000,
      min:slidertimeMin,
      max:slidertimeMax,
      value:1,
      step:1,
      slide:function(event,ui){
          $("#daycount").val(ui.value);
          console.log(ui.value)
          $("#daycount_label").text(ui.value);
          RW();
          
          $("#rad").val(ui.value);
          $("#rad").val(ui.value);
          $radbutton = $("#rad").val();
          $("#create_button").css("border-radius", $radbutton+"px");
          
    }
  });
  
  RW();
  $('#rad').on('input',function() {
      var v = parseInt($(this).val(), 10);
      if(!isNaN(v) && v <= maxV && v >= 0) slider.slider('value', v);
      else $(this).val('');
  });

  // slick slider
  $('.slider').slick({
    slidesToShow: 2,
    dots: true,
    responsive: [
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 1,
          }
      }
  ]
  });

  // slick - help
  $('.help__slider').slick({
    slidesToShow: 1,
    dots: true,
    adaptiveHeight: true,
  });
  
  // slick - start
  $('.start__slider-1').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.start__slider-2').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.start__slider-3').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.start__slider-4').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.start__slider-5').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.start__slider-6').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.start__slider-7').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.start__slider-8').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.box-button button').click(function(){
    $('.start__slider-4').slick("refresh");
    $('.start__slider-5').slick("refresh");
    $('.start__slider-6').slick("refresh");
    $('.start__slider-7').slick("refresh");
    $('.start__slider-8').slick("refresh");
    $('.start__slider-4').slick("refresh");
    $('.start__slider-5').slick("refresh");
    $('.start__slider-6').slick("refresh");
    $('.start__slider-7').slick("refresh");
    $('.start__slider-8').slick("refresh");
  })


  // $('.box-button button').click(function(e){
  // })

  // ============= SLIDERS
  window.scrollBy(0, 1);

  $('.menu__btn').click(function(event) {
    $('body').toggleClass('lock');
  })

  $('.menu__item').click(function() {
    $('#menu__toggle').removeAttr("checked");
  })

  // slider start
  var list = $(".wrapper-boxes .box");
  var numToShow = 3; //сколько показывать элементов
  var button = $(".box-button button");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function() {
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(':visible').length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });

  $(".select-enter").click(function() {
    $(".header__select-modal").toggleClass("transparent");
  });
});