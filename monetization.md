# `monetization`

Adds a "monetization" `<meta>` tag to enable [Web Monetization](https://webmonetization.org/).

This options takes either a boolean, a string (a payment pointer), or an object with a `paymentPointer` (string) and `removeOnSave` (boolean) property. 

By default, the meta tag is added only to "live" documents, and is removed from generated static documents.

```js "example": "Add a monetization meta tag with a custom payment pointer."
var respecConfig = {
  monetization: "$wallet.example.com/my-wallet",
};
```

If you do not explicitly disable this feature or set a different payment pointer, it uses ReSpec's payment pointer by default.

To disable web monetization entirely:

```js "example": "Disable web monetization."
var respecConfig = {
  monetization: false,
};
```

To keep the payment pointer in a generated snapshot:

```js "example": "Using removeOnSave."
var respecConfig = {
  monetization: {
     paymentPointer: "$customPointer",
     removeOnSave: false,
  }
};
```

