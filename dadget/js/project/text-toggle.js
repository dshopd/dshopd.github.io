/**
 * Переключатель текста
 */

(function ($) {

    var options = {
        selector: "[data-text-cut]",
        height: 50,
        speed: 200,
        easing: "linear",
        childrenClass: ".list-question-item",
        textClass: ".list-item-text",
        toggleClass: ".list-item-more",
        textExpand: $(this.selector).data("text-expand"),
        textCollapse: $(this.selector).data("text-collapse")
    };

    $("[data-text-cut]").each(function(){
        var container = $(this);
        var items = container.find(".list-question-item");
        var textExpand = container.data("text-expand");
        var textCollapse = container.data("text-collapse")

        items.each(function(){
            var item = $(this);
            var text = item.find(".list-item-text").eq(0);
            var height = text.height();

            if (height >= 50) {
                text
                    .addClass("cutted")
                    .height(50)
                    .data("heightBase", height)
                    .data("heightCutted", 50);

                var toggleContainer = $("<div/>").addClass(".list-item-more");
                var toggle = $('<button class="button button-first"></button>')
                    .text(textExpand)
                    .appendTo(toggleContainer);

                toggleContainer.insertAfter(text);
            }
        });
    });

    /*$(options.selector).each(function () {
        var container = $(this),
            children = $(options.childrenClass, container);

        children.each(function () {
            var item = $(this),
                text = $(options.textClass, item).eq(0),
                height = text.height();

            if (height >= options.height) {
                text
                    .addClass("cutted")
                    .height(options.height)
                    .data("heightBase", height)
                    .data("heightCut", options.height);

                var toggleContainer = $("<div/>").addClass(options.toggleClass);
                var toggle = $('<button class="button button-first"></button>')
                    .text(options.textExpand)
                    .appendTo(toggleContainer);

                toggleContainer.insertAfter(text);
            }
        });
    });*/

    $(options.selector).on("click", options.toggleClass, function () {
        var toggle = $(this),
            target = toggle.prev(),
            cutted = target.hasClass("cutted");

        if (cutted) {
            toggle.html('<i class="icon icon-collapse-s"></i>&nbsp;Свернуть');
            target.removeClass("cutted").animate({"height": target.data("heightBase")}, options.speed, options.easing);
        } else {
            toggle.html('<i class="icon icon-expand-s"></i>&nbsp;Развернуть');
            target.addClass("cutted").animate({"height": target.data("heightCut")}, options.speed, options.easing);
        }
    });

})(jQuery);