# `postProcess`

Takes an array of JavaScript functions which ReSpec then runs in order. Each function is called with the ReSpec config object (i.e., the `var respecConfig` object, plus some additional internal data), the reference to the DOM Document element and a [utils](./extension-utils-object) object.

The following examples shows two functions run in order after processing.

```js "example": "Run two functions in order after processing."
function doThing(config, doc, utils){...}
function doOtherThing(config, doc, utils){...}

var respecConfig = {
  // After processing, run the following
  postProcess: [doThing, doOtherThing]
}
```

Note: there are no special requirements or "best practices" for how you process HTML either before or after ReSpec has finished doing its thing. Once ReSpec is finished processing the document, it stops running and you a free to do whatever you like to your document. Having said that, you should follow web development best practices for Web Development when manipulating any generated document (i.e., "it's just HTML, JS, and CSS").
