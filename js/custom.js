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