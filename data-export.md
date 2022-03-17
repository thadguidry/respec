# "export" CSS class

Use `<dfn class="export">` to export a definition to W3C's [Webref](http://github.com/w3c/webref/) database.

<aside class="note" title="Some important things">

* Your spec needs to be part of the [browser specs](https://github.com/w3c/browser-specs/) to be indexed by [Webref](http://github.com/w3c/webref/). 
* Only export things that other specifications need! (e.g., special objects, specific algorithms).
* WebIDL things are automatically exported for you.

</aside>

```html "example": "Explicitly export a definition."
<p>The <dfn class="export">fancy thing</dfn> can be used by other specs.</p>
```

Then other specs can use "fancy thing" using [xref](xref), like so:

```html "example": "Using definitions exported from other specs using xref."
<script>
  var respecConfig = {
    xref: true,
  };
</script>

<p data-cite="spec-shortname">
  We can now link to <a>fancy thing</a> in another spec.
</p>
```
