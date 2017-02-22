## ReSpec's architecture  
ReSpec is a very simple application that runs mostly synchronous bits of javascript after a Document loads. These javascript fragments are referred to as "plugins". When a bunch of plugins are combined together, they create a "profile".  

So, for instance, the W3C's profile, located at "[js/profile-w3c-common.js](https://github.com/w3c/respec/blob/develop/js/profile-w3c-common.js)", loads the following plugins (not the full list, just for illustrative purposes): 

  * core/base-runner 
  * core/include-config, 
  * core/style, 
  * w3c/style, 
  * core/markdown, 
  * w3c/headers, 
  * ...   

What each plugin above does doesn't matter, though you can deduce what each does by the name. What matters is that ordering is important - and we mix together W3C plugins and "core" plugins. And that it's these plugins coming together that form a profile, in this case the "W3C profile". Each of the plugins are run only once - and the thing that runs them is the "[core/base-runner](https://github.com/w3c/respec/blob/develop/src/core/base-runner.js)" plugin.   

See  "[js/profile-w3c-common.js](https://github.com/w3c/respec/blob/develop/js/profile-w3c-common.js)" for the actual details of how the profile is set up. But it's essentially: 

1. Load the profile + all the plugins (but don't "run" them yet!).  
1. Wait for the document's "DOMContentLoaded" event to fire.  
1. Once DOM is ready, run each plugin in order, waiting for each plugin to finish.  

## Core Base runner ("core/base-runner.js") 
The first and most important plugin ("[core/base-runner](https://github.com/w3c/respec/blob/develop/src/core/base-runner.js)"), is actually the "brains" of ReSpec: it is the thing that "runs" all other plugins in order.  

Before any plugins are run, however, it adds the following property to the `document` object: 

```JS 
// The following only resolves once all plugins have run 
// and ReSpec has finished doing whatever it needs to do. 
document.respecIsReady; 
``` 

After that, the Base Runner starts looping over an array of given plugins: literally just a call to a `.runAll(arrayOfPlugins)` method. For each plugin, it waits until a plugin has finished doing its work before continuing to the next plugin. It does this by passing in a callback to a plugin, and waiting for that callback to be called.  

Once all the plugins have "run", ReSpec resolves the `respecIsReady` promise on the Document object.   

``` 
document.respecIsReady.then(function(){ 
   console.log("ReSpec has finished processing this document"); 
}); 
``` 

This is potentially useful for scripts that depend on ReSpec's output. They can wait for the promise to settle before doing their own work.  

Alternatively, if you really need to run things immediately before or after ReSpec runs the plugins, you can define `preProcess` or `postProcess` properties on the configuration object. See [`preProcess](preProcess) and [`postProcess`](postProcess) more details and for examples. 

## Plugins 
Plugins are simple ES6 modules that live in the "[src/](https://github.com/w3c/respec/tree/develop/src)" folder. They have two parts: A synchronous initialization, and a optionally "run" method that is called asynchronously. 

A plugin looks like this: 

```JS 
// import things you need
import utils from "core/utils";

// This part runs synchronously and an indeterminate order.  
// do any plugin specific setup here. Note, the document
// can be in an unstable state here - so don't manipulate
// the DOM here! 

// Optionally, export "run" function
//   See below for description of arguments.
export async function run(conf, doc, cb){ 
  // do some DOM work the "doc" with "conf" 
  await someTask();
  //finally call cb()   
  cb(); 
} 
``` 

The exported run method SHOULD have arguments (conf, doc, cb): 

 * conf: is the ReSpec configuration object (`window.respecConfig`) - which the user defined. Be careful not to modify this object.  
 * doc: a reference to the Document on which the plugin will operate - this is _always_ `window.document`. 
 * bc: a callback function, which you should call when the plugin's work is done. Note, eventually, cb() will be deprecated in favor of simply returning a promise. However, right now we use callbacks. 

As shown in the example above, a plugin should use the "conf" object to act on the "doc" in some way. And then call cb() when the work is done.  

**IMPORTANT**: Don't forget to run `npm run babel:build` to make sure your code gets compiled. Compiled plugins end up in the `js/` folder. You can also `npm run babel:watch`.  

### Built-in HTTP server
You can launch a built in HTTP server during development by simply typing: `npm start`.

### Warning users of errors 
If you are creating a plugin that needs to show warnings to a user, you can use the "core/pubsubhub" utility. As the name suggests, this is a simple pub-sub-hub dispatcher. You should use this to dispatch "warn" or "error" messages to a user:  

```JS 
import { pub } from "core/pubsubhub";
export async function run(conf, doc, cb) {
  if (!"something" in conf) {
    pubsubhub.pub("warn", "A string that represents a warning");
  }
  cb();
}
``` 

These "warn" and "error" messages will be picked up by ReSpec's UI (the "pill"), and displayed to the end-user. You should only "error" on things that the user needs to fix to successfully publish their document. Likewise, only warn on things the user SHOULD fix. 

IMPORTANT: Don't show JavaScript errors to the user - as they won't be able to fix these, and they minified JS output will make these messages really unhelpful!