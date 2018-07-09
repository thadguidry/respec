## `no-headingless-sections` lint rule

Enable this [lint rule](lint) to get a warning if there is some `<section>` in the document that does not start with a heading element (`h1`-`h6`).

For example:
``` html
<section id="foo">
  <!-- should've begun with a heading -->
  <p>content begins</p>
</section>
```
You'll receive a warning pointing you to the heading-less sections.

## Example of usage

``` js
var respecConfig = {
  lint: {
    "no-headingless-sections": true,
  },
}
```

## Example Warning

<a href="https://user-images.githubusercontent.com/8426945/42472700-e526c8b0-83df-11e8-9a7c-afb38c2f2e45.png"><img alt="example warning for no-headingless-sections" src="https://user-images.githubusercontent.com/8426945/42472700-e526c8b0-83df-11e8-9a7c-afb38c2f2e45.png" width="400"></a>

<a href="https://user-images.githubusercontent.com/8426945/42472751-1832d186-83e0-11e8-954a-1134b9bd483f.png"><img alt="developer console with warning for no-headingless-sections" src="https://user-images.githubusercontent.com/8426945/42472751-1832d186-83e0-11e8-954a-1134b9bd483f.png" width="400"></a>
