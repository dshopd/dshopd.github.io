/**
 * Плавная прокрутка до якоря
 */

(function ($) {

    var options = {
        selector: ".scrollto",
        speed: 750,
        easing: "easeOutQuart",
        history: !!(window.history && window.history.pushState),
    };

    $(options.selector).click(function (e) {
        e.preventDefault();

        var offset = 0,
            url = $(this).attr("href"),
            target = $(url);

        if (options.history) {
            window.history.pushState(null, "", url);
        }

        $("html, body").stop(true, false).animate({
            scrollTop: target.offset().top + offset
        }, options.speed, options.easing);
    });

})(jQuery);
