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
