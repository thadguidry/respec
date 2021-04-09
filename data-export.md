# `data-export`

Use the `data-export` to export a `<dfn>` definition to W3C's [Webref](http://github.com/w3c/webref/) database.

Note: Your spec needs to be part of the [browser specs](https://github.com/w3c/browser-specs/) to be indexed by [Webref](http://github.com/w3c/webref/). 

Note: Only export things that other specifications need! (e.g., special objects, specific algorithms).

Note: WebIDL things are automatically exported for you.

```html "example": "Explicitly export a definition."
<p>The <dfn data-export="">fancy thing</dfn> can be used by other specs.</p>
```

Then other specs can use "fancy thing" using [xref](xref), like so:

```html "example": "Using definitions exported from other specs using xref."
<script>
  var respecConfig = {
    xref: ["spec-shortname"],
  };
</script>

<p>We can now link to <a>fancy thing</a> in another spec.</p>
```
