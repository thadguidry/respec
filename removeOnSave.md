# `removeOnSave`

If you want to include content that is used during the generation of the specification but must be removed from the [_exported_ output](static-snapshots), then add the `removeOnSave` class to it.

```html "example": "Remove some content before export."
<div class="removeOnSave">
  <p>This will be removed at export time.</p>
</div>
```
