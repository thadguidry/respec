`data-lt` allows you to define alternative terms for a definition (or link to a definition using an alternative name). This is great for terms in plural, conjugated, or in some other variant that does not exactly match the `dfn`. Each term is separated by a "|". 

### Example

```HTML
<dfn data-lt="best fruit|apples">Apple</dfn>...
```

Which can be referenced by any of `<a>best fruit</a>`, `<a>apples</a>`, `<a>apple<a>`.