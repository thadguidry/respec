# `data-include-format`

Data is normally included as HTML (injected into the DOM as such). There are times when you want to include content as text. If so, set this attribute to `"text"`.

If you want to include as markdown, use `"markdown"` as attribute value. The default value is `"html"`.

## Example

```html
<section
  data-include="some.txt"
  data-include-format="text">
</section>
```
