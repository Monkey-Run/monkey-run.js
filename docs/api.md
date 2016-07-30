# geo

[src/js/geo.js:7-24](https://github.com/Monkey-Run/monkey-run.js/blob/96a3a1e1bab37ebc15e7f47e36be82bb6e267c12/src/js/geo.js#L7-L24 "Source code on GitHub")

Functions for Geo

## getDistance

[src/js/geo.js:17-23](https://github.com/Monkey-Run/monkey-run.js/blob/96a3a1e1bab37ebc15e7f47e36be82bb6e267c12/src/js/geo.js#L17-L23 "Source code on GitHub")

Get the distance of two points

**Parameters**

-   `lat1` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** latitude of point one
-   `lng1` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** longitude of point one
-   `lat2` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** latitude of point two
-   `lng2` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** longitude of point two

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** distance

# location

[src/js/location.js:7-51](https://github.com/Monkey-Run/monkey-run.js/blob/96a3a1e1bab37ebc15e7f47e36be82bb6e267c12/src/js/location.js#L7-L51 "Source code on GitHub")

Functions for Window.location

## appendParams

[src/js/location.js:15-40](https://github.com/Monkey-Run/monkey-run.js/blob/96a3a1e1bab37ebc15e7f47e36be82bb6e267c12/src/js/location.js#L15-L40 "Source code on GitHub")

Append params to an url

**Parameters**

-   `url` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** source url
-   `params` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** params to append, each param is an object, eg: {key:'name', value:'Monkey'}

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** result url

## mvcJump

[src/js/location.js:48-50](https://github.com/Monkey-Run/monkey-run.js/blob/96a3a1e1bab37ebc15e7f47e36be82bb6e267c12/src/js/location.js#L48-L50 "Source code on GitHub")

Jump to a page using .net mvc

**Parameters**

-   `controller` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** controller name
-   `action` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** action name
-   `params` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** params to append, each param is an object, eg: {key:'name', value:'Monkey'}
