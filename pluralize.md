Adds automatic pluralization support for `<dfn>`, so that you don't have to manually define `data-lt` attributes for plurals.

## Example of usage

``` js
// enable automatic pluralization
var respecConfig = {
  pluralize: true,
};
```

You can define a term as `<dfn>fetch</dfn>` and reference it as either `<a>fetch</a>` or `<a>fetches</a>`.
Below are some more examples:

``` html
<dfn>get apple</dfn> can be referenced as
     <a>get apples</a>
     <a>get apple</a>
     <a data-lt="get apple">obtain apples</a>.
</dfn>

<dfn data-lt="pub">bar</a> can be referenced as
     <a>pub</a>
     <a>bar</a>
     <a>bars</a>
     <a data-lt="pub">drinking establishment</a>
     <a data-lt="bar">drinking establishment</a>
     <a data-lt="bars">drinking establishment</a>
</dfn>
```

If you want to selectively disable pluralization on certain `<dfn>`, you can make use of `data-lt-no-plural` attribute like:

``` html
<dfn data-lt-no-plural>html</dfn>
```