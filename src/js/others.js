(function (MonkeyRun) {
    'use strict';

    /**
     * Append params to an url
     * @param {string} url source url
     * @param {Array<Object>} params params to append, each param is an object, eg: {key:'name', value:'Monkey'}
     * @returns {string} result url
     */
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

    /**
     * Jump to a page using .net mvc
     * @param {string} controller controller name
     * @param {string} action action name
     * @param {Array<Object>} params params to append, each param is an object, eg: {key:'name', value:'Monkey'}
     */
    var mvcJump = function (controller, action, params) {
        Window.location.href = location.appendParams(Window.location.protocol + '//' + Window.location.host + '/' + controller + '/' + action, params);
    };

    /**
     * Storage data using localStorage
     */
    var storage = {
        /**
         * Get data
         * @param {string} key key of the data
         * @param {boolean} needParse the result will be parsed if this is set true
         * @returns {Object} result
         */
        get: function (key, needParse) {
            var storage = window.localStorage;
            if (key && storage) {
                var value = storage.getItem(key);
                if (needParse) {
                    value = JSON.parse(value);
                }
                return value;
            }
            return null;
        },

        /**
         * Set data
         * @param {string} key key of the data
         * @param {Object} value value of the data
         */
        set: function (key, value) {
            var storage = window.localStorage;
            if (key && value && storage) {
                if (typeof value !== 'string') {
                    value = JSON.stringify(value);
                }
                storage.setItem(key, value);
            }
        },

        /**
         * Remove data
         * @param {string} key key of the data
         */
        remove: function (key) {
            var storage = window.localStorage;
            if (key && storage) {
                storage.removeItem(key);
            }
        }
    };

    MonkeyRun.appendParams = appendParams;
    MonkeyRun.mvcJump = mvcJump;
    MonkeyRun.storage = storage;

} (MonkeyRun));
