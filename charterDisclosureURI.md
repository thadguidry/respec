# `charterDisclosureURI`

This configuration option must be specified for Interest Group Notes (IG-NOTE), where it must point at the disclosure section of the group charter, per [publication rules](https://www.w3.org/pubrules/doc/rules/?profile=IG-NOTE#patPolReq). This option is ignored for all other documents.

## Example

```js
var respecConfig = {
 charterDisclosureURI : "https://www.w3.org/2019/06/me-ig-charter.html#patentpolicy",
}
```
