/**
 * Числовые инпуты
 */

(function ($) {

    function plus() {
        var value = 0,
            control = $(this),
            parent = control.parent(),
            input = parent.find("input"),
            oldval = parseInt(input.val(), 10),
            options = parent.data("options");

        if (oldval + options.step > options.max) {
            value = options.max;
        } else {
            value = oldval + options.step;
        }

        input.val(value);

        return false;
    }

    function minus() {
        var value = 0,
            control = $(this),
            parent = control.parent(),
            input = parent.find("input"),
            oldval = parseInt(input.val(), 10),
            options = parent.data("options");

        if (oldval - options.step < options.min) {
            value = options.min;
        } else {
            value = oldval - options.step;
        }

        input.val(value);

        return false;
    }

    $(".input-number").each(function () {
        var input = $(this);

        var options = {
            min: input.attr("min") || 1,
            max: input.attr("max") || 100,
            step: input.attr("step") || 1
        };

        input.data("options", options);

        var buttonPlus = $("<button/>", {
            "class": "button input-number-control plus",
            "title": "+"
        }).html(iconPlus).on("click", plus);

        var buttonMinus = $("<button/>", {
            "class": "button input-number-control minus",
            "title": "-"
        }).html(iconMinus).on("click", minus);

        input.append(buttonPlus);
        input.prepend(buttonMinus);
    });

})(jQuery);