# `favicon`

This adds an icon to the document using `link[rel=icon]`. It can accept either a link to an image or a single Unicode character. If the latter, then it will generate an inline SVG to add the icon directly to the document.

```js "example": "Setting a Unicode icon"
var respecConfig = {
  favicon: "🐙"
};
```
