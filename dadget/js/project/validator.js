/**
 * i18n для jquery.validate
 */

(function ($) {

    $.extend($.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: "",
        extension: "",
        maxlength: $.validator.format(""),
        minlength: $.validator.format(""),
        rangelength: $.validator.format(""),
        range: $.validator.format(""),
        max: $.validator.format(""),
        min: $.validator.format("")
    });

})(jQuery);