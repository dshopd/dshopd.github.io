/**
 * Корзина
 */

$(function () {

    var date = new Date();
    var dateInput = $("#form-cart .datepicker");
    var dateInputOptions = {
        minDate: 0,
        firstDay: 1,
        dateFormat: "dd.mm.yy",
        hideIfNoPrevNext: true,
    };

    dateInput.val(date.toLocaleDateString("ru"));
    dateInput.datepicker(dateInputOptions);

});

$(function () {

    $("input[name=delivery]").change(function () {
        var delivery = $(this).val();

        $.get("ajax-delivery-" + delivery + ".html", {/*params*/}, function (result) {
            $("#cart-delivery").html(result);

            if (delivery == 1) { // Курьером
                project.initMasks();
            }

            if (delivery == 2) { // Почтой
                project.initMasks();
            }

            if (delivery == 3) { // Самовывоз
                project.initMap("cart-map", true);
                project.initSelects();
            }

            if (delivery == 4) { // PickPoint
            }
        }, "html");
    });

    $("input[name=payment]").change(function () {
        var payment = $(this).val();

        $.get("ajax-payment-" + payment + ".html", {/*params*/}, function (result) {
            $("#cart-payment").html(result);

            if (payment == 1) { // Наличными
            }

            if (payment == 2) { // Картой
            }

            if (payment == 3) { // Эл. деньгами
            }

            if (payment == 4) { // Безналом
                project.initMasks();
            }
        }, "html");
    });

    $("#form-bonus .button-tip").tooltipster({
        trigger: "click",
        side: ["right", "bottom"],
        content: $("#code-bonus-tooltip")
    });

    $(document).on("change", "[data-cart-cities]", function () {
        var selected = $(this).find("option:selected");

        currentCityId = selected.val();
        currentCityName = selected.text();

        project.reloadMap("#cart-offices", "#cart-offices-template");
    });

});

$(function () {

    var productsCount = $("#cart-list .list-product-cart-item").length;

    $("#cart-list").on("click", ".input-number-control.plus", function () {
        /*логика*/
    });

    $("#cart-list").on("click", ".input-number-control.minus", function () {
        /*логика*/
    });

    $("#cart-list").on("click", "[data-cart-delete]", function () {
        /*логика*/

        /*отображение*/
        var row = $(this).parent(".list-product-cart-item");

        row.fadeOut(300, function () {
            row.remove();
            productsCount--;

            if (productsCount <= 0) {
                $("#form-cart").remove();
                $("#cart-summary").remove();
                $("#cart-list").html("Корзина пуста");
            }
        });
    });

});

$(function () {

    $("#form-promo").validate({
        submitHandler: function (form) {
            form = $(form);

            var button = form.find("button[type=submit]");
            var input = form.find("input");

            var data = {};

            button.addClass("loading");

            $.post("/post/", data, function (result) {
                if (!result.success) {
                    button.removeClass("loading");
                } else {
                    button.removeClass("loading").addClass("success");
                    input.attr("readonly", "readonly");
                }
            }, "json");
        }
    });

    $("#form-bonus").validate({
        submitHandler: function (form) {
            form = $(form);

            var button = form.find("button[type=submit]");
            var input = form.find("input");

            var data = {};

            button.addClass("loading");

            $.post("/post/", data, function (result) {
                if (!result.success) {
                    button.removeClass("loading");
                } else {
                    button.removeClass("loading").addClass("success");
                    input.attr("readonly", "readonly");
                }
            }, "json");
        }
    });

    $("#form-cart").validate({
        submitHandler: function (form) {
            form = $(form);

            form.submit();
        }
    });

});