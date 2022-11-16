(function () {
    "use strict";

    angular.module("rpiLed").directive("rpiWs2812", ["$http", "rpiGalleria", function ($http, rpiGalleria) {
        return {
            restrict: "E",
            replace: "true",
            scope: {},
            templateUrl: "angular/directives/ws2812.tpl.html",
            link: function () {
                rpiGalleria.loadGalleria("ws2812", "requirements", false, false);
                rpiGalleria.loadGalleria("ws2812", "shifter", false, false);
                rpiGalleria.loadGalleria("ws2812", "led", false, false);
                rpiGalleria.loadGalleria("ws2812", "gpio", true, true);
                rpiGalleria.loadGalleria("ws2812", "pi", false, false);
                rpiGalleria.loadGalleria("ws2812", "power", false, false);
                rpiGalleria.loadGalleria("ws2812", "finished", false, false);
                rpiGalleria.loadGalleria("ws2812", "testing", false, false);
            }
        }
    }]);
})();