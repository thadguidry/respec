# `data-local-lt`

In general, you can provide alternative "linking text" ("`lt`"s) to a defined term by using the [`data-lt`](data-lt).

However, in the rare situation where you need to export via [`export`](data-export) a definition, you might want some shorthands to not be exported. In such a case, you can use `data-local-lt`.

In the following example, the following terms are exported for use with the xref linking system:

- installed web application
- installed

While, the following terms are not exported, but can be linked to internally:

- installing
- installation

```html "example": "Providing alternate linking text with data-local-lt and data-lt."
<dfn
  class="export"
  data-local-lt="installation|installing"
  data-lt="installed web application"
>installed</dfn>

<!-- These all link as expected -->
<a>installed web application</a>
[=installed=]
<a>installing</a>
[=installation=]
```
