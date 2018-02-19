// Program 

$(function() {
  new WOW().init();
});

// Training sessions 
$(function() {
  $("#work").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  })
});

// Team Owl Carousel 
$(function() {
  $("#coaches").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

// Testimonials Owl Carousel
$(function() {
  $("#student-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

//* Stats
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});

//Clients Owl Carousel 
$(function() {
  $("#clients-list").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

// Shoe/Hide transparent black nav

// Navigation 
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 50 ) {
      // hide nav
      $("nav").removeClass("academy-top-nav");
      $("#back-to-top").fadeOut();
    }
    else {
      // show nav
      $("nav").addClass("academy-top-nav");
      $("#back-to-top").fadeIn();
    }
  })
});

// Smooth scroll
$(function(){
  $(".smooth-scroll").on( 'click', 'a', function(event) {
    event.preventDefault();

    let section = $(this).attr("href");
    // return section id like #home #services
    $("htm, body").animate({
      scrollTop: $(section).offset().top
    }, 1250, "easeInOutExpo");
  });
});

// Close mobile menu on click
$(function() {
  $("ul.navbar-nav").on("click touch", function() {
    $(".navbar-toggler").click();
  });
});