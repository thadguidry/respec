# `mdn`

The `mdn` option allows a spec to be annotated with links to MDN developer documentation.

If a boolean is provided, it uses spec's `shortName` to match data over on MDN.

```js "example": "Add MDN tables with shortName as MDN key."
var respecConfig = {
  shortName: "payment-request",
  mdn: true,
};
```

If the `shortName` doesn't match the MDN key, you can provide a key as:

```js "example": "Add MDN tables with specific MDN key."
var respecConfig = {
  mdn: "payment-request",
};
```

The key can be found at https://w3c.github.io/mdn-spec-links/SPECMAP.json. For example, the key is `"image-capture"` in the following entry:

```json
"https://w3c.github.io/mediacapture-image/": "image-capture.json",
```

It renders as panels near relevant definitions in the right-side of the document:

![MDN panel demo in ReSpec](https://user-images.githubusercontent.com/8426945/98251452-b9f3f980-1f9e-11eb-965f-83a351bff2bf.png)