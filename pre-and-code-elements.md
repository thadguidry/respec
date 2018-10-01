ReSpec provides code highlighting for blocks of code marked up with the `<pre>` or `<code>` elements. ReSpec will try to guess the code language, or it can be added as a class:

```html
<pre class="html">
  <h2 id="minor-fifth">The third</h2>
</pre>
```

In Markdown, they should be marked with `\`` followed by the code language:

<pre lang="html">
```html
<script>
function magic() {
  const noop = "this";
  doThat(noop);
}
</script>
\```
</pre>

Respec supports the following languages by default:

* ABNF
* CSS
* HTML
* HTTP
* JavaScript
* JSON
* XML