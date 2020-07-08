# `data-lt`

`data-lt` allows you to define alternative terms for a definition (or link to a definition using an alternative name). This is great for some other variant that does not exactly match the `dfn`. Each term is separated by a `|`.

```html "example": "Providing alternate linking terms for a definition."
<dfn data-lt="best fruit|fruits of the gods">Apple</dfn>...

<!-- can be referenced by any of: -->
<a>best fruit</a>
<a>fruits of the gods</a>
[=fruits of the gods=]
```

See also: Automatic pluralization with [`pluralize`](pluralize) and [`data-local-lt`](data-local-lt).
