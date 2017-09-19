/**
 * Табы
 */

(function ($) {

    var container = $("#tabs");

    if (container.length) {
        var history = !!(window.history && window.history.pushState);
        var current = window.location.hash;
        var controls = container.find("a");
        var contents = $("[data-tab]");
        var toggle, content;

        if (current) {
            toggle = controls.filter("[href='" + current + "']");
            content = $(current);
        } else {
            toggle = controls.eq(0);
            content = $(toggle.attr("href"));
        }

        toggle.addClass("active");
        content.show();

        controls.click(function (e) {
            e.preventDefault();

            var toggle = $(this);
            var name = $(this).attr("href");
            var content = $(name);

            controls.removeClass("active");
            toggle.addClass("active");

            if (history) {
                window.history.pushState(null, "", name);
            }

            contents.hide();
            content.stop(true, false).fadeIn(300);
        });

    }

})(jQuery);