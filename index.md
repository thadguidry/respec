# `index`

Adding a `<section id="index">` in your document instructs ReSpec to gather all the terms defined in your specification, as well as all the terms referenced by your specification into a single section. The index lets you conveniently search for all defined/referenced terms, as well as find their usage in the document.

```html "example": "Index of locally defined and externally referenced terms."
<section id="index" class="appendix">
  <!-- All the terms will magically appear here -->
</section>
```

You can also add a custom header and content to your `index`:

```html "example": "Terms index with custom header and content."
<section id="index" class="appendix">
  <h2>List All The Terms!</h2>
  <p>Wow, that's a lot of terms!</p>
  <!-- All the terms will magically appear here -->
</section>
```
