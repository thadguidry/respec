# `level`

"Leveled" specs are generally specs that build on each other in a backwards compatible way. They generally include the text from each previous level. This is used a lot by the W3C's CSS Working Group.

Note: Refrain using a level unless you've considered all the implications of doing so. Levels can be very hard to maintain, specially if levels are evolving concurrently.

The `level` configuration options automatically appends the level to your spec’s title and [shortName](shortName). The level is an integer value greater than or equal to 0.

## Examples of usage

```js "example": "Set the current specification to level 2."
var respecConfig = {
  level: 2,
  shortName: "payment-request",
};
```

Which results in:

- `Level 2` is appended to the title, so `Payment Request Level 2`.
- The short-name becomes `payment-request-2`.

Which would render as, for example:

<img width="1386" height="460" loading="lazy" alt="Screenshot 2020-02-21 18 54 02" src="https://user-images.githubusercontent.com/870154/75014932-91dd6c80-54db-11ea-8890-08ab2f6ac7c3.png">
