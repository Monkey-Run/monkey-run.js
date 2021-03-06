﻿(function (MonkeyRun) {
    'use strict';

    /**
     * 
     * @param {Object} value input
     * @returns {boolean} if input value is null or empty
     */
    function isNullOrEmpty(value) {
        return value === undefined || value === null || value === '';
    }

    /**
     * Append params to an url
     * @param {string} url source url
     * @param {Array<Object>} params params to append, each param is an object, eg: {name:'Monkey', age:'3'}, param will be removed if value is null or empty string.
     * @returns {string} result url
     */
    function appendParams(url, params) {
        if (params) {
            var baseWithSearch = url.split('#')[0];
            var hash = url.split('#')[1];
            for (var key in params) {
                var attrValue = params[key];
                var newParam = key + "=" + attrValue;
                if (baseWithSearch.indexOf('?') > 0) {
                    var oldParamReg = new RegExp(key + '=[-%.!~*\'\(\)\\w]*', 'g');

                    if (oldParamReg.test(baseWithSearch)) {
                        if (!isNullOrEmpty(attrValue)) {
                            baseWithSearch = baseWithSearch.replace(oldParamReg, newParam);
                        } else {
                            var removeParamReg = new RegExp('[?&]' + key + '=[-%.!~*\'\(\)\\w]*', 'g');
                            baseWithSearch = baseWithSearch.replace(removeParamReg, '');
                        }
                    } else {
                        if (!isNullOrEmpty(attrValue)) {
                            baseWithSearch += "&" + newParam;
                        }
                    }
                } else if (!isNullOrEmpty(attrValue)) {
                    baseWithSearch += "?" + newParam;
                }
            }

            if (hash) {
                url = baseWithSearch + '#' + hash;
            } else {
                url = baseWithSearch;
            }
        }
        return url;
    }

    /**
     * Jump to a page using .net mvc
     * @param {string} controller controller name
     * @param {string} action action name
     * @param {Array<Object>} params params to append, each param is an object, eg: {key:'name', value:'Monkey'}
     */
    function mvcJump(controller, action, params) {
        window.location.href = appendParams(window.location.protocol + '//' + window.location.host + '/' + controller + '/' + action, params);
    }

    /**
     * Get Weixin authorize redirect url
     * @param {string} appid 公众号的唯一标识
     * @param {string} url 授权后重定向的回调链接地址（无需urlencode）
     * @param {string} scope 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
     * @param {string} state 重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
     * @returns {string} redirect url
     */
    function getWxAuthRedirectUrl(appid, url, scope, state) {
        var result = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + encodeURIComponent(url) + '&response_type=code&scope=' + scope + '&state=' + state + '#wechat_redirect';
        return result;
    }

    /**
     * Get the value of a url param
     * @param {string} key of the param
     * @returns {string} value of the param
     */
    function getUrlParamValue(key) {
        var args = {};
        var query = window.location.search.substring(1);
        var pairs = query.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pos = pairs[i].indexOf('=');
            if (pos === -1) {
                continue;
            }
            var argname = pairs[i].substring(0, pos).toLowerCase();
            var value = pairs[i].substring(pos + 1);
            args[argname] = decodeURIComponent(value);
        }
        return args[key.toLowerCase()];
    }

    /**
     * Ajax
     * @param {options} ajax options
     */
    function ajax(options) {
        options = options || {};
        options.type = (options.type || 'GET').toUpperCase();
        options.contentType = options.contentType || 'application/json';
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        } else {
            var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xhr.responseType = 'json';

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    options.success && options.success(xhr.response);
                } else {
                    options.fail && options.fail(xhr.response);
                }
            }
        }

        if (options.type == 'GET') {
            var url = appendParams(options.url, options.data);
            xhr.open('GET', url, true);
            xhr.send(null);
        } else if (options.type === 'POST') {
            xhr.open('POST', options.url, true);
            xhr.setRequestHeader('Content-Type', options.contentType);
            if (options.contentType === 'application/json') {
                xhr.send(JSON.stringify(options.data));
            } else {
                xhr.send(formatFormParams(options.data));
            }
        }
    }

    function formatFormParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        return arr.join('&');
    }

    MonkeyRun.appendParams = appendParams;
    MonkeyRun.getWxAuthRedirectUrl = getWxAuthRedirectUrl;
    MonkeyRun.getUrlParamValue = getUrlParamValue;
    MonkeyRun.mvcJump = mvcJump;
    MonkeyRun.ajax = ajax;
}(MonkeyRun));
