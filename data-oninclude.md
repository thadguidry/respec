# `data-oninclude`

This is a list of white space separated JavaScript function names that will be called in turn in order to transform the content inside the given element. The functions need to be globally available.

Each function gets called with three arguments:

- ReSpec utils object.
- a string of the content to transform.
- the URL of the loaded content.

Each function must return the transformed content.

```html "example": "Transforming content included via data-include before further processing."
<script>
  // Adds rainbows where appropriate.
  function toRainbows(utils, content, url) {
    return content.replace(/rainbow/gi, "🌈");
  }

  // Replaces unicorns rainbows where appropriate.
  function replaceUnicorns(utils, content, url) {
    return content.replace("🦄", "🐴");
  }
</script>

<!-- Include content.fragment file, but then process it on include. -->
<section
  data-oninclude="toRainbows replaceUnicorns"
  data-include="content.fragment"
></section>
```
