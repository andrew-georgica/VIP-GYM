
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

    $('.quote_img').css({
      'transform' : 'translate(0px, '+ wScroll /25 +'%)'
    });

    $('.header_quote').css({
      'transform' : 'translate(0px, -'+ wScroll /9 +'%)'
    });

    $('.quote').css({
      'transform' : 'translate('+ wScroll /30 +'%, 0px)'
    });

    $('#triangle2').css({
      'transform' : 'translate(0px, -'+ wScroll /2 +'%)'
    });

    $('#triangle3').css({
      'transform' : 'translate('+ wScroll /5 +'%, 0px)'
    });

});
