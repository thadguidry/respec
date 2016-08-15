When this configuration variable is set to `true`, no table of contents is generated in the document. 

### Example

```JS
var respecConfig = {
  noTOC: true,
}
```

There is a corresponding class of `notoc`.  When this class is specified on a section element, that section will be omitted from the Table of Contents.

### Example

```HTML
<section class='notoc' id='mySection'>
  <h1>Some section I do not want in the ToC</h1>
  ...
</section>
```
