/**
 * Контакты
 */

(function ($) {

    project.initMap("contacts-map", false);

    $("[data-contacts-cities]").change(function () {
        var selected = $(this).find("option:selected");

        currentCityId = selected.val();
        currentCityName = selected.text();

        project.reloadMap("#contacts-list", "#contacts-list-template");
    });

    $("#form-subscribe").validate({
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

    $("#form-contacts").validate({
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

})(jQuery);