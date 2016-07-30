(function (MonkeyRun) {
    'use strict';

    var geo = {
        getDistance: function (lat1, lng1, lat2, lng2) {
            var b = Math.PI / 180;
            var c = Math.sin((lat2 - lat1) * b / 2);
            var d = Math.sin((lng2 - lng1) * b / 2);
            var a = c * c + d * d * Math.cos(lat1 * b) * Math.cos(lat2 * b);
            return 12756274 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        },
    }

    MonkeyRun.geo = geo;

} (MonkeyRun));
