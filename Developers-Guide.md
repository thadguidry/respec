## Super fast get-up-and-running
Clone the repo:

```Bash
git clone git@github.com:w3c/respec.git
```

To install the needed things, and copy over the dependencies:
 
```Bash
npm install
```

In a new console window or tab, we get Babel to compile the code (stuff in the "src" directory): 

```Bash
npm run babel:watch 
```

In a new console window or tab, start the development web server: 
```Bash
npm start
```

Open the url given (usually http://127.0.0.1:8080). And go to "examples". 

Usually "basic.html" is a good place to start hacking from.  

## ReSpec's architecture  
ReSpec is a very simple application that runs mostly synchronous bits of JS after a `Document` loads. These javascript fragments are referred to as "plugins". When a bunch of plugins are combined together, they create a "profile".  

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

```JS
document.respecIsReady.then(() => { 
 console.log("ReSpec has finished processing this document"); 
}); 
``` 

This is potentially useful for scripts that depend on ReSpec's output. They can wait for the promise to settle before doing their own work.  

Alternatively, if you really need to run things immediately before or after ReSpec runs the plugins, you can define `preProcess` or `postProcess` properties on the configuration object. See [`preProcess](preProcess) and [`postProcess`](postProcess) more details and for examples. 

## Plugins 
Plugins are simple ES6 modules that live in the "[src/](https://github.com/w3c/respec/tree/develop/src)" folder. They have two parts: A synchronous initialization, and a optionally exported `run()` function that is called asynchronously. 

A plugin looks like this: 

```JS 
// import other things you need
import utils from "core/utils";

// This part runs synchronously and an indeterminate order.  
// do any plugin specific setup here. Note, the document
// can be in an unstable state here - so don't manipulate
// the DOM here! 

// Optionally, export "run" function
// See below for description of arguments.
export async function run(conf){  
  if ("something" in conf) {
    await someAsyncTask();
  }
}

async function someAsyncTask(){
  // Your code here
}
``` 

The exported run method SHOULD have arguments (conf): 

 * conf: is the ReSpec configuration object (`window.respecConfig`) - which the user defined. Be careful not to modify this object.  

**IMPORTANT**: Don't forget to run `npm run babel:build` to make sure your code gets compiled. Compiled plugins end up in the `js/` folder. You can also `npm run babel:watch`.  

### Built-in HTTP server
You can launch a built in HTTP server during development by simply typing: `npm start`.

### Warning users of errors 
If you are creating a plugin that needs to show warnings to a user, you can use the "core/pubsubhub" utility. As the name suggests, this is a simple pub-sub-hub dispatcher. You should use this to dispatch "warn" or "error" messages to a user:  

```JS 
import { pub } from "core/pubsubhub";
export async function run(conf) {
  if (!"something" in conf) {
    pubsubhub.pub("warn", "A string that represents a warning");
  }
}
``` 

These "warn" and "error" messages will be picked up by ReSpec's UI (the "pill"), and displayed to the end-user. You should only "error" on things that the user needs to fix to successfully publish their document. Likewise, only warn on things the user SHOULD fix. 

IMPORTANT: Don't show JavaScript errors to the user - as they won't be able to fix these, and they minified JS output will make these messages really unhelpful!

## Custom profiles

To create a custom profile, it's recommended that you clone this repository (don't fork it, as you probably want to change things - you can still receive the latest changes by setting this repo as an upstream - more later). 

1. Make a copy of "[js/profile-w3c-common.js](https://github.com/w3c/respec/blob/develop/js/profile-w3c-common.js)", but rename it "profile-YOUR-PROFILE-NAME.js". 
1. Open "profile-YOUR-PROFILE-NAME.js", and remove, add, etc. any plugins you want. 
1. run: `node ./tools/builder.js --profile=YOUR-PROFILE-NAME`. That will generate a bundle in the build directory.

### Working with your new profile
In `examples/`, make a copy of "basic.html" and point the `<script>` tag at your new profile. Now run:

```Bash
npm install
npm run build
npm start
```

That will start a web server, so you can now load up `http://localhost:8080/examples` and have play with your custom profile.

When you are ready to deploy it:

```
node ./tools/builder.js --profile=YOUR-PROFILE-NAME
``` 

### Testing 
If you are writing custom [Jasmine](https://jasmine.github.io/) tests, simply place them into `tests/YOUR-PROFILE-NAME/`. 

Then run:

```Bash
./tools/make-test-file-build.js
```

That will add your tests to a JSON file used in testing. Then, in your browser, just navigate to:

```
http://localhost:8080/tests/SpecRunner.html
``` 

And the tests will run. 