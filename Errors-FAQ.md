## Couldn't match TERM to anything in the document or in any other document cited in this specification {#term-not-found}

<img src="https://user-images.githubusercontent.com/8426945/87762934-80518400-c831-11ea-93c5-fda43cd747f3.png" alt="Screenshot of ReSpec definition  linking error" width="1177" height="64" loading="lazy">

### Is the term defined in some other document/specification? {#external-term-not-found}

1. Search for the term at [XRef Search UI](https://respec.org/xref/). If the term is found:
   1. If the error message above does not contain the specification where term is defined, add the specification shortname to [`xref`](xref)'s specs. Alternatively, add the shortname as `data-cite="SHORTNAME"` to a parent of the `<a>` element with linking error.
   1. Otherwise, that means the error is due to an invalid/missing for-context (term is defined in-context of some other term) or type-context (like linking a WebIDL term using syntax for linking concepts). Copy-paste the "How to Cite" of the relevant match from [XRef Search UI](https://respec.org/xref/).
1. If the term is not found:
   1. Try looking for similar terms. The term might not be defined exactly. Use the [shorthands syntax](Shorthands-Guide) to alias the term in prose if needed.
   1. Check if the term is exported from the other spec, i.e., the `<dfn>` should have a `data-export` attribute.
   1. If the term is not exported, ask the specification editors to export it. Feel free to ping ReSpec maintainers if you need help.
   1. If the term is exported but not found through XRef Search UI, then the specification might not be in our database. Please file an issue at ReSpec repository or contact ReSpec maintainers by other means.
      1. Terms from ECMA/IETF specifications are not presently available in the terms database. Use the [`data-cite`](data-cite) attribute to reference those terms.

### Is the term defined in same document? {#local-term-not-found}

1. If it's a WebIDL term:
   1. Remember that WebIDL terms are case-sensitive, so make sure the linking text is same as definition text.
   1. Use the [WebIDL linking syntax](Shorthands-Guide#webidl-shorthands).
   1. Provide a proper for-context 1. using either [`data-link-for`](data-link-for) or the WebIDL linking syntax.
1. If it's not a WebIDL term (i.e., it's a "concept"):
   1. Use the [Concepts linking syntax](Shorthands-Guide#concept-shorthands)
   1. Provide proper for-context.
