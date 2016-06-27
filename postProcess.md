Takes an array of JavaScript functions. The functions are invoked in the order after ReSpec has processed the HTML source. As ReSpec includes jQuery, the $ variable, bound to a jQuery instance, is available within each function.

**Note:** We strongly discourage the use of jQuery. We are trying to eliminate it from ReSpec and encourage people to stop using it entirely. In modern browsers, jQuery is no longer a nessesary for cross-browser interoperability. Additionally, modern DOM APIs are now good enough that jQuery should not be needed for manipulating or traversing DOM Nodes. 

### Examples
The following examples shows two functions run in order after processing. 

```JS
function doThing(){}
function doOtherThing(){}

var respecConfig = {
  // After processing, run the following
  postProcess: [doThing, doOtherThing]
}
```