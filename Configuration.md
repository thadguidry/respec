Configuring ReSpec is straight forward. Simply place a `<script class=remove>` at the top of your document and create an object called `respecConfig`. The `remove` class tells ReSpec to remove this element from the final specification. 

## respecConfig

The `respecConfig` object literal provides ReSpec with the metadata needed to process your document. ReSpec looks for this object on the `window` object. 

```HTML 
<script class='remove'>
  var respecConfig = {
    specStatus: "FPWD",
    editors: [{
      name: "Margarete Smith",
      url: "http://example.com/",
    }],
    processVersion: 2015,
    shortName: "super-feature",
  };
</script>
```
