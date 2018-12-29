A boolean used to disable ReSpec's [build-in linter](https://github.com/w3c/respec/blob/develop/src/core/linter.js) for W3C documents. The linter is enabled by default, and warns you about: 

 * URLs in the config that are not HTTPS.
 * Missing Privacy and/or Security sections.
 * Possibly other useful things...

### Example
If you want to turn off the linter: 

```JS
var respecConfig = {
  lint: false,
}
```

The following lint rules are available:
- [`no-http-props`](no-http-props)
- [`local-refs-exist`](local-refs-exist)
- [`no-headingless-sections`](no-headingless-sections)