/**
 * Главная
 */

$(function () {

    $("#carousel-home").slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: "easeInOutQuart",
        speed: 500,
        draggable: false,
        prevArrow: carouselHomeArrowPrev,
        nextArrow: carouselHomeArrowNext
    });

    $("[data-catalog-toggle]").click(function () {
        $(this)
            .toggleClass("active")
            .next()
            .stop(true, false)
            .slideToggle(300);
    });

});