# geo

[src/js/geo.js:7-24](https://github.com/Monkey-Run/monkey-run.js/blob/8399825eb1b11cdedb5d2aafce151775e4c3a903/src/js/geo.js#L7-L24 "Source code on GitHub")

Functions for Geo

## getDistance

[src/js/geo.js:17-23](https://github.com/Monkey-Run/monkey-run.js/blob/8399825eb1b11cdedb5d2aafce151775e4c3a903/src/js/geo.js#L17-L23 "Source code on GitHub")

Get the distance of two points

**Parameters**

-   `lat1` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** latitude of point one
-   `lng1` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** longitude of point one
-   `lat2` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** latitude of point two
-   `lng2` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** longitude of point two

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** distance

# appendParams

[src/js/others.js:10-35](https://github.com/Monkey-Run/monkey-run.js/blob/8399825eb1b11cdedb5d2aafce151775e4c3a903/src/js/others.js#L10-L35 "Source code on GitHub")

Append params to an url

**Parameters**

-   `url` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** source url
-   `params` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** params to append, each param is an object, eg: {key:'name', value:'Monkey'}

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** result url

# mvcJump

[src/js/others.js:43-45](https://github.com/Monkey-Run/monkey-run.js/blob/8399825eb1b11cdedb5d2aafce151775e4c3a903/src/js/others.js#L43-L45 "Source code on GitHub")

Jump to a page using .net mvc

**Parameters**

-   `controller` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** controller name
-   `action` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** action name
-   `params` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** params to append, each param is an object, eg: {key:'name', value:'Monkey'}

# storage

[src/js/others.js:50-94](https://github.com/Monkey-Run/monkey-run.js/blob/8399825eb1b11cdedb5d2aafce151775e4c3a903/src/js/others.js#L50-L94 "Source code on GitHub")

Storage data using localStorage

## get

[src/js/others.js:57-67](https://github.com/Monkey-Run/monkey-run.js/blob/8399825eb1b11cdedb5d2aafce151775e4c3a903/src/js/others.js#L57-L67 "Source code on GitHub")

Get data

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** key of the data
-   `needParse` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** the result will be parsed if this is set true

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** result

## set

[src/js/others.js:74-82](https://github.com/Monkey-Run/monkey-run.js/blob/8399825eb1b11cdedb5d2aafce151775e4c3a903/src/js/others.js#L74-L82 "Source code on GitHub")

Set data

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** key of the data
-   `value` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** value of the data

## remove

[src/js/others.js:88-93](https://github.com/Monkey-Run/monkey-run.js/blob/8399825eb1b11cdedb5d2aafce151775e4c3a903/src/js/others.js#L88-L93 "Source code on GitHub")

Remove data

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** key of the data
