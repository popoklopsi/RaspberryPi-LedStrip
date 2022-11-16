(function () {
    "use strict";

    angular.module("rpiLed").directive("rpiHeader", [function () {
        return {
            restrict: "E",
            replace: "true",
            scope: {translationTitle: "@", translationSubtitle: "@", image: "@"},
            templateUrl: "angular/directives/header.tpl.html"
        }
    }]);
})();