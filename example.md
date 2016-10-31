Marks a `div`, `pre`, or `aside` as being an example. This provides an element with a specific styling and header. 

### Example
```HTML
<div class="example">
  <p>Here we see how to use a fat arrow in ES.
  <pre>
  const sum = [...items]
    .map(item => item * 2)
    .reduce((sum, next) => sum + (next || 0) );
  </pre>
</div>
```