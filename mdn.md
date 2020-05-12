## The `mdn` configuration option

The `mdn` option allows a spec to be annotated with links to MDN developer documentation.

## Example of usage

If a boolean is provided, it uses spec's `shortName` to match data over on MDN. 
```JS
var respecConfig = {
 shortName: "payment-request",
 mdn: true,
}
```

If the `shortName` doesn't match the MDN key, you can provide a custom key as:
```JS
var respecConfig = {
 mdn: "payment-request",
}
```