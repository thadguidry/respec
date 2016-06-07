Configuring ReSpec is straight forward. Simply place a `<script class=remove>` at the top of your document. The `remove` class tells ReSpec to remove this element from the final specification. 

```HTML 
<script class='remove'>
  var respecConfig = {
    specStatus: "FPWD",
    editors: [{
      name: "Margarete Smith",
      url: "http://exmaple.com/",
    }],
    processVersion: 2015,
    shortName: "super-feature",
  };
</script>
```
