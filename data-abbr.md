# `data-abbr`

The `data-abbr` can be used on `dfn` elements that are used as abbreviations throughout your spec.

You can either set the abbreviation explicitly, or ReSpec can figure it out for you.

## Example

<aside class="example" title="Generate abbreviation automatically.">

```html
<!-- these two are the same -->
<dfn data-abbr>user agent</dfn>
<dfn data-abbr="">user agent</dfn>
```

Becomes:

<samp>

```html
<dfn>user agent</dfn> (<abbr title="user agent">UA</abbr>).
```

</samp>

</aside>

You can also set the abbreviation by yourself.

<aside class="example" title="Explicitly specify an abbreviation.">

```html
<dfn data-abbr="PoS">point of sale</dfn>
```

Becomes:

<samp>

```html
<dfn>point of sale</dfn> (<abbr title="point of sale">PoS</abbr>)
```

</samp>
</aside>
