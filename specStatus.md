The specification's type, which can be a maturity level (e.g. Working Draft) if it
is on a publication track but can also take other values for other types of documents
(e.g. "unofficial" for, well, unofficial documents).

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Meaning</th>
      <th>Must also include</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>base</td>
      <td>
        Just the basic template, not a specification. Use this for public documentation produced
        by a group that has no current clear plan to be officially published.
      </td>
      <td>None.
      </td>
    </tr>
    <tr>
      <td>MO</td>
      <td>
        Member-Only Document. Similar to base, but for documents that need to be clearly
        flagged as being restricted in access to W3C Members. This is rarely, if
        ever, useful.
      </td>
      <td>None.
      </td>
    </tr>
    <tr>
      <td>unofficial</td>
      <td>
        An unofficial draft. Use this if you're producing a document outside of W3C but want
        to use styles that match those of W3C specifications, for instance to propose
        a new document while hosting it on your own server. Note that this automatically
        licenses the content under CC-BY v3.0. If you want a different copyright,
        you will need to set the various copyright configuration options.
      </td>
      <td>None.
      </td>
    </tr>
    <tr>
      <td>ED</td>
      <td>
        Editor's Draft. Use this for documents that are maintained in the group's own repository.
      </td>
      <td>
        <ul>
          <li><a href="eddrafturi">edDraftURI</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>FPWD</td>
      <td>
        First Public Working Draft.
      </td>
      <td>None.
      </td>
    </tr>
    <tr>
      <td>WD</td>
      <td>
        Working Draft.
      </td>
      <td>
        <ul>
          <li><a href="previousPublishDate">previousPublishDate</a></li>
          <li><a href="previousmaturity">previousMaturity</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>LC</td>
      <td>
        Last Call Working Draft.
      </td>
      <td>
        <ul>
          <li><a href="previouspublishdate">previousPublishDatede</a></li>
          <li><a href="previousmaturity">previousMaturity</a></li>
          <li><a href="lcend">lcEnd</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>CR</td>
      <td>
        Candidate Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previouspublishdate">previousPublishDate</a></li>
          <li><a href="previousmaturity">previousMaturity</a></li>
          <li><a href="crend">crEnd</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>PR</td>
      <td>
        Proposed Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previouspublishdate">previousPublishDate</a></li>
          <li><a href="previousmaturity">previousMaturity</a></li>
        </ul>
    </tr>
    <tr>
      <td>PER</td>
      <td>
        Proposed Edited Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previouspublishdate">previousPublishDate</a></li>
          <li><a href="previousmaturity">previousMaturity</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>REC</td>
      <td>
        Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previouspublishdate">previousPublishDate</a></li>
          <li><a href="previousmaturity">previousMaturity</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>RSCND</td>
      <td>
        Rescinded Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previouspublishdate">previousPublishDate</a></li>
          <li><a href="previousmaturity">previousMaturity</a></li>
      </td>
    </tr>
    <tr>
      <td>FPWD-NOTE</td>
      <td>
        First Public Working Draft of a Note.
      </td>
      <td>None.
      </td>
    </tr>
    <tr>
      <td>WG-NOTE</td>
      <td>Working Group Note.</td>
      <td>None.
      </td>
    </tr>
    <tr>
      <td>BG-DRAFT, BG-FINAL</td>
      <td>Business Group Draft or Final Report.
      </td>
      <td>None.
      </td>
    </tr>
    <tr>
      <td>CG-DRAFT, CG-FINAL</td>
      <td>Community Group Draft or Final Report.
      </td>
      <td>None.
      </td>
    </tr>
    <tr>
      <td>IG-NOTE</td>
      <td>
        Interest Group Note.
      </td>
      <td>
        <ul>
          <li><a href="charterdisclosureuri">charterDisclosureURI</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Member-SUBM</td>
      <td>
        Member Submission. Note that ReSpec uses the default W3C copyright for this, but
        that you are entitled to retain your own copyright instead of transferring
        it to W3C. Use the copyright options for this.
      </td>
      <td>None.</td>
    </tr>
    <tr>
      <td>Team-SUBM</td>
      <td>Team Submission.</td>
      <td>None.
      </td>
    </tr>
    <tr>
      <td>draft-finding</td>
      <td>
        Draft TAG Finding. If you are one of the Nine and working on a Finding, this is for
        you. Note that for findings, ReSpec currently does not support very robust
        SotD generation (there doesn't seem to be solid rules for what constitutes
        a valid Finding SotD) so you'll have to specify your own. If there are rules
        that could be used, please report a bug. ReSpec further assumes some conventions
        for finding URLs that are not consistent throughout all of the TAG's repository,
        specifically that all findings live in "http://www.w3.org/2001/tag/doc/",
        that the latest version is at "http://www.w3.org/2001/tag/doc/shortName",
        and that the dated versions are at "shortName-YYYYMMDD".
      </td>
      <td>None.</td>
    </tr>
    <tr>
      <td>finding</td>
      <td>
        TAG Finding. Same as above, but final.
      </td>
      <td>None.
      </td>
    </tr>
  </tbody>
</table>

## Example
```js
var respecConfig = {
  specStatus: "unofficial",
}
```