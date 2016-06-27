Expects an array of JavaScript functions. ReSpec invokes the these functions in order before any other processing on the HTML occurs. As ReSpec includes jQuery, the $ variable, bound to a jQuery instance, is available from the global scope (i.e., window.$).

**Note:** We strongly discourage the use of jQuery. We are trying to eliminate it from ReSpec and encourage people to stop using it entirely. In modern browsers, jQuery is no longer a nessesary for cross-browser interoperability. Additionally, modern DOM APIs are now good enough that jQuery should not be needed for manipulating or traversing DOM Nodes. ﻿

### Examples 

```JS
function doThing(){}
function doOtherThing(){}

var respecConfig = {
  // Before processing, run the following
  preProcess: [doThing, doOtherThing]
}
```