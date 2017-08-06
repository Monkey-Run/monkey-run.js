(function (MonkeyRun) {
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
        options.type = (options.type || "GET").toUpperCase();
        options.dataType = options.dataType || "json";
        var params = formatParams(options.data);

        //创建 - 非IE6 - 第一步
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        } else { //IE6及其以下版本浏览器
            var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        //接收 - 第三步
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    options.success && options.success(xhr.responseText, xhr.responseXML);
                } else {
                    options.fail && options.fail(status);
                }
            }
        }

        //连接 和 发送 - 第二步
        if (options.type == "GET") {
            xhr.open("GET", options.url + "?" + params, true);
            xhr.send(null);
        } else if (options.type == "POST") {
            xhr.open("POST", options.url, true);
            //设置表单提交时的内容类型
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }
    }

    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        }
        return arr.join("&");
    }

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
    MonkeyRun.ajax = ajax;
}(MonkeyRun));