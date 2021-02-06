# `data-include`

A URL pointing to a resource, relative to the including document. The content will get included as a child of the element on which the inclusion is performed (unless [data-include-replace](data-include-replace) is used, in which case it replaces the element), replacing its existing content.

The include filter does not run recursively - `data-include` attributes on included content will not work.

In the processing pipeline, inclusion happens right after everything to do with the document's headers, style, and transformations have happened, which means that all the processing to do with structure, inlines, WebIDL, and everything else is applied to the included content as if it had always been part of the source.

```html "example": "Include content from another file."
<section data-include="section/theFooElement.html"></section>
```
