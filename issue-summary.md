When present, the `issue-summary` id tells ReSpec to gather all issues found throughout your spec and display them. 

### Example of usage

```HTML
<div class="issue" data-number="123" title="This is issue!">
  <p>It clear that this is an issue.</p>
</div>  
<section class="appendix" id="issue-summary">
  <!-- A list of issues will magically appear here -->
</section>
```