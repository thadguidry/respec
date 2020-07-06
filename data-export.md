# `data-export`

Use the `data-export` to export a `<dfn>` definition to W3C's [Shepherd database](https://api.csswg.org/shepherd/).

Note: Only export things that other specifications might use (e.g., specific algorithms).

If you'd like to have your specification indexed in Shepherd, please email marcos@marcosc.com.

Note: WebIDL things are automatically exported for you.

## Example

```html
<p>The <dfn data-export="">fancy thing</dfn> can be used by other specs.</p>
```

Then other specs can use "fancy thing" using [xref](xref), like so:

```js
var respecConfig = {
  // other config options here...
  xref: ["spec-shortname"],
};
```

And:

```html
<p>We can now link to <a>fancy thing</a> in another spec.</p>
```
