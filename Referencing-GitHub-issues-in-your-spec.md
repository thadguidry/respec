To be able to reference GitHub issues in your spec, you need to add [`issueBase`](issueBase) and [`githubAPI`](githubAPI) properties to your ReSpec config:

```JS
  // e.g., https://www.github.com/w3c/manifest/issues/
  issueBase: "https://www.github.com/ORG/SPEC/issues/",

  // e.g. https://api.github.com/repos/w3c/manifest 
  githubAPI: "https://api.github.com/repos/ORG/SPEC",
```

Then, simply reference the issue you want to include:

```HTML
<div class="issue" data-number="363"></div>
```

ReSpec will automatically download the issue and include it for you. 

## Issue summary
You can also have ReSpec include a summary of all the issues in the spec by adding `section` element with id "issue-summary":

```HTML
<section id="issue-summary">
  <!-- Issues will magically be listed here! -->
</section>
```
