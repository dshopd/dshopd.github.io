$(function () {

    if (typeof svg4everybody !== "undefined") {
        svg4everybody();
    }

    if ($.prototype.placeholder) {
        $("input, textarea").placeholder({
            customClass: 'ie-placeholder'
        });
    }

    if (typeof lightbox !== "undefined") {
        lightbox.option({
            "albumLabel": "%1/%2",
        });
    }

    $(".modal").on("show.bs.modal", function () {
        $(".modal.in").modal("hide");
    });

});

$(function () {

    project.initSelects();
    project.initAutocomplete();
    project.initMasks();

});

$(function () {

    $(".carousel-products").slick({
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
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1180,
                settings: "unslick"
            }
        ]
    });

    $(".modal-quickview").on("shown.bs.modal", function () {
        var carousel = $(this).find(".carousel-quickview");

        carousel.slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            easing: "easeInOutQuart",
            speed: 500,
            draggable: false,
            prevArrow: carouselProductArrowPrev,
            nextArrow: carouselProductArrowNext
        });
    });

});

$(function () {

    $("#form-callback").validate({
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

});