# `data-max-toc`

Limit depth of table to contents section to section, without adding a global depth limit using [`maxTocLevel`](maxTocLevel).

## Example

```html "example": "Skip sections with depth more than 2 from ToC."
<section data-max-toc="2">
  <h2>Section 1</h2>
  <section>
    <h2>Section 1.1</h2>
    <section>
      <h2>Section 1.1.1 (skipped)</h2>
    </section>
  </section>
</section>
```

`data-max-toc=0` is equivalent to adding a [`notoc`](notoc-class) class to current section:

```html "example": "Skip current section from ToC."
<section data-max-toc="0">
  <h2>I'm skipped from ToC</h2>
</section>
```
