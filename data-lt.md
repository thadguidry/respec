`data-lt` allows you to define alternative terms for a definition (or link to a definition using an alternative name). This is great forsome other variant that does not exactly match the `dfn`. Each term is separated by a "|". 

### Example

```HTML
<dfn data-lt="best fruit|fruits of the gods">Apple</dfn>...
```

Which can be referenced by any of `<a>best fruit</a>`, `<a>fruits of the gods</a>`, or even `[=fruits of the gods=]` will link.

---

See also: [Automatic pluralization with `respecConfig.pluralize`](https://github.com/w3c/respec/wiki/pluralize)