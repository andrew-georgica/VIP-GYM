
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

    $('#triangle1').css({
      'transform' : 'translate(0px, '+ wScroll /2.5 +'%)'
    });

    $('#triangle2').css({
      'transform' : 'translate(0px, -'+ wScroll /2.5 +'%)'
    });

    $('#triangle3').css({
      'transform' : 'translate('+ wScroll /5 +'%, 0px)'
    });

});
