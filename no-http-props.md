## `no-http-props` lint rule

Enable this [lint rule](lint) to get a warning if there exists some URL in `respecConfig` that starts with `http://`.

For example:

``` html
<script>
  var respecConfig = {
    implementationReportURI: "http://w3c.github.io/payment-request/reports/implementation.html",
                              ^^^^^ 
  };
</script>
```

You'll receive a warning pointing you to the violating properties in `respecConfig`.

## Example of usage

``` js
var respecConfig = {
  lint: {
    "no-http-props": true,
  },
}
```

## Example Warning

<a href="https://user-images.githubusercontent.com/8426945/42473140-6e16b38c-83e1-11e8-81e3-c82bddeb4483.png"><img alt="example warning for no-http-props" src="https://user-images.githubusercontent.com/8426945/42473140-6e16b38c-83e1-11e8-81e3-c82bddeb4483.png" width="400"></a>