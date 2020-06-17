# `override`

**⚠️ Warning: only use this as a last resort. It's not a recommended feature.**

The `override` css class allow spec editors to completely override a section that would normally be dynamically filled with ReSpec generated content. 

Sections you can override include:

 * `<section id="sotd">` 
 * `<section id="conformance">`

## Examples

```HTML
<section id="sotd" class="override">
  <h2>Status of this document</h2>
  <p>Exploring new ideas...</p>
</section>
```
