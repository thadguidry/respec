# `no-unused-vars` lint rule

Enable this [lint rule](lint) to get a warning if a variable is defined but not used. The first use of variable (`<var>`) is considered its definition. Only unused variables in sections that contain a `<ol class="algorithm"></ol>` are reported.

For example:

```html
<section id="foo">
  <p>|varA| is defined here.</p>
  <ol class="algorithm">
    <li>|varA| is used here.</li>
    <li>|varB| is unused.</li>
    <li>|varC| is not unused as it's used again as |varC|.</li>
  </ol>
</section>
```

You'll receive a warning pointing you to the unused `<var>`s.

## Example of usage

```js
var respecConfig = {
  lint: {
    "no-unused-vars": true,
  },
};
```

## `data-ignore-unused` attribute

To ignore warning on per-variable basis, add a `data-ignore-unused` attribute to `<var>` as:

```html
<var data-ignore-unused>someUnusedVar</var> is unused, but warning is ignored.
```

Note that the [`|someVar|` shorthand](Shorthands-Guide#variables-in-algorithms) does not support this attribute.
