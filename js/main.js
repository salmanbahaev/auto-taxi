$( document ).ready(function() {
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
   $( "#moneycount" ).val( slidermoneyMin );
   var slidermoney = $("#slidermoney").slider({
      animate:1000,
      min:slidermoneyMin,
      max:slidermoneyMax,
      step:1820,   
      slide:function(event,ui){
          $( "#moneycount" ).val( ui.value );
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
      step:1,
      slide:function(event,ui){
          $("#daycount").val(ui.value);
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


  $('.slider').slick({
    slidesToShow: 2,
    dots: true,
  });

});