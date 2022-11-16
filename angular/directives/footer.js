(function () {
    "use strict";

    angular.module("rpiLed").directive("rpiFooter", [function () {
        return {
            restrict: "E",
            replace: "true",
            templateUrl: "angular/directives/footer.tpl.html",
            scope: {},
            link: function () {
                var dsq = document.createElement("script");

                dsq.type = "text/javascript";
                dsq.async = true;
                dsq.src = "//raspberrypiledstrip.disqus.com/embed.js";

                (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(dsq);
            }
        }
    }]);
})();