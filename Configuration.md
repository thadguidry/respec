Configuring ReSpec is straight forward.  Simply place a `<script class=remove>` at the top of your document

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

### Test 