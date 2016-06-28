ReSpec knows to include a copyright year that matches the [`publishDate`](publishDate) in the copyright notice. However, for documents developed over a period of several years it is preferable to indicate the first year during which the copyright started by setting this option. 

Note that this can always be safely specified since if `copyrightStart` is the same as the [`publishDate`](publishDate)'s year it is ignored. 

### Example
The following appears as "Copyright © 1977-2016".

```JS
var respecConfig = {
  copyrightStart: 2014,
  publishDate: "01-01-2016"
}
```

 