(function (Global) {
    'use strict';

    var monkeyrun = {
        version: '0.1.0'
    };

    Global.MonkeyRun = monkeyrun;

} (this));

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

(function (MonkeyRun) {
    'use strict';

    /**
    * Functions for Window.location
    */
    var location = {

        /**
         * Append params to an url
         * @param {string} url source url
         * @param {Array<Object>} params params to append, each param is an object, eg: {key:'name', value:'Monkey'}
         * @returns {string} result url
         */
        appendParams: function (url, params) {
            var baseWithSearch = url.split('#')[0];
            var hash = url.split('#')[1];
            for (var i = 0; i < params.length; i++) {
                if (params[i].value !== undefined) {
                    var newParam = params[i].key + "=" + params[i].value;
                    if (baseWithSearch.indexOf('?') > 0) {
                        var oldParamReg = new RegExp(params[i].key + '=[-%.!~*\'\(\)\\w]*', 'g');

                        if (oldParamReg.test(baseWithSearch)) {
                            baseWithSearch = baseWithSearch.replace(oldParamReg, newParam);
                        } else {
                            baseWithSearch += "&" + newParam;
                        }
                    } else {
                        baseWithSearch += "?" + newParam;
                    }
                }
            }
            if (hash) {
                url = baseWithSearch + '#' + hash;
            } else {
                url = baseWithSearch;
            }
            return url;
        },

        /**
         * Jump to a page using .net mvc
         * @param {string} controller controller name
         * @param {string} action action name
         * @param {Array<Object>} params params to append, each param is an object, eg: {key:'name', value:'Monkey'}
         */
        mvcJump: function (controller, action, params) {
            Window.location.href = location.appendParams(Window.location.protocol + '//' + Window.location.host + '/' + controller + '/' + action, params);
        }
    };

    MonkeyRun.location = location;

} (MonkeyRun));
