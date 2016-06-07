For regular documents, this is used to specify that additional parties hold a copyright jointly with W3C on this document. This is typically used when publishing documents that were developed in cooperation with other friendly standard consortia such as the [IETF](http://www.ietf.org/). 

The option is simply some text giving the additional copyright holders. For unofficial documents, this string is used to replace the default CC license. 

## Example

```JS
var respecConfig = {
  additionalCopyrightHolders = "Internet Engineering Task Force",
}
```

See also:

 * [Regular document](https://www.w3.org/respec/examples/boilerplate.html?additionalCopyrightHolders=Internet%20Engineering%20Task%20Force)
 * [Unofficial document](https://www.w3.org/respec/examples/boilerplate.html?additionalCopyrightHolders=Copyright%20%C2%A9%201977%20Robin%20Berjon;specStatus=unofficial)