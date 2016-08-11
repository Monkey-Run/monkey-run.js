(function (MonkeyRun) {
    'use strict';

    /**
    * Functions for browser
    */

    var browser = {

        userAgent: navigator.userAgent,

        webkitVersion: (function () {
            var u = navigator.userAgent;
            var matchIndex = u.indexOf('AppleWebKit/');
            if (matchIndex > -1) {
                var num = u.substring(matchIndex + 12, matchIndex + 18).replace(' ', '');
                return parseFloat(num);
            }
            return '';
        })(),

        detection: (function () {
            var u = navigator.userAgent;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                weixin: u.indexOf('MicroMessenger') > -1,
                QQBrowser: u.indexOf('MQQBrowser') > -1
            };
        })(),

        language: (navigator.browserLanguage || navigator.language).toLowerCase(),

        screen: (function () {
            var width = document.documentElement.clientWidth || document.body.clientWidth;
            var height = document.documentElement.clientHeight || document.body.clientHeight;
            var ratio = width / height;
            return {
                width: width,
                height: height,
                ratio: ratio
            };
        })()
    }

    MonkeyRun.browser = browser;

} (MonkeyRun));
