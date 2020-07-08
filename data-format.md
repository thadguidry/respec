# `data-format`

The `data-format` attribute allows sections, or other block-level elements, of your spec to be treated as markdown. It takes only one value: "markdown". Other formats may be supported in the future.

The following would generate a H2 element (which ReSpec would automatically number).

```markdown "example": "Interpret content of given section as markdown."
<section data-format="markdown">

## This is level 2

This is a paragraph with some `code`.

</section>
```
