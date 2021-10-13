# `document.respec`

When ReSpec is loaded, it immediately adds a `respec` object to the `document` object which contains following properties:

## `document.respec.isReady`

This property returns a Promise, which resolves when ReSpec finishes all its processing. This promise is useful if you need to be notified when ReSpec has finished doing its work - and you want to do some additional work.

The following example shows how to use `document.respec.isReady`.

```html
<script>
  // Wait until resources have loaded, including ReSpec
  document.addEventListener("load", function () {
    document.respec.isReady.then(function () {
      // Do things
    });
  });
</script>
```
