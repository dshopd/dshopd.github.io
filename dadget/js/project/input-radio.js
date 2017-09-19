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

    $(document).on("change", ".input-radio input, .input-radio-color input, .input-radio-button input", function () {
        toggleOnChange($(this));
    });

    $(".input-radio, .input-radio-color, .input-radio-button").each(function () {
        toggleOnLoad($(this));
    });

})(jQuery);