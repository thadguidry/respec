# `lint`

A boolean used to enable/disable ReSpec's [build-in linter](https://github.com/w3c/respec/blob/develop/src/core/linter.js) for W3C documents. The linter is enabled by default, and warns you about: 

 * URLs in the config that are not HTTPS.
 * Missing Privacy and/or Security sections.
 * Possibly other useful things...

If you want to turn off the linter: 

```JS
var respecConfig = {
  lint: false,
}
```

The [following lint rules](https://github.com/w3c/respec/tree/develop/src/core/linter-rules) are available:
- [`no-http-props`](no-http-props)
- [`local-refs-exist`](local-refs-exist)
- [`no-headingless-sections`](no-headingless-sections)
- [`no-unused-vars`](no-unused-vars) (off by default)
- [`check-punctuation`](check-punctuation) (off by default)
- [`check-charset`](check-charset)
- [`check-internal-slots`](check-internal-slots) (off by default)
- [`privsec-section`](privsec-section) (off by default, on for W3C documents)
- [`wpt-tests-exist`](wpt-tests-exist) (off by default)
