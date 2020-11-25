# `preProcess`

Expects an array of JavaScript functions. ReSpec invokes these functions in order before any other processing on the HTML occurs. The function’s signature includes a reference to the config object (i.e., the initial configuration object in the ReSpec source, plus some additional internal data) and the reference to the DOM Document element.

```js "example": "Run two functions in order before processing."
function doThing(config, document){...}
function doOtherThing(config, document){...}

var respecConfig = {
  // Before processing, run the following
  preProcess: [doThing, doOtherThing]
}
```
