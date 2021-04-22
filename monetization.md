# `monetization`

Adds a "monetization" meta-tag to enable [Web Monetization](https://webmonetization.org/).

The meta-tag is added only to "live" documents, and is removed from generated static documents.

```js "example": "Add a monetization meta tag with a custom payment pointer."
var respecConfig = {
  monetization: "$wallet.example.com/my-wallet",
};
```

```js "example": "Disable web monetization."
var respecConfig = {
  monetization: false,
};
```

If you do not explicitly disable this feature or set a different payment pointer, it uses ReSpec's payment pointer by default.
