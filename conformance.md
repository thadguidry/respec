``1. ``When present, the `conformance` id tells ReSpec to add the standard boilerplate to the document:

> As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.
>
> The key words MAY, MUST, MUST NOT, NOT RECOMMENDED, RECOMMENDED, SHOULD, and SHOULD NOT are to be interpreted as described in [RFC2119]. 

The author can add any additional conformance clause(s) which will follow this boilerplate.

This section is required for specifications that contain normative material.

### Example of usage

```HTML
<section id="conformance">
  <!-- boilerplate will be added here -->
  <p>The specification specific conformance text…</p>
</section>
```