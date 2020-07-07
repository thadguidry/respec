# `data-lt-noDefault`

Allow you to ignore data-lt-noDefault definition of a defined term. This is sometimes useful if you need to disambiguate two terms.

## Example

```html "example": "Only data-lt is used for referencing the second definition."
<dfn>The Foo</dfn>
<!-- the text content definition is not used -->
<dfn data-lt="other foo" data-lt-noDefault>The Foo</dfn>
```
