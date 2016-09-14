## `document.respecIsReady`
When ReSpec is loaded, it immediately adds a `respecIsReady` property to the `document` object. This property returns a Promise, which resolves when ReSpec finishes all its processing. This promise is useful if you need to be notified when ReSpec has finished doing its work - and you want to do some additional work. 

The promise resolves with a reference to ReSpec's final configuration object. You can use this object if you need to do further processing, but try to avoid changing it (clone it with, `Object.assign()` if need be). 

### Example 
The following example shows how to use `document.respecIsReady`.

```HTML
<script src='https://www.w3.org/Tools/respec/respec-w3c-common'
  class='remove'>
</script>
<script>
// Wait until resources have loaded, including ReSpec
document.addEventListener("load", function(){
  document.respecIsReady.then(function(conf){
    // Do things based on conf?
    if(conf.someThing){
      document.querySelector("#thing").style.color = "red"; 
    }
  })
});
</script>
```