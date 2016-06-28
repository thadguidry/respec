Specification figures are indicated using the `<figure>` element, with a nested `<figcaption>`. They can occur anywhere.

A Table of Figures is generated and inserted in the document if you include an `<section>` element with ID `tof`.

Figures can be automatically linked to using a link pointing to their ID with no content (e.g. <a href='#foo-figures'></a>). 

### Examples

```HTML
<!-- generate the table of figures here -->
<section id="tof"></section>
<section id="buckets">
  <figure>
    <img src="flowchart.svg" alt="">
    <figcaption>The water flows from bucket A to bucket B.</figcaption>
  </figure>
</section>
```