(function () {
    "use strict";

    angular.module("rpiLed").directive("socialButtons", ["$window", function ($window) {
        return {
            restrict: "E",
            replace: "true",
            scope: {},
            templateUrl: "angular/directives/social.tpl.html",
            link: function ($scope) {
                $scope.url = $window.location.href;

                var js, fjs = document.getElementsByTagName("script")[0];

                if (document.getElementById("facebook-jssdk")) {
                    return;
                }

                js = document.createElement("script");
                js.id = "facebook-jssdk";
                js.src = "//connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.3";
                fjs.parentNode.insertBefore(js, fjs);

                fjs = document.getElementsByTagName("script")[0];
                var p = /^http:/.test(document.location) ? 'http' : 'https';

                if (!document.getElementById("twitter-wjs")) {
                    js = document.createElement("script");
                    js.id = "twitter-wjs";
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }

                var po = document.createElement("script");
                po.type = "text/javascript";
                po.async = true;
                po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s);
            }
        }
    }]);
})();