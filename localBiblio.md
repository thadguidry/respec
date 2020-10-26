# `localBiblio`

If you need to include a one-off reference that isn't in the [SpecRef database](https://www.specref.org/) or if you need to override an existing reference with specific content, then you can use this configuration option.

You can find the format for these entries in the [SpecRef repository](https://github.com/tobie/specref/).

**Note:** use of localBiblio is strongly discouraged. Please contribute references back to the [SpecRef database](https://www.specref.org/) instead.


```js "example": "A sample localBiblio entry."
var respecConfig = {
  localBiblio: {
    WEREWOLF: {
      title: "Tremble Puny Villagers",
      href: "https://w3.org/werewolf",
      status: "RSCND",
      publisher: "W3C",
    },
  },
};
```
