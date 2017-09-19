/**
 * Плейсхолдеры
 */

(function ($) {

    var options = {
        offset: "-9px",
        speed: 150,
        easing: "linear",
        parentClass: ".form-group"
    };

    function show() {
        var input = $(this),
            active = input.data("active"),
            container = input.parents(options.parentClass);

        if (!active) {
            input
                .data("active", true)
                .data("placeholder", input.attr("placeholder"))
                .attr("placeholder", "");

            var placeholder = $("<span/>", {class: "placeholder"})
                .text(input.data("placeholder"))
                .appendTo(container)
                .animate({opacity: 1, top: options.offset}, options.speed, options.easing);

            input.data("placeholder", placeholder);
        }
    }

    function hide() {
        var input = $(this);

        if (!input.val()) {
            input
                .data("active", false)
                .attr("placeholder", input.data("placeholder").text())
                .data("placeholder").remove();
        }
    }

    $("[placeholder]").each(show);
    $(document).on("focus", "[placeholder]", show);
    $(document).on("blur", "[placeholder]", hide);

})(jQuery);