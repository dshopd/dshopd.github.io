var Project = function () {
    this.menu = null;
    this.popup = null;
    this.map = null;

    this.placemarkIcon = {
        iconLayout: "default#image",
        iconImageHref: "images/placemark.png",
        iconImageSize: [42, 42]
    };
};

Project.prototype.initSelects = function () {
    if ($.prototype.select2) {
        var selectCities = $("select[data-cities]");

        selectCities.select2({
            ajax: {
                url: "cities.json",
                dataType: "json",
                processResults: function (data) {
                    return {
                        results: data
                    };
                }
            }
        });

        selectCities.each(function () {
            var select = $(this),
                select2 = select.data("select2"),
                headerPlaceholder = select.data("header");

            var header = $("<div class=\"heading\">" + headerPlaceholder + "</div>"),
                close = $("<span class=\"close\" title=\"Закрыть\" data-select-close></span>");

            close.data("select", select);

            select2.$dropdown.find(".select2-dropdown").prepend(header);
            select2.$dropdown.find(".select2-dropdown").append(close);
        });

        $(document).on("click", "[data-select-close]", function () {
            $(this).data("select").select2("close");
        });
    }
}

Project.prototype.initAutocomplete = function () {
    if ($.prototype.autocomplete) {
        $("#cities-autocomplete").autocomplete({
            appendTo: "#cities-autocomplete-results",
            source: function (request, response) {
                $.getJSON(
                    "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
                    function (data) {
                        response(data);
                    }
                );
            },
            minLength: 3,
            delay: 100
        });
    }
}

Project.prototype.initMap = function (idMap, search) {
    this.map = {};

    var map = this.map;
    var placemarkIcon = this.placemarkIcon;

    ymaps.ready(function () {

        map.offices = new ymaps.GeoObjectCollection();
        map.region = ymaps.geocode(currentCityName);
        map.region.then(function (res) {
            map.map = new ymaps.Map(idMap, {
                center: res.geoObjects.get(0).geometry.getCoordinates(),
                zoom: 10,
                controls: []
            });
            map.map.geoObjects.add(map.offices);
            map.map.behaviors.disable("scrollZoom");
            map.map.controls.add("typeSelector");
            map.map.controls.add("zoomControl");
            map.map.controls.add("routeEditor");
            map.map.controls.add("trafficControl");

            if (search) {
                var searchControl = new ymaps.control.SearchControl({
                    useMapBounds: true,
                });
                map.map.controls.add(searchControl);
            }
        });

        $.get("offices.json", {/*params*/}, function (result) {
            var offices = result[currentCityId];

            for (var i = 0; i < offices.length; i++) {
                var office = offices[i];
                var geocoder = ymaps.geocode(currentCityName + ", " + offices[i].address);

                geocoder.then(function (res) {
                    console.log(office);
                    var t = office;
                    var placemark = new ymaps.Placemark(res.geoObjects.get(0).geometry.getCoordinates(), {
                        balloonContentHeader: t.name,
                        balloonContentBody: t.address + "<br>" + t.metro,
                        balloonContentFooter: t.phone + "<br>" + t.worktime_weekdays + "<br>" + t.worktime_weekends
                    }, placemarkIcon);
                    map.offices.add(placemark);
                });
            }
        }, "json");

    });
}

Project.prototype.reloadMap = function (idList, idListTemplate) {
    var map = this.map;
    var placemarkIcon = this.placemarkIcon;

    ymaps.ready(function () {
        $.get("offices.json", {/*params*/}, function (result) {
            var offices = result[currentCityId];
            var list = $(idList).html("");
            var listHtml = [];
            var listTemplate = $(idListTemplate).html();

            Mustache.parse(listTemplate);

            map.offices.removeAll();

            for (var i = 0; i < offices.length; i++) {
                var office = offices[i];
                var geocoder = ymaps.geocode(currentCityName + ", " + office.address);

                geocoder.then(function (res) {
                    var placemark = new ymaps.Placemark(res.geoObjects.get(0).geometry.getCoordinates(), {
                        balloonContentHeader: office.name,
                        balloonContentBody: office.address + "<br>" + office.metro,
                        balloonContentFooter: office.phone + "<br>" + office.worktime_weekdays + "<br>" + office.worktime_weekends
                    }, placemarkIcon);
                    map.offices.add(placemark);
                });

                listHtml.push(Mustache.render(listTemplate, office));
            }

            list.append(listHtml);

            map.region = ymaps.geocode(currentCityName);
            map.region.then(function (res) {
                map.map.setCenter(res.geoObjects.get(0).geometry.getCoordinates());
            });
        }, "json");
    });
}

Project.prototype.initMasks = function () {
    $(document).ready(function ($) {
        if ($.prototype.mask && $("[data-mask]").length) {
            $("[data-mask=zip]").mask("999999");
            $("[data-mask=inn]").mask("9999999999");
            $("[data-mask=kpp]").mask("999999999");
            $("[data-mask=rs]").mask("99999999999999999999");
            $("[data-mask=ks]").mask("99999999999999999999");
            $("[data-mask=bik]").mask("999999999");
            $("[data-mask=okpo]").mask("99999999");
            $("[data-mask=phone]").mask("8 999 999-99-99");
        }
    });
}

/**
 * Случайное целое число
 * @param min Включая
 * @param max Включая
 * @returns {integer}
 */
Project.prototype.getRandomInt = function (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

/**
 * Разбивка числа на разряды (1 000 000 вместо 1000000)
 * @param text Число
 * @returns {string}
 */
Project.prototype.splitDigits = function (text) {
    return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
 * Возвращает подходящее для value слово во множественном числе
 * @param {int} value Значение
 * @param {string} text1 Одно значени-Е
 * @param {string} text2 Два значени-Я
 * @param {string} text5 Пять значени-Й
 * @returns {string}
 */
Project.prototype.getRussianPlural = function (value, text1, text2, text5) {
    var text = text1;
    var mod10 = value % 10;

    if (mod10 == 0 || (mod10 >= 5 && mod10 <= 9) || (value >= 11 && value <= 14)) {
        text = text5;
    } else if (mod10 == 1) {
        text = text1;
    } else if (mod10 >= 2 && mod10 <= 4) {
        text = text2;
    }

    return text;
}

var project = new Project();