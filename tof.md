# `tof`

Automatically generate a Table of Figures by adding a `<section id="tof">`.

## Example

```html
<section>
  ...
  <figure id="flowchart">
    <img src="flowchart.svg" alt="" />
    <figcaption>The water flows from bucket A to bucket B.</figcaption>
  </figure>
  ...
</section>

<section id="tof">
  <!-- a table of figures will be added here -->
</section>
```
