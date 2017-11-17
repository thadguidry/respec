## `data-sort` attribute
By using `data-sort="ascending"` or `"descending"`, ReSpec can shallow sort lists of type `ol`, `ul`, and `dl` elements. Shallow sort meaning that only the first level of the list is sorted, and any nested lists are left alone. This is nice for Dependency sections, IDL member definitions, etc.

You can also just write `data-sort` and exclude the attribute value, and it will default to "ascending" (i.e., from A-to-Z).
 
## Examples of usage

### Regular list
The following sorts to "Z, W, A". 

```HTML
<ul data-sort="descending">
  <li>W</li>
  <li>Z</li>
  <li>A</li>
</ul>
```

### Definition list
Sorting a definition list ("ascending" by default, so A-to-0Z locale dependent). The corresponding `dd`s for any `dt` are also moved, but not sorted. 

```HTML
<dl data-sort>
  <dt>Bananas</dt>
  <dd>Are the best!</dd>
  <dt>Zebra</dt>
  <dd>Are quite stripy.</dd>
  <!--
    The following three elements are first after sorting
  -->
  <dt>Apple</dt>
  <dd>Are delicious 🍎.</dd>
  <dd>They really really are!🍏.</dd>
</dl>
```
