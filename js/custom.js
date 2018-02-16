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
$(function() {
  $("#coaches").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

/* Testimonials Owl Carousel */
$(function() {
  $("#student-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

/* Stats */
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});

/* Clients Owl Carousel */
$(function() {
  $("#clients-list").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});