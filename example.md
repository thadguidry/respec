Marks a `pre`, or `aside` as being an example. This wraps the element in a header with an example number. Use the `title` attribute to add text alongside the example number.  Aside elements may contain nested `pre`s.

For a contra-example, replace the `example` class with `illegal-example`.

Note that the content of the `title` attribute will be interpreted as HTML markup. See [`title` attributes](title-attributes) for details.

### Example
```HTML
<aside class="example" title='Fat arrows (<code>=></code>)'>
  <p>Here we see how to use a fat arrow in ES.
  <pre>
  const sum = [...items]
    .map(item => item * 2)
    .reduce((sum, next) => sum + (next || 0) );
  </pre>
</aside>
```