(function () {
    "use strict";

    angular.module("rpiLed").factory("rpiGalleria", ["$http", function ($http) {

        Galleria.ready(function () {
            this.bind("image", function (e) {
                e.imageTarget.alt = e.galleriaData.description;
            });

            this.bind("thumbnail", function (e) {
                e.thumbTarget.alt = e.galleriaData.description;
            });
        });

        return {
            loadGalleria: function (pathPrefix, json, isSingle, isHeight) {
                $http.get("img/json/" + pathPrefix + "/" + json + ".json").success(function (data) {
                    var options = {
                        dataSource: data,
                        imageCrop: "width",
                        fullscreenCrop: false,
                        lightbox: true,
                        showInfo: false,
                        extend: function () {
                            var gallery = this;

                            this.addElement("fscr");
                            this.appendChild("stage", "fscr");

                            var fscr = this.$("fscr").click(function () {
                                gallery.toggleFullscreen();
                            });

                            this.addIdleState(this.get("fscr"), {opacity: 0});
                        }
                    };

                    if (isSingle) {
                        options.showImagenav = false;
                    }

                    if (isHeight) {
                        options.imageCrop = "height";
                    }

                    Galleria.run("." + json, options);
                });
            }
        };
    }]);
})();