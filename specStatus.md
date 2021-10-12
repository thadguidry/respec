# `specStatus`

Specifications can be given a status (e.g. a Working Draft, an Unofficial document, etc). However, what that status means is up to the publisher, or standards body, that is publishing the specification. 

```js "example": "Set specification's status to 'unofficial'."
var respecConfig = {
  specStatus: "unofficial",
};
```

<table>
  <caption>Default Status</caption> 
  <thead>
    <tr>
      <th>Value</th>
      <th>Meaning</th>
      <th>Must also include</th>
    </tr>
  </thead>
  <tbody>
    <tr id="specStatus-base">
      <td>base (default)</td>
      <td>
        Just the basic template, not a specification. Use this for public documentation produced
        by a group that has no current clear plan to be officially published.
      </td>
      <td>None.
      </td>
    </tr>
    <tr id="specStatus-unofficial">
      <td>unofficial</td>
      <td>
        An unofficial draft. Use this if you're producing a document
        to use styles that match those of W3C specifications, for instance to propose
        a new document while hosting it on your own server. Note that this automatically
        licenses the content under CC-BY v3.0. If you want a different copyright,
        you will need to set the various copyright configuration options.
      </td>
      <td><ul>
          <li><a href="xref">xref</a> (required only if linking built-in IDL types).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


## W3C 

For W3C documents, the following status are supported.

