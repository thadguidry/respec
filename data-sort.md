# `data-sort`

By using `data-sort="ascending"` or `"descending"`, ReSpec can shallow sort lists of type `ol`, `ul`, and `dl` elements. Shallow sort meaning that only the first level of the list is sorted, and any nested lists are left alone. This is nice for Dependency sections, IDL member definitions, etc.

You can also just write `data-sort` and exclude the attribute value, and it will default to "ascending" (i.e., from A-to-Z).

## Regular list

```html "example": "Sorting an unordered list in descending order."
<ul data-sort="descending">
  <li>W</li>
  <li>Z</li>
  <li>A</li>
</ul>
```

becomes:

<samp>

```html
<ul>
  <li>Z</li>
  <li>W</li>
  <li>A</li>
</ul>
```

</samp>

## Definition list

Sorting a definition list ("ascending" by default, so A-to-0Z locale dependent). The corresponding `dd`s for any `dt` are also moved, but not sorted.

```html "example": "Sorting a definition list in ascending order of definition terms."
<dl data-sort>
  <dt>Bananas</dt>
  <dd>Are the best!</dd>

  <dt>Zebra</dt>
  <dd>Are quite stripy.</dd>

  <dt>Apples</dt>
  <dd>🍎s are delicious.</dd>
  <dd>🍏s are great in a pie!.</dd>
</dl>
```

becomes:

<samp>

```html
<dl>
  <dt>Apples</dt>
  <dd>🍎s are delicious.</dd>
  <dd>🍏s are great in a pie!.</dd>

  <dt>Bananas</dt>
  <dd>Are the best!</dd>

  <dt>Zebra</dt>
  <dd>Are quite stripy.</dd>
</dl>
```

</samp>
