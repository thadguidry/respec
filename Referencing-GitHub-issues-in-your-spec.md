To be able to reference GitHub issues in your spec, you need to add [`github`](github) to your ReSpec config:

```JS
  github: "https://www.github.com/ORG/SPEC/",
```

Then, simply reference the issue you want to include:

```HTML
<div class="issue" data-number="363"></div>
```

ReSpec will automatically download the issue and include it for you. 

## Issue summary
You can also have ReSpec include a summary of all the issues in the spec by adding `section` element with id "issue-summary":

```HTML
<section class="appendix" id="issue-summary">
  <!-- Issues will magically be listed here! -->
</section>
```