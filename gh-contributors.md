# `gh-contributors`

Add an element with `id="gh-contributors"` to show a list of people who have contributed to the GitHub repository.

The list is sorted by names (or GitHub username).


```html "example": "Show list of contributors and add links to their GitHub profiles."
<section>
  <h2>Contributors</h2>
  <ul id="gh-contributors">
    <!-- list of contributors will appear here,
         along with link to their GitHub profiles -->
  </ul>
</section>
```

```html "example": "Show names of contributors separated by commas."
<p>
  We'd also like to thank the following contributors: <span id=
  "gh-contributors"><!-- filled by ReSpec --></span>.
</p>
```
