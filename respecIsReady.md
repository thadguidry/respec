# `document.respecIsReady`

When ReSpec is loaded, it immediately adds a `respecIsReady` property to the `document` object. This property returns a Promise, which resolves when ReSpec finishes all its processing. This promise is useful if you need to be notified when ReSpec has finished doing its work - and you want to do some additional work.

The following example shows how to use `document.respecIsReady`.

```html
<script>
  // Wait until resources have loaded, including ReSpec
  document.addEventListener("load", function () {
    document.respecIsReady.then(function () {
      // Do things
    });
  });
</script>
```
