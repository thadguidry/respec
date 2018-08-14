This issue documents the work done by @sidvishnoi (Sudhanshu Vishnoi) during his GSoC internship and serves as the final official submission.

## tl;dr

- [[Commits](https://github.com/w3c/respec/search?o=desc&q=author%3Asidvishnoi+author-date%3A2018-04-24..2018-08-14&s=committer-date&type=Commits)]
- Issues: [[Opened](https://github.com/w3c/respec/search?q=author%3Asidvishnoi+is%3Aissue+created%3A2018-04-24..2018-08-14&state=open&type=Issues)] [[Closed](https://github.com/w3c/respec/search?q=author%3Asidvishnoi+is%3Aissue+created%3A2018-04-24..2018-08-14&state=closed&type=Issues)] [[Involved](https://github.com/w3c/respec/search?q=involves%3Asidvishnoi+is%3Aissue+created%3A2018-04-24..2018-08-14&type=Issues)]
- Pull Requests: [[Merged](https://github.com/w3c/respec/search?q=author%3Asidvishnoi+type%3Apr+is%3Amerged+created%3A2018-04-24..2018-08-14&unscoped_q=author%3Asidvishnoi+type%3Apr+is%3Amerged+created%3A2018-04-24..2018-08-14&type=Issues)] [[Closed](https://github.com/w3c/respec/search?q=author%3Asidvishnoi+type%3Apr+is%3Aunmerged+created%3A2018-04-24..2018-08-14&state=closed&type=Issues)] [[Pending](https://github.com/w3c/respec/search?q=author%3Asidvishnoi+type%3Apr+is%3Aunmerged+created%3A2018-04-24..2018-08-14&state=open&type=Issues)]
- Wiki: [[caniuse](https://github.com/w3c/respec/wiki/caniuse)] [[lint](https://github.com/w3c/respec/wiki/lint)] [[pluralize](https://github.com/w3c/respec/wiki/pluralize)] [[Auto-linking external references](https://github.com/w3c/respec/wiki/Auto-linking-external-references)]
- It was a great experience! I hope to contribute more in future.

During my GSoC, apart from code refactor, documentation, participating in code reviews & issues, I worked on following features:

## Auto-linking external references :sparkles: :sparkles:

This was my primary GSoC project. The design proposal, checklist and details can be seen here in [#1662](https://github.com/w3c/respec/issues/1662).

We were able to create a working version for this feature during the summer by using a [mock API](https://specxref-beta.herokuapp.com/) and the ReSpec implementation is fairly complete.

What remains is: integrating the Shepherd database (precisely the API) in ReSpec. The API requirements are documented here in [#1757](https://github.com/w3c/respec/issues/1757). It would be fairly straight-forward, likely, just changing the API URL in [src/core/xref.js#10](https://github.com/w3c/respec/blob/523d9dd6336d1a7ef231ef48c3757fbb65bbdb0e/src/core/xref.js#L10,L12) and a few tweaks. I'll be available to help with issues and bug fixes for this feature in future.

The WebIDL linking part shall be finished this week after doing some more testing (See https://github.com/w3c/respec/pull/1765).

[[Documentation]](https://github.com/w3c/respec/wiki/Auto-linking-external-references)


## Automatic pluralization

Earlier in ReSpec, we were making use of `data-lt` attributes to define alternative pluralized terms for a `dfn`, so they can be linked. For example, `<dfn data-lt="user agents">user agent</dfn>`, we can link to it either as `<a>user agent</a>` or `<a>user agents</a>`. This caused editors to write additional markup which made the source document a bit uglier and slightly painful to write. Now, ReSpec can automatically (and smartly) add the plural terms by itself. [[Documentation](https://github.com/w3c/respec/wiki/pluralize)].

## Normalize citations

If in a document, we cite a spec, say DOM, in multiple ways such as `[[DOM]]`, `[[dom]]`, `[[dom4]]`, `[[DOM4]]` etc, we used to have duplicate citations in the references section. This has been fixed now and only the first used reference is listed (linking works same as before). We now have a more stable and cleaner bibliographic linking.

## Can I Use integration

We started work on this feature before GSoC, but it was finished during first week of GSoC. This lets us have a dynamic browser support table for the feature that the specification is for. [[Documentation](https://github.com/w3c/respec/wiki/caniuse)]
