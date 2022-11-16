(function () {
    "use strict";

    angular.module("rpiLed").directive("rpiNavigation", ["$translate", function ($translate) {
        return {
            restrict: "E",
            replace: "true",
            scope: {},
            templateUrl: "angular/directives/navigation.tpl.html",
            link: function ($scope) {
                $scope.switchLanguage = function (language) {
                    $translate.use(language);
                }
            }
        }
    }]);
})();