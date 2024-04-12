# `preProcess`

Expects an array of JavaScript functions. ReSpec invokes these functions in order before any other processing on the HTML occurs. The function’s signature includes a reference to the config object (i.e., the initial configuration object in the ReSpec source, plus some additional internal data), the reference to the DOM Document element and a [utils](./extension-utils-object) object.

```js "example": "Run two functions in order before processing."
function doThing(config, document, utils){...}
function doOtherThing(config, document, utils){...}

var respecConfig = {
  // Before processing, run the following
  preProcess: [doThing, doOtherThing]
}
```
