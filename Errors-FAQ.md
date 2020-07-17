This page lists some common ReSpec errors and their mitigation.

<h2 id="error-term-not-found">Couldn't match TERM to anything in the document or in any other document cited in this specification</h2>

![Screenshot of a ReSpec definition linking error](https://user-images.githubusercontent.com/8426945/87762934-80518400-c831-11ea-93c5-fda43cd747f3.png)

To fix this issue, follow these steps:

### Is the term defined in some other document/specification?

1. Search for the term at [XRef Search UI](https://respec.org/xref/). If the term is found:
   1. If the error message above does not contain the specification where term is defined, add the specification shortname to [`xref`](xref)'s specs.
   1. Otherwise, the error is due to an invalid for-context (i.e., term is defined in-context of some other term) or type-context (like referencing an exception using syntax meant for referencing concepts). Copy-paste the "How to Cite" of the relevant match from [XRef Search UI](https://respec.org/xref/).
1. If the term is not found:
   1. Try searching for similar terms. The term might not be defined exactly. Use the [shorthands syntax](Shorthands-Guide) to alias the term in prose if needed.
   1. Check if the term is exported from the other spec, i.e., the `<dfn>` should have a `data-export` attribute.
      1. If the term is not exported, ask the specification editors to export it. Feel free to ping ReSpec maintainers if you need help.
      1. If the term is exported but not found through XRef Search UI, then the specification might not be in [our database](https://respec.org/xref/meta/specs). Please file an issue at ReSpec repository or contact ReSpec maintainers by other means.
         1. Note: Terms from ECMA/IETF specifications are not presently available in the terms database. Use the [`data-cite`](data-cite) attribute to reference those terms.

### Is the term defined in same document?

1. If it's a WebIDL term:
   1. Remember that WebIDL terms are case-sensitive.
   1. Use the [WebIDL linking syntax](Shorthands-Guide#user-content-webidl-shorthands).
   1. Provide a proper for-context using either WebIDL linking syntax or [`data-link-for`](data-link-for).
1. If it's not a WebIDL term (i.e., it's a "concept"):
   1. Use the [Concepts linking syntax](Shorthands-Guide#user-content-concept-shorthands)
   1. Provide proper for-context.
