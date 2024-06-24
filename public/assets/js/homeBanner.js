$("#HomeSlider").owlCarousel({
    navigation: true,
    items: 3,
    slideSpeed: 1000,
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});

$("#ServiceSlider").owlCarousel({
    nav: false,
    slideSpeed: 1000,
    loop: true,
    autoplay: true,
    dots: false,
    center: true,
    responsive:{
      0:{
        items: 3
      },
      600:{
        items: 3
      },
      1000:{
        items: 3
      }
    }
});





