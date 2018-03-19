The recommended way to set the title of a specification is via a [`<title>`](title) element. However, in cases  where you might need markup in a spec's title (e.g., for i18n reasons), you can use a single `<h1 id="title">` element. 

ReSpec warns if the `<title>` and the `<h1>` text content match. 

## Example 

```HTML
  <h1 id="title">The <code>Whatever</code> Interface</h1>
  <section id="abstract">
   <p>...</p>
  </section>
``` 