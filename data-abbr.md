# `data-abbr`

The `data-abbr` can be used on `dfn` elements that are used as abbreviations throughout your spec.

You can either set the abbreviation explicitly, or ReSpec can figure it out for you. 

## Example

```HTML
<!-- these two are the same --> 
<dfn data-abbr>user agent</dfn> 
<dfn data-abbr="">user agent</dfn> 

Becomes: <dfn>user agent</dfn> (<abbr title="user agent">UA</abbr>). 

<!-- Alternatively -->
<dfn data-abbr="PoS">point of sale</dfn>

Becomes: <dfn>point of sale</dfn> (<abbr title="point of sale">PoS</abbr>)
```  
