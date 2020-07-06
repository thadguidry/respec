# `logos`

Overrides the standard W3C logo with one or more other logos.

The `logos` property takes an array that contains a set of objects. Each of these objects contains:

<dl>
  <dt>src</dt>
  <dd>URL to the source.</dd>
  <dt>alt</dt>
  <dd>The alt attribute value.</dd>
  <dt>height</dt>
  <dd>The height of the image.</dd>
  <dt>width</dt>
  <dd>The width of the image.</dd>
  <dt>id</dt>
  <dd>The id of the image element.</dd>
  <dt>url</dt>
  <dd>Where to navigate to when the logo is pressed.</dd>
</dl>

## Example

```js "example": "Add a custom logo at top of page."
var respecConfig = {
  logos: [
    {
      src: "https://example.com/logo.gif",
      url: "https://example.com",
      alt: "The Example company",
      width: 100,
      height: 42,
      id: "example-company-logo",
    },
  ],
};
```

Would output:

```html
<p>
  <a href="https://example.com">
    <span id="example-company-logo">
      <img
        src="https://example.com/logo.gif"
        width="100"
        height="42"
        alt="The Example company"
      />
    </span>
  </a>
</p>
```
