# `issue`

Provided you've added the [`github`](github) configuration option, you can easily reference GitHub issues in your spec as:

```html "example": "Reference GitHub issue #363 in-place."
<div class="issue" data-number="363"></div>
```

ReSpec will automatically download the issue details and include them for you.

Additionally, you can gather all referenced issues in a list with [`issue-summary`](issue-summary).
