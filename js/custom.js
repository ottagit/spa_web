/* Program */

$(function() {
  new WOW().init();
});

/* Training sessions */
$(function() {
  $("#work").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  })
});

/* Team Owl Carousel */
$(function(){
  $("#coaches").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});