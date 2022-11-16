(function () {
    "use strict";

    angular.module("rpiLed").directive("rpiRgb", ["$http", "rpiGalleria", function ($http, rpiGalleria) {
        return {
            restrict: "E",
            replace: "true",
            scope: {},
            templateUrl: "angular/directives/rgb.tpl.html",
            link: function () {
                rpiGalleria.loadGalleria("rgb", "requirements", false, false);
                rpiGalleria.loadGalleria("rgb", "mosfet", false, false);
                rpiGalleria.loadGalleria("rgb", "led", false, false);
                rpiGalleria.loadGalleria("rgb", "gpio", true, true);
                rpiGalleria.loadGalleria("rgb", "pi", false, false);
                rpiGalleria.loadGalleria("rgb", "power", false, false);
                rpiGalleria.loadGalleria("rgb", "finished", false, false);
                rpiGalleria.loadGalleria("rgb", "testing", false, false);
            }
        }
    }]);
})();