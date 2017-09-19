/**
 * Каталог
 */

(function ($) {

    $(document).on("click", "[data-quickview]", function () {
        $.get("ajax-quickview.html", {/*params*/}, function (result) {
            $("#modal-quickview").find(".modal-content").html(result);
            $("#modal-quickview").modal("show");
            $("#form-quickorder").validate({
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
        }, "html");
    });

    $(document).on("click", "[data-quickorder-toggle]", function () {
        $("#form-quickorder").stop(true, false).slideToggle(300);
    });

    $(document).on("click", "[data-cart-add]", function () {
        var button = $(this);

        button.addClass("loading");
    });

    var catalogSortForm = $("#catalog-sort");
    var catalogSortSelect = catalogSortForm.find("select");

    catalogSortSelect.select2({
        minimumResultsForSearch: -1
    });

    catalogSortSelect.change(function () {
        catalogSortForm.submit();
    });

})(jQuery);