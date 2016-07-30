(function (Global) {
    'use strict';

    var monkeyrun = {
        version: '0.1.0'
    };

    Global.MonkeyRun = monkeyrun;

} (this));

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

(function (MonkeyRun) {
    'use strict';

    var appendParams = function (url, params) {
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
    };

    MonkeyRun.appendParams = appendParams;

} (MonkeyRun));
