$("#mobileGallery").owlCarousel({
    navigation: true,
    items: 1,
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
            items: 1,
        },
        1000: {
            items: 2,
        },
    },
});