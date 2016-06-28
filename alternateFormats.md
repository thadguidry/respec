An array of objects, each of which has two required fields:
<dl>
  <dt><code>uri</code></dt>
  <dd>for the link to the alternate document</dd>
  <dt><code>label</code>,</dt>
  <dd>for a human readable string that matches it. This is used to link to alternate formats for the same content (e.g. PDF, ePub, PS).</dd>
</dl>

### Example
```JS
var respecConfig = {
  alternateFormats: [{
    label: "PDF",
    uri: "https://example.w3.org/TR/example.pdf",
  }, {
    label: "XML",
    uri: "https://example.w3.org/TR/example.xml",
  }],
}
```