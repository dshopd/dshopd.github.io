/**
 * Каталог
 */

$(function () {

    $("#carousel-product").slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: "easeInOutQuart",
        speed: 500,
        draggable: false,
        fade: true,
        asNavFor: "#carousel-product-thumbs"
    });

    $("#carousel-product-thumbs").slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        easing: "easeInOutQuart",
        speed: 500,
        draggable: false,
        prevArrow: carouselProductArrowPrev,
        nextArrow: carouselProductArrowNext,
        asNavFor: "#carousel-product"
    });

    $("#spritespin").spritespin({
        source: SpriteSpin.sourceArray("userdata/360/frame{frame}.jpg", {
            frame: [1, 31],
            digits: -1
        }),
        width: 430,
        height: 430,
        responsive: true,
        animate: false
    });

    $(document).on("click", "[data-compare-toggle]", function () {
        var button = $(this);
        var list = $(".list-compare");
        var items = list.find(".list-compare-item");
        var rows = items.find(".list-item-row.hidden");

        button.addClass("hidden");
        rows.slideDown(300);

    });

});

$(function () {

    $("#form-question").validate({
        submitHandler: function (form) {
            form = $(form);

            var button = form.find("button[type=submit]"),
                content = form.find(".form-content"),
                success = form.find(".form-success");

            var data = {};

            button.addClass("loading");

            $.post("/post/", data, function (result) {
                if (!result.success) {
                    button.removeClass("loading");
                } else {
                    button.removeClass("loading");
                    content.fadeOut(200, function () {
                        success.fadeIn(300);
                    });
                }
            }, "json");
        }
    });

    $("#form-review").validate({
        submitHandler: function (form) {
            form = $(form);

            var button = form.find("button[type=submit]"),
                content = form.find(".form-content"),
                success = form.find(".form-success");

            var data = {};

            button.addClass("loading");

            $.post("/post/", data, function (result) {
                if (!result.success) {
                    button.removeClass("loading");
                } else {
                    button.removeClass("loading");
                    content.fadeOut(200, function () {
                        success.fadeIn(300);
                    });
                }
            }, "json");
        }
    });

    $("#carousel-compare").slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        easing: "easeInOutQuart",
        speed: 500,
        draggable: false,
        prevArrow: carouselProductArrowPrev,
        nextArrow: carouselProductArrowNext,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    easing: "easeInOutQuart",
                    speed: 500,
                    draggable: false,
                    prevArrow: carouselProductArrowPrev,
                    nextArrow: carouselProductArrowNext
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    easing: "easeInOutQuart",
                    speed: 500,
                    draggable: false,
                    prevArrow: carouselProductArrowPrev,
                    nextArrow: carouselProductArrowNext
                }
            }
        ]
    });

});