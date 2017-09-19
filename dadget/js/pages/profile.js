/**
 * Личный кабинет
 */

$(function () {

    $("#list-order .list-item-header").click(function () {
        $(this).next(".list-item-content").stop(true, false).slideToggle(300);
    });

    $("[data-profile-toggle]").click(function () {
        var button = $(this);

        button.hide();
        button.prev(".profile-data-value").hide();
        button.next(".profile-data-form").fadeIn(300);
    });

    $("#form-address").validate({
        submitHandler: function (form) {
            form = $(form);

            form.submit();
        }
    });

    $(".form-profile .datepicker").datepicker({
        firstDay: 1,
        dateFormat: "dd.mm.yy",
        hideIfNoPrevNext: true,
    });

    $(".form-profile").on("reset", function () {
        var button = $(this);
        var container = button.parents(".profile-data-term");

        container.find(".profile-data-form").hide();
        container.find(".profile-data-value").fadeIn(300);
        container.find("[data-profile-toggle]").fadeIn(300);
    });

    $(".form-profile").each(function () {
        $(this).validate({
            submitHandler: function (form) {
                form = $(form);

                var button = form.find("button[type=submit]");

                var data = {};

                button.addClass("loading");

                $.post("/post/", data, function (result) {
                    if (!result.success) {
                        button.removeClass("loading");
                    } else {
                        button.removeClass("loading");
                        var container = form.parents(".profile-data-term");
                        form.hide();
                        container.find(".profile-data-value").fadeIn(300);
                        container.find("[data-profile-toggle]").fadeIn(300);
                    }
                }, "json");
            }
        });
    });

});