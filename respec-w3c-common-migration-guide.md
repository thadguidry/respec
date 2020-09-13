`respec-w3c-common` profile has been deprecated in favor of the `respec-w3c` profile. It will not receive any updates in future, including the support for W3C 2020 process.

## What do I need to do?

In most specs, you can migrate to the `respec-w3c` profile by simply replacing:

```html
<script src="https://www.w3.org/Tools/respec/respec-w3c-common" class="remove" defer></script>
```

with:

```html
<script src="https://www.w3.org/Tools/respec/respec-w3c" class="remove" defer></script>
```

If you face issues with above, please file an issue or get in touch using the spec-prod mailing list.

## Additional info

- [#2838](https://github.com/w3c/respec/pull/2838) explains the rationale behind deprecation.
- [#2889](https://github.com/w3c/respec/issues/2889) shows the deprecation status and upcoming changes.