
$(document).ready(function() {

  $("#owl-1").owlCarousel({

      autoPlay: 15000, //Set AutoPlay to 3 seconds

      items : 1,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3],
      itemsTablet : [768, 2],
      itemsMobile : [479, 1],
  });

});

$(document).ready(function() {

  $("#owl-2").owlCarousel({

      autoPlay: 15000, //Set AutoPlay to 3 seconds

      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768, 1]
  });

});
