When set to true, automatically generated legacy DOM-style sections (Attributes and Methods) are removed. This is preferred by modern specifications. 

If you are migrating a document that uses the legacy DOM-style, you need to manually move the prose from Attributes and Methods sections and put it below the IDL markup definition into its own paragraph(s). 

Additionally, you need to link the IDL members back to the prose; ReSpec automatically generates fragment identifiers that start with #widl-, and you must manually add corresponding ids to appropriate parts in your prose.

### Example
```JS
var respecConfig = {
  noLegacyStyle: true,
}
```