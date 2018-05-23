`data-lt` allows you to define alternative terms for a definition (or link to a definition using an alternative name). This is great for terms in plural, conjugated, or in some other variant that does not exactly match the `dfn`. 

### Example

```HTML
<dfn data-lt="my terms|some term|my term">my term</dfn>...
```

Which can be referenced by any of `<a>my terms</a>`, `<a>some term</a>`, `<a>my term<a>`.
