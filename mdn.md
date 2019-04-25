## The `mdn` configuration option

The `mdn` is a boolean option that allows a spec to be annotated with links to MDN developer documentation. It relies on the spec's shortName to match data over on MDN. 

## Example of usage

```JS
var respecConfig = {
 shortName: "payment-request",
 mdn: true,
}
```