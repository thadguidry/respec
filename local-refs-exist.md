## `local-refs-exist` lint rule

Enable this [lint rule](lint) to get a warning if there are some `href`'s that link to nonexistent `id`'s in a spec.

For example:
``` html
<section id="foo"><!-- content --></section>
<a href="#bar">baz</a> <!-- #bar doesn't exist in document -->
```
You'll receive a warning pointing you to the links that are broken.

## Example of usage

``` js
var respecConfig = {
  lint: {
    "local-refs-exist": true,
  },
}
```

## Example Warning

<a href="https://user-images.githubusercontent.com/8426945/40004984-92f30f1a-57b4-11e8-8b8e-1f2eae4c6d54.png"><img alt="example warning for local-refs-exist" src="https://user-images.githubusercontent.com/8426945/40004984-92f30f1a-57b4-11e8-8b8e-1f2eae4c6d54.png" width="400"></a>
