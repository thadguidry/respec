# `data-dfn-type`

You can add a `data-dfn-type` attribute on `<dfn>` elements to declare the type of definition. This is used in conjunction with [`data-link-type`](data-link-type) to allow linking to a definition of particular type.

In many cases, you do not need to provide this value. If a `<dfn>` has a [`data-dfn-for`](data-dfn-for) context, `data-dfn-type` is treated as `"idl"`. Otherwise, it is to be `"dfn"`

Currently, only two values: `"idl"` and `"dfn"` are supported. In future, more values might be supported.

## Example of usage

```html "example": "Specifying data-dfn-type."
<p>
  The document has visibility state of
  <dfn id="dfn-hidden" data-dfn-type="dfn">hidden</dfn>.
</p>
<p>
  `visibilityState` attribute has value
  <dfn id="idl-hidden" data-dfn-type="idl">hidden</dfn>.
</p>

<p>
  {{ hidden }} links to dfn with id="idl-hidden". This is same
  <a data-link-type="idl">hidden</a>, but above syntax is preferred.
</p>
<p>
  [= hidden =] links to dfn with id="dfn-hidden". This is same
  <a data-link-type="dfn">hidden</a>, but above syntax is preferred.
</p>
```
