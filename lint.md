# `lint`

A boolean used to enable/disable ReSpec's [built-in linter](https://github.com/w3c/respec/blob/develop/src/core/linter.js) for W3C documents. The linter is enabled by default, and warns you about:

- URLs in the config that are not HTTPS.
- Missing Privacy and/or Security sections.
- Possibly other useful things...

If you want to turn off the linter:

```js
var respecConfig = {
  lint: false,
};
```

You can also enable or disable certain rules:

```js
var respecConfig = {
  "no-http-props": false, // disable a rule that enabled by default
  "no-unused-vars": true, // enable a rule that disable by default
};
```
