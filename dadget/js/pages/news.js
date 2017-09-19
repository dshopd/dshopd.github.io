/**
 * Новости
 */

$(function () {

    $("#carousel-gallery").slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: "easeInOutQuart",
        speed: 500,
        draggable: false,
        prevArrow: carouselProductArrowPrev,
        nextArrow: carouselProductArrowNext,
        mobileFirst: true,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    variableWidth: false,
                    centerMode: false,
                }
            }
        ]
    });

});