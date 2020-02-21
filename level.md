"Leveled" specs are generally specs that build on each other in a backwards compatible way. They generally include the text from previous level.  

The `level` configuration options automatically appends the level to your spec’s title and [shortName](https://github.com/w3c/respec/wiki/shortName). For example, `{level: 3}` tells ReSpec that your spec is a level 3 spec.

The level is an integer greater than or equal to 0.

## Examples of usage

Your document has the title "Awesome Feature" and the config: 

```JS
var respecConfig = {
  level: 3,
  shortName: "awesome-feature",
}
```

* Respec will append ` Level 3` to your title. Your new title is `Awesome Feature Level 3`. 
* Respec will append `-3` to your shortname. Your new shortname is `awesome-feature-3`
* Links that use the shortName will automatically use the new `awesome-feature-3` shortname.