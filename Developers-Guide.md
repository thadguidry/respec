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

See  "js/profile-w3c-common.js" for the actual details of how the profile is set up. But it's essentially: 

1. Load the profile + all the plugins (but don't "run" them yet!).  
1. Wait for the document's "DOMContentLoaded" event to fire.  
1. Once DOM is ready, run each plugin in order, waiting for each plugin to finish.  

## Core Base runner ("core/base-runner.js") 
The first and most important plugin ("core/base-runner"), is actually the "brains" of ReSpec: it is the thing that "runs" all other plugins in order.  

Before any plugins are run, however, it adds the following property to the `document` object: 

```JS 
// The following only resolves once all plugins have run 
// and ReSpec has finished doing whatever it needs to do. 
document.respecIsReady; 
``` 

After that, the Base Runner starts looping over an array of given plugins: literally just a call to a `.runAll(arrayOfPlugins)` method. For each plugin, it waits until a plugin has finished doing its work before continuing to the next plugin. It does this by passing in a callback to a plugin, and waiting for that callback to be called.  

Once all the plugins have "run", ReSpec resolves a `respecIsReady` on the Document object.   

``` 
document.respecIsReady.then(function(){ 
   console.log("ReSpec has finished processing this document"); 
}); 
``` 

This is potentially useful for scripts that depend on ReSpec's output. They can wait for the promise to settle before doing their own work.  

Alternatively, if you really need to run things immediately before or after ReSpec runs the plugins, you can define `preProcess` or `postProcess` properties on the configuration object. See preProcess and postProcess more details and for examples. 

https://github.com/w3c/respec/wiki/preProcess         
https://github.com/w3c/respec/wiki/postProcess 

## Plugins 
Plugins are simple AMD modules that have two parts. A synchronous initialization, and a potentially asynchronous "run" part. A plugin looks like this: 

```JS 
define( 
  [], // Any AMD dependencies, e.g., "core/utils"  
  function(){ 
    // This part runs synchronously and an indeterminate order.  
    // do any plugin specific setup here...  
  
   // Usually, you return an object that has a "run" method 
   return { 
      run: function(conf, doc, cb){ 
         // do some work on the "doc" with "conf" 
         //finally call cb()   
         cb(); 
      } 
 }; 
}) 
``` 

When a plugin is created, it SHOULD return an object. That object SHOULD have a "run" method, that takes 3 arguments (conf, doc, cb): 

 * conf: is ReSpec configuration object - which the user defined. Be careful not to modify this object.  
 * doc: a reference to the document object on which the plugin will operate. 
 * bc: a callback function, which you should call when the plugin's work is done.   
  
As shown in the example above, a plugin should use the "conf" object to act on the "doc" in some way. And then call cb() when the work is done.  

### Warning users of errors 
If you are creating a plugin that needs to show warnings to a user, you can use the "core/pubsubhub" utility. As the name suggests, this is a simple pub-sub-hub dispatcher. You should use this to dispatch "warn" or "error" messages to a user:  

```JS 
define( 
 ["core/pubsubhub"], 
 function (pubsubhub) {  
   return { 
     run: function(conf, doc, cb){ 
       if(! "something" in conf) { 
         pubsubhub.pub("warn", "A string that represents a warning"); 
       } 
      cb(); 
    } 
 } 
); 
``` 

These "warn" and "error" messages will be picked up by ReSpec's UI (the "pill"), and displayed to the end-user. You should only "error" on things that the user needs to fix to successfully publish their document. Likewise, only warn on things the user SHOULD fix. 

IMPORTANT: Don't show JavaScript errors to the user - as they won't be able to fix these, and they minified JS output will make these messages unhelpful!  