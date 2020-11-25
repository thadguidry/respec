# `postProcess`

Takes an array of JavaScript functions. The functions are invoked in the order after ReSpec has processed the HTML source. The function’s signature includes a reference to the config object (i.e., the initial configuration object in the ReSpec source, plus some additional internal data) and the reference to the DOM Document element.

The following examples shows two functions run in order after processing.

```js "example": "Run two functions in order after processing."
function doThing(config, document){...}
function doOtherThing(config, document){...}

var respecConfig = {
  // After processing, run the following
  postProcess: [doThing, doOtherThing]
}
```
