A URL pointing to a resource, relative to the including document. The content will get included as a child of the element on which the inclusion is performed (unless [data-include-replace](data-include-replace) is used, in which case it replaces the element), replacing its existing content.

The include filter runs recursively so that included content that contains data-include attributes will work (just be sure not to build a circular loop in there, ReSpec won't detect it if only because it doesn't mind if you're shooting yourself in the foot).

By default the inclusion is asynchronous, which means that the included content may or may not be further processed by ReSpec after it gets added to the DOM (the result won't be deterministic and so is only useful if the content is not meant to be further processed). 

In the processing pipeline, inclusion happens right after everything to do with the document's headers, style, and transformations have happened, which means that all the processing to do with structure, inlines, WebIDL, and everything else is applied to the included content as if it had always been part of the source. 

### Example
```HTML
<section id="element-foo"
  data-include="section/theFooElement.html">
</section>
```
