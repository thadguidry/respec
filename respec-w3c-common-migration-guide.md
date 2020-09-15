The `respec-w3c-common` ReSpec profile has been deprecated and will not receive any updates in future, including the support for [W3C 2020 Process](https://www.w3.org/2020/Process-20200915/).

## What do I need to do?

In most specs, you can migrate to the `respec-w3c` profile by simply replacing:

```html
<script src="https://www.w3.org/Tools/respec/respec-w3c-common" class="remove" defer></script>
```

with:

```html
<script src="https://www.w3.org/Tools/respec/respec-w3c" class="remove" defer></script>
```

If you face issues with above, please file an issue or get in touch the W3C Slack's [#respec](https://w3ccommunity.slack.com/) channel, or via the [spec-prod mailing list](https://lists.w3.org/Archives/Public/spec-prod/).

If you wish to not update, please download a desired version of `respec-w3c-common` from npm or GitHub repository and self-host it.

## Additional info

- [#2838](https://github.com/w3c/respec/pull/2838) explains the rationale behind deprecation.
- [#2889](https://github.com/w3c/respec/issues/2889) shows the deprecation status and upcoming changes.