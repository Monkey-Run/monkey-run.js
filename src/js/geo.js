(function (MonkeyRun) {
    'use strict';

    /**
    * Functions for Geo
    */
    var geo = {

        /**
         * Get the distance of two points
         * @param {number} lat1 latitude of point one
         * @param {number} lng1 longitude of point one
         * @param {number} lat2 latitude of point two
         * @param {number} lng2 longitude of point two
         * @returns {number} distance
         */
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
