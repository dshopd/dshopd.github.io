(function () {

    var page = window.location.pathname.match(/[a-zA-Z-_\d]+\.html/) || "index.html",
        menu = document.querySelectorAll(".menu-highlighted");

    if (menu) {
        for (var i = menu.length - 1; i >= 0; i--) {
            var current = menu[i].querySelectorAll("a[href='" + page + "']");

            if (current.length) {
                current[0].classList.add("active");
            }
        }
    }

})();
