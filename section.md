Specification sections are indicated using the `<section>` element. They can be nested arbitrarily in order to indicate sub-sections.

The first h* child element is taken to be the section's title. You do not need to worry about nesting depth: ReSpec will take any element in the h1-h6 range and renumber it to match the section's nesting depth correctly. It is a common convention (though by no means a requirement) to use h2 for all sections.

If you nest deeper than the h6 level, apart from having a hard-to-navigate document you will keep getting h6 elements.

Section can be automatically linked to using a link pointing to their ID with no content (e.g. `<a href='#foo-section'></a>`). 

### Example

```HTML
<section>
  <h2>The <code>foo</code> Element</h2>
  <p>The <code>foo</code> Element allows you too...
</section>
```