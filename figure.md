# `<figure>`

Specification figures are indicated using the `<figure>` element, with a nested `<figcaption>`. They can occur anywhere.

## Examples

```html
<section id="buckets">
  <figure id="flowchart">
    <img src="flowchart.svg" alt="" />
    <figcaption>The water flows from bucket A to bucket B.</figcaption>
  </figure>
  <p>The flowchart shown in <a href="#flowchart"></a> is quite impressive.</p>
</section>
```

Figures can be automatically linked to using a link pointing to their ID with no content (e.g. `<a href='#foo-figures'></a>`).

You can also automatically generate a [table of figures](tof).
