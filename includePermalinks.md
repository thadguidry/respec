Add a 'permalink' to each non-introductory section of your document, assuming the section or heading element has an explicit ID. The permalink will show as an indicator on the same line as the section heading, by default immediately after the heading text. Options include: 

<dl>
  <dt>true</dt>
  <dd>Includes permalinks using defaults.</dd>
  <dt>permalinkSymbol</dt>
  <dd>The character(s) to use for the permalink indicator. The default symbol is '§'.</dd>
  <dt>permalinkEdge</dt>
  <dd>Setting this to true tells the system to place the permalink indicator on the right edge of the page. The default is to put the indicator immediately after the heading text.</dd>
  <dt>permalinkHide</dt>
  <dd>Setting this to true tells the system to hide the permalink symbol unless the heading is being hovered over. The default is to show the symbol at all times.</dd>
</dl>

If you do not want a section to have a permlink indicator, a class of "nolink" on that heading will exclude it.

### Example

```JS
var respecConfig = {
  includePermalinks: true,
  permalinkEdge: true,
  permalinkHide: false,
  permalinkSymbol: "🔗",
}
```
