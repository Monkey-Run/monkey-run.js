(function (MonkeyRun) {
    'use strict';

    /**
     * Append params to an url
     * @param {string} url source url
     * @param {Array<Object>} params params to append, each param is an object, eg: {key:'name', value:'Monkey'}
     * @returns {string} result url
     */
    var appendParams = function (url, params) {
        if (params && params.length) {
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
        window.location.href = appendParams(window.location.protocol + '//' + window.location.host + '/' + controller + '/' + action, params);
    };

    /**
     * Get Weixin authorize redirect url
     * @param {string} appid 公众号的唯一标识
     * @param {string} url 授权后重定向的回调链接地址（无需urlencode）
     * @param {string} scope 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
     * @param {string} state 重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
     * @returns {string} redirect url
     */
    var getWxAuthRedirectUrl = function (appid, url, scope, state) {
        var result = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + encodeURIComponent(url) + '&response_type=code&scope=' + scope + '&state=' + state + '#wechat_redirect';
        return result;
    };

    /**
     * Get the value of a url param
     * @param {string} key key of the param
     * @returns {string} value of the param
     */
    var getUrlParamValue = function (key) {
        var args = {};
        var query = window.location.search.substring(1);
        var pairs = query.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pos = pairs[i].indexOf('=');
            if (pos === -1) {
                continue;
            }
            var argname = pairs[i].substring(0, pos);
            var value = pairs[i].substring(pos + 1);
            args[argname] = decodeURIComponent(value);
        }
        return args[key];
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
            if (key && window.localStorage) {
                var value = window.localStorage.getItem(key);
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
            if (key && value && window.localStorage) {
                if (typeof value !== 'string') {
                    value = JSON.stringify(value);
                }
                window.localStorage.setItem(key, value);
            }
        },

        /**
         * Remove data
         * @param {string} key key of the data
         */
        remove: function (key) {
            if (key && window.localStorage) {
                window.localStorage.removeItem(key);
            }
        }
    };

    MonkeyRun.appendParams = appendParams;
    MonkeyRun.getWxAuthRedirectUrl = getWxAuthRedirectUrl;
    MonkeyRun.getUrlParamValue = getUrlParamValue;
    MonkeyRun.mvcJump = mvcJump;
    MonkeyRun.storage = storage;

} (MonkeyRun));
