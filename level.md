The `level` config automatically appends the level to your spec’s title and [shortName](https://github.com/w3c/respec/wiki/shortName). For example, `{level: 3}` tells Respec that your spec is a level 3 spec.
## Requirements
A document’s level should be an integer that is greater than or equal to 0.
## Examples
Your document has the title “Awesome Feature” and the config `{level: 3, shortName: “awesome-feature”}`.
* Respec will append ` Level 3` to your title. Your new title is `Awesome Feature Level 3`. 
* Respec will append `-3` to your shortname. Your new shortname is `awesome-feature-3`
* Links that use the shortName will automatically use the new `awesome-feature-3` shortname.