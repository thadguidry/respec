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

## `document.respec.errors`

An array of errors found during ReSpec's processing, with each item containing an error `message` and the `plugin` name where that error occurred. See [`RespecError`](https://github.com/w3c/respec/blob/1bd0786fc2f58d99b2eb9df141a156f6fd25eb20/src/core/utils.js#L849-L872) for all available fields and their details.

## `document.respec.warnings`

Similar to `document.respec.errors`, but contains warnings instead of errors.

## `document.respec.toHTML()`

Returns a promise that resolves with the markup resulting from ReSpec's processing, as a string.