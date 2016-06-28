Can be used in conjunction with the configuration option [`issueBase`](issueBase) and with a paragraph with a class set to `issue`. The issue number is added to the header of the paragraph, and linked to the issue by concatenating the values of `issueBase` and `data-number`. This is particularly useful when using GitHub to link into the discussion thread of a particular issue. 

### Examples
A typical example for a file in the Github repository https:/github.com/w3c/dpub-pwd would include, for example:
```HTML
<script>
var respecConfig = {
  "issueBase": "https:/github.com/w3c/dpub-pwd/issues",
};
</script>
<p class="issue" data-number="1">
Will be automatically entitled "ISSUE 1", with a link to
the corresponding Github issue.
</p>
``` 