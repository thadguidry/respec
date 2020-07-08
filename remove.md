# `remove`

If you want to include content that is used during the generation of the specification but must be removed from the output, then add the remove class to it. That is used for instance for all the script elements that pull in ReSpec and define its configuration.


```html "example": "Remove some content once ReSpec has finished processing."
<div class="remove">
  <p>This will be removed at build time.</p>
</div>
```
