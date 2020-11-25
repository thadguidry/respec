# `data-cite`

Using `data-cite`, allows you to cite a spec directly in text by using a spec's id. You can look up an id either directly in ReSpec (using the ReSpec pill > "Search SpecRef DB") - or on [specref.org](https://www.specref.org/).

Add "!" on the front of the spec ID makes it a "normative" citation. Excluding it, makes it informative.

It is currently supported on `<a>` and `<dfn>` elements:

The syntax for data-cite value is:

```
spec-id[optional "/" path-to-document]#fragment
```

```html
<a data-cite="rfc2119#some-section">some text</a>
<dfn data-cite="spec/some.html#fragment">some text</a>
```

Note: This is not the recommended way of linking to terms in other specs. Please use [`xref`](xref) whenever possible.