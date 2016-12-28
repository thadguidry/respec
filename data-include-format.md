Data is normally included as HTML (injected into the DOM as such). There are times when you want to include content as text. If so, set this attribute to `text`. That is the only supported value (you can also use "html", but that's the default value).

### Example
```HTML
<section 
  data-include="some.txt"
  data-include-format="text">
</section> 
``` 