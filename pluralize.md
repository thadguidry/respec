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
<dfn>user agent</dfn> can be referenced as
     <a>user agents</a>
     <a>user agent</a>
     <a data-lt="user agent">browser</a>.
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

Note: We tried to make the pluralization as smart as possible, so that it won't break existing specs easily. It adds plurals only for those terms which are referenced. So in the above example if you don't reference `<a>fetches</a>` or `<a data-lt="fetches">fetch request</a>`, we won't add a pluralization of `fetch`.

If you want to selectively disable pluralization on certain `<dfn>`, you can make use of [`data-lt-no-plural`](data-lt-no-plural) attribute like:

``` html
<dfn data-lt-no-plural>html</dfn>
```