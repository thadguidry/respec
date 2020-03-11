## `data-cite` (Mostly deprecated)

**Note: this feature is mostly deprecated, and only supported for legacy specifications. Please use [`xref`](xref) instead.**

Using `data-cite`, allows you to cite a spec directly in text by using a spec's id. You can look up an id either directly in ReSpec (using the ReSpec pill > "Search SpecRef DB") - or on [specref.org](http://www.specref.org/).   

Add "!" on the front of the spec ID makes it a "normative" citation. Excluding it, makes it informative.

It is currently supported on elements: 

  * `<a data-cite="">`
  * `<dfn data-cite="">`

The syntax for the value is:

 * `spec-id[optional "/" path-to-document]#fragment`. 
 * For example, `data-cite="rfc2119#some-section"` 
 * or `data-cite="spec/some.html#fragment"` 
