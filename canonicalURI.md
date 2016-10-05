# THIS DOCUMENTS AN UNRELEASED FEATURE 
This will become available when https://github.com/w3c/respec/pull/938 is merged. 

The `canonicalURI` let's you indicate either a URL or a keyword to use as the "canonical" location of the document is. Search engines, like Google, can make use of this information to help determine which version of document is authoritative. 

### Keywords
Using the following values automatically generates a corresponding URL. However, you are free to include your own URL.  
 
 * "edDraft" - Use the edDraftURI as the canonical URL.
 * "TR" - Use the "TR" location for this document, using the `shortName`

## Example of usage
The following will result in a canonical URL of `https://www.w3.org/TR/fooAPI`.

```JS
const respecConfig = {
  "shortName": "fooAPI",
  "canonicalURI": "TR",
}
```