<table>
  <caption>W3C Status</caption> 
  <thead>
    <tr>
      <th>Value</th>
      <th>Meaning</th>
      <th>Must also include</th>
    </tr>
  </thead>
  <tbody>
    <tr id="specStatus-mo">
      <td>MO</td>
      <td>
        Member-Only Document. Similar to base, but for documents that need to be clearly
        flagged as being restricted in access to W3C Members. This is rarely, if
        ever, useful.
      </td>
      <td>None.
      </td>
    </tr>
    <tr id="specStatus-ed">
      <td>ED</td>
      <td>
        Editor's Draft. Use this for documents that are maintained in the group's own repository.
      </td>
      <td>
        <ul>
          <li>Note: You can exclude the "Latest Published Version" link by using <code>latestVersion: null</code> (See <a href="https://github.com/w3c/respec/pull/2968">#2968</a> for details).</li>
        </ul>
      </td>
    </tr>
    <tr id="specStatus-fpwd">
      <td>FPWD</td>
      <td>
        First Public Working Draft.
      </td>
      <td>None.
      </td>
    </tr>
    <tr id="specStatus-wd">
      <td>WD</td>
      <td>
        Working Draft.
      </td>
      <td>
        <ul>
          <li><a href="previousPublishDate">previousPublishDate</a></li>
          <li><a href="previousMaturity">previousMaturity</a>.</li>
        </ul>
      </td>
    </tr>
    <tr id="specStatus-lc">
      <td>LC</td>
      <td>
        Last Call Working Draft.
      </td>
      <td>
        <ul>
          <li><a href="previousPublishDate">previousPublishDate</a></li>
          <li><a href="previousMaturity">previousMaturity</a></li>
          <li><a href="lcEnd">lcEnd</a></li>
        </ul>
      </td>
    </tr>
    <tr id="specStatus-ld">
      <td>LD</td>
      <td>
        Living Document.
      </td>
      <td>
      </td>
    </tr>
    <tr id="specStatus-ls">
      <td>LS</td>
      <td>
        Living Standard.
      </td>
      <td>
      </td>
    </tr>
    <tr id="specStatus-cr">
      <td>CR</td>
      <td>
        Candidate Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previousPublishDate">previousPublishDate</a></li>
          <li><a href="previousMaturity">previousMaturity</a></li>
          <li><a href="crEnd">crEnd</a></li>
          <li><a href="implementationReportURI">implementationReportURI</a></li>
        </ul>
      </td>
    </tr>
      <td>CRD</td>
      <td>
        Candidate Recommendation Draft.
      </td>
      <td>
        Same as CR above.
      </td>
    </tr>
    <tr id="specStatus-pr">
      <td>PR</td>
      <td>
        Proposed Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previousPublishDate">previousPublishDate</a></li>
          <li><a href="previousMaturity">previousMaturity</a></li>
        </ul>
    </tr>
    <tr id="specStatus-per">
      <td>PER</td>
      <td>
        Proposed Edited Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previousPublishDate">previousPublishDate</a></li>
          <li><a href="previousMaturity">previousMaturity</a></li>
        </ul>
      </td>
    </tr>
    <tr id="specStatus-rec">
      <td>REC</td>
      <td>
        Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previousPublishDate">previousPublishDate</a></li>
          <li><a href="previousMaturity">previousMaturity</a></li>
        </ul>
      </td>
    </tr>
    <tr id="specStatus-rscnd">
      <td>RSCND</td>
      <td>
        Rescinded Recommendation.
      </td>
      <td>
        <ul>
          <li><a href="previousPublishDate">previousPublishDate</a></li>
          <li><a href="previousMaturity">previousMaturity</a></li>
      </td>
    </tr>
    <tr id="specStatus-fpwd-note">
      <td>FPWD-NOTE</td>
      <td>
        First Public Working Draft of a Note.
      </td>
      <td>None.
      </td>
    </tr>
    <tr id="specStatus-wg-note">
      <td>WG-NOTE</td>
      <td>Working Group Note.</td>
      <td>None.
      </td>
    </tr>
    <tr id="specStatus-bg-draft">
      <td id="specStatus-bg-final">BG-DRAFT, BG-FINAL</td>
      <td>Business Group Draft or Final Report.
      </td>
      <td>None.
      </td>
    </tr>
    <tr id="specStatus-cg-draft">
      <td id="specStatus-cg-final">CG-DRAFT, CG-FINAL</td>
      <td>Community Group Draft or Final Report.
      </td>
      <td>None.
      </td>
    </tr>
    <tr id="specStatus-ig-note">
      <td>IG-NOTE</td>
      <td>
        Interest Group Note.
      </td>
      <td>
        <ul>
          <li><a href="charterDisclosureURI">charterDisclosureURI</a></li>
        </ul>
      </td>
    </tr>
    <tr id="specStatus-member-subm">
      <td>Member-SUBM</td>
      <td>
        Member Submission. Note that ReSpec uses the default W3C copyright for this, but
        that you are entitled to retain your own copyright instead of transferring
        it to W3C. Use the copyright options for this.
      </td>
      <td>
       <ul>
          <li><a href="submissionCommentNumber">submissionCommentNumber</a></li>
       </ul>
      </td>
    </tr>
    <tr id="specStatus-draft-finding">
      <td>draft-finding</td>
      <td>
        Draft TAG Finding. If you are one of the Nine and working on a Finding, this is for
        you. Note that for findings, ReSpec currently does not support very robust
        SotD generation (there doesn't seem to be solid rules for what constitutes
        a valid Finding SotD) so you'll have to specify your own. If there are rules
        that could be used, please report a bug. ReSpec further assumes some conventions
        for finding URLs that are not consistent throughout all of the TAG's repository,
        specifically that all findings live in "https://www.w3.org/2001/tag/doc/",
        that the latest version is at "https://www.w3.org/2001/tag/doc/shortName",
        and that the dated versions are at "shortName-YYYYMMDD".
      </td>
      <td>None.</td>
    </tr>
    <tr id="specStatus-editor-draft-finding">
      <td>editor-draft-finding</td>
      <td>
        Editor Draft TAG Finding. If you're working on a TAG document maintained on GitHub rather than
        in the old datedspace system, use this.
      </td>
      <td>None.</td>
    </tr>
    <tr id="specStatus-finding">
      <td>finding</td>
      <td>
        TAG Finding. Same as above, but final.
      </td>
      <td>None.
      </td>
    </tr>
  </tbody>
</table>

