/**
 * Стилизованные чекбоксы
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

        if (checked) {
            label.addClass("checked");
        } else {
            label.removeClass("checked");
        }
    }

    $(document).on("change", ".input-checkbox input", function () {
        toggleOnChange($(this));
    });

    $(".input-checkbox").each(function () {
        toggleOnLoad($(this));
    });

})(jQuery);