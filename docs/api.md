# browser

[src/js/browser.js:8-51](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/browser.js#L8-L51 "Source code on GitHub")

Functions for browser

# geo

[src/js/geo.js:7-24](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/geo.js#L7-L24 "Source code on GitHub")

Functions for Geo

## getDistance

[src/js/geo.js:17-23](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/geo.js#L17-L23 "Source code on GitHub")

Get the distance of two points

**Parameters**

-   `lat1` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** latitude of point one
-   `lng1` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** longitude of point one
-   `lat2` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** latitude of point two
-   `lng2` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** longitude of point two

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** distance

# isNullOrEmpty

[src/js/others.js:9-11](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/others.js#L9-L11 "Source code on GitHub")

**Parameters**

-   `value` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** input

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** if input value is null or empty

# appendParams

[src/js/others.js:19-54](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/others.js#L19-L54 "Source code on GitHub")

Append params to an url

**Parameters**

-   `url` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** source url
-   `params` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** params to append, each param is an object, eg: {name:'Monkey', age:'3'}, param will be removed if value is null or empty string.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** result url

# mvcJump

[src/js/others.js:62-64](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/others.js#L62-L64 "Source code on GitHub")

Jump to a page using .net mvc

**Parameters**

-   `controller` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** controller name
-   `action` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** action name
-   `params` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** params to append, each param is an object, eg: {key:'name', value:'Monkey'}

# getWxAuthRedirectUrl

[src/js/others.js:74-77](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/others.js#L74-L77 "Source code on GitHub")

Get Weixin authorize redirect url

**Parameters**

-   `appid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 公众号的唯一标识
-   `url` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 授权后重定向的回调链接地址（无需urlencode）
-   `scope` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
-   `state` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** redirect url

# getUrlParamValue

[src/js/others.js:84-98](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/others.js#L84-L98 "Source code on GitHub")

Get the value of a url param

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** key of the param

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** value of the param

# storage

[src/js/others.js:103-144](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/others.js#L103-L144 "Source code on GitHub")

Storage data using localStorage

## get

[src/js/others.js:110-119](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/others.js#L110-L119 "Source code on GitHub")

Get data

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** key of the data
-   `needParse` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** the result will be parsed if this is set true

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** result

## set

[src/js/others.js:126-133](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/others.js#L126-L133 "Source code on GitHub")

Set data

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** key of the data
-   `value` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** value of the data

## remove

[src/js/others.js:139-143](https://github.com/MonkeyRun/monkey-run.js/blob/288caf8fc388d376ccaca106e15fcc35293e999d/src/js/others.js#L139-L143 "Source code on GitHub")

Remove data

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** key of the data
