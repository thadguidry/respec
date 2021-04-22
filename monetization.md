# `monetization`

Adds a "monetization" meta-tag to enable [Web Monetization](https://webmonetization.org/).

```js
var respecConfig = {
  // add a monetization meta tag with a custom payment pointer
  monetization: "$wallet.example.com/my-wallet",
};
```

```js
var respecConfig = {
  // disable web monetization
  monetization: false,
};
```

If you do not explicitly disable this feature or set a different payment pointer, it uses ReSpec's payment pointer by default.
