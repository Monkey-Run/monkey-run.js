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
