/**
 * Аккордион
 */

(function ($) {

    var options = {
        speed: 200,
        easing: "easeInOutCubic",
        breakpoint: 1000
    };

    $("[data-accordion]").each(function () {
        var self = $(this),
            active = $("[data-accordion-toggle=" + self.data('accordion') + "]").hasClass("active");

        if (options.breakpoint) {
            var width = $(window).width();

            if (width <= options.breakpoint) {
                if (!active) {
                    self.hide();
                }
            }
        } else {
            if (!active) {
                self.hide();
            }
        }
    });

    $("[data-accordion-toggle]").click(function () {
        var toggle = $(this),
            target = $("[data-accordion=" + toggle.data('accordion-toggle') + "]");

        if (options.breakpoint) {
            var width = $(window).width();

            if (width <= options.breakpoint) {
                target.stop(true, false).slideToggle(options.speed, options.easing);
                toggle.toggleClass("active");
            }
        } else {
            target.stop(true, false).slideToggle(options.speed, options.easing);
            toggle.toggleClass("active");
        }
    });

})(jQuery);