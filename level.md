"Leveled" specs are generally specs that build on each other in a backwards compatible way. They generally include the text from previous level.  

The `level` configuration options automatically appends the level to your spec’s title and [shortName](https://github.com/w3c/respec/wiki/shortName). The level is an integer value greater than or equal to 0.

## Examples of usage

```JS
var respecConfig = {
  level: 2,
  shortName: "payment-request",
}
```

Which results in: 

* ` Level 3` is appended to the title, so `Payment Request Level 2`. 
* The short-name becomes `payment-request-2`.

Which would render as, for example: 

<img width="693" alt="Screenshot 2020-02-21 18 54 02" src="https://user-images.githubusercontent.com/870154/75014932-91dd6c80-54db-11ea-8890-08ab2f6ac7c3.png">
