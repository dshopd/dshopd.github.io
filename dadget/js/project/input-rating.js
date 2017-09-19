/**
 * Стилизованные радио-кнопки
 */

(function ($) {

    function toggleOnLoad(elem) {
        var checked = elem.find("input").is(":checked");

        if (checked) {
            elem.addClass("checked");
        } else {
            elem.removeClass("checked");
        }
    }

    function toggleOnChange(elem) {
        var checked = elem.is(":checked"),
            label = elem.parent("label");

        $("input[name=" + elem.attr("name") + "]")
            .parent("label")
            .removeClass("checked");

        if (checked) {
            label.addClass("checked");
        } else {
            label.removeClass("checked");
        }
    }

    $(document).on("change", ".input-rating input", function () {
        toggleOnChange($(this));
    });

    $(document).on("mouseenter", ".input-rating", function () {
        var input = $(this);
        var siblings = input.siblings();
        var prevAll = input.prevAll();

        input.addClass("hover");
        prevAll.addClass("hover");
    });

    $(document).on("mouseleave", ".input-rating", function () {
        var input = $(this);
        var siblings = input.siblings();

        input.removeClass("hover");
        siblings.removeClass("hover");
    });

    $(".input-rating").each(function () {
        toggleOnLoad($(this));
    });

})(jQuery);