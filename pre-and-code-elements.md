ReSpec provides code highlighting for blocks of code marked up with the `<pre>` or `<code>` elements. ReSpec will try to guess the code language, or it can be added as a class:

```html
<pre class="html">
  <h2 id="minor-fifth">The third</h2>
</pre>
```

In Markdown, they should be marked with `\`` followed by the code language:

`\``HTML
```html
<script>
function magic() {
  const noop = "this";
  doThat(noop);
}
</script>
```
`\``


Respec supports the following languages by default:

* ABNF
* CSS
* HTML
* HTTP
* JavaScript
* JSON
* XML

To highight code in other languages you need to define a function that loads a highlighter.js package for the language you want, and to request the language be loaded as a respec `preProcess` option:

```html
<script>
  async function loadSolidity() {    //this is the function you call in 'preProcess', to load the highlighter
    const worker = await new Promise(resolve => {
      require(["core/worker"], ({ worker }) => resolve(worker));
    });
    const action = "highlight-load-lang";
    const langURL = "https://rawgit.com/pospi/highlightjs-solidity/master/solidity.js";
    const propName = "hljsDefineSolidity";  // This funtion is defined in the highlighter being loaded
    const lang = "solidity";     // this is the class you use to identify the language
    worker.postMessage({ action, langURL, propName, lang });
    return new Promise(resolve => {
      worker.addEventListener("message", function listener({ data }) {
        const { action: responseAction, lang: responseLang } = data;
        if (responseAction === action && responseLang === lang) {
          worker.removeEventListener("message", listener);
          resolve();
        }
      });
    });
  }


 var respecConfig = {
        preProcess: [loadSolidity],    // i.e. add this line to your existing configuration

        /// other configuration information 
 }
```