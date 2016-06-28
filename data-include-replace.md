By default inclusion happens by placing the content inside the including element. At times, you will actually want the element to be replaced by the inclusion. If so, simply set this attribute to any truthy value. 

### Example
Pretending that "section.frag" is a `<section>` element, the `<div>` below would be replaced with a `<section>`. 

```
<div 
  data-include="section.frag"
  data-include-replace=true>
<!-- 
  this all gets replaced, including the
  div.
-->
</div>
```