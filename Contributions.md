# Contributions from the Community

If you have some clever ways that you are extending ReSpec, please share them here!

## Reconciling mutual references of editors' drafts before publication

(All examples are from the [CSVW WG repo](https://github.com/w3c/csvw).)

The problem to be solved is as follows: when several specs are developed in parallel, it is a good idea to use, for mutual references, the ``github.io`` URI-s. That ensures that the editors' drafts are always correct in terms of mutual references, too. However, when publishing the documents, all those references must be exchanged against the final, `/TR` URI-s. That process, when done manually, is boring and error prone. 

The [``replace-ed-uris.js``](https://github.com/w3c/csvw/replace-ed-uris.js) script solves the issue by making a conversion at the time when the source is saved into (X)HTML. Ie, the final, non-respec version (which is, eventually, published on `/TR`) will be o.k.. Here is how to use it:

* Create a separate file with the 'conversions' array. See, e.g., [local-biblio.js](https://github.com/w3c/csvw/blob/gh-pages/local-biblio.js) for an example.
* Include a reference to the conversion array and the script the ``respec`` code. E.g.:

 ```
 <script class="remove" src="local-biblio.js"></script>
 <script class="remove" src="https://www.w3.org/Tools/respec/respec-w3c-common"></script>
 <script class="remove" src="replace-ed-uris.js"></script>
```

The replacement function will be automatically executed when the ``respec`` source is saved in an (X)HTML file. Note that

* Links in the header part will *not* be changed. That part is usually generated automatically by ``respec``, and the reference to the editor's draft must stay unchanged
* The text content of an ``<a>`` element will also be converted (if needed). This means that the reference list may also use the ``github.io`` address (as it should...)

The JS code itself is actually shorter than this description:-)

(Contributed by @iherman)

