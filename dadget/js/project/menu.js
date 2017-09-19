/**
 * Переключатель меню
 */

(function ($) {

    var Menu = function () {
        this.$activeMenu = null;
        this.$activeToggle = null;
        this.$activeOverlay = null;
        this.active = null;

        this.bind();
    };

    Menu.prototype.bind = function () {
        var self = this;

        $("[data-menu-toggle]").on("click", function () {
            self.open($(this).attr("data-menu-toggle"));
        });
    };

    Menu.prototype.open = function (target) {
        if (this.active == target) {
            this.close();
        } else {
            this.close();

            this.$activeMenu = $("[data-menu=" + target + "]");
            this.$activeToggle = $("[data-menu-toggle=" + target + "]");
            this.$activeOverlay = $("[data-menu-overlay=" + target + "]");
            this.active = target;

            this.$activeMenu.addClass("active");
            this.$activeToggle.addClass("active");
            this.$activeOverlay.addClass("active").stop(true, false).fadeIn(300);

            var menu = this;

            this.$activeOverlay.on("click", function () {
                menu.close();
            });
        }
    };

    Menu.prototype.close = function () {
        if (this.active) {
            this.$activeMenu.removeClass("active");
            this.$activeToggle.removeClass("active");
            this.$activeOverlay.removeClass("active").stop(true, false).fadeOut(300);
            this.$activeMenu = null;
            this.$activeToggle = null;
            this.active = null;
        }
    };

    project.menu = new Menu();

})(jQuery);