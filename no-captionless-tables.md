# `no-captionless-tables`

Enable this [lint rule](lint) to get a warning if there is some `<table>` in the document that does not contain a `<caption>`.

This only applies applies to tables with a `.numbered` class. Note that, the `<caption>` must be the first child of `<table>`.

For example:

```html "illegalExample": "A table that doesn't start with a caption."
<table class="numbered">
  <tr><td>...</td></tr> <!-- warning: no caption -->
</table>
```

You'll receive a warning pointing you to the caption-less table.

```js "example": "Enable no-captionless-tables linter rule."
var respecConfig = {
  lint: {
    "no-captionless-tables": true,
  },
};
```

