A person object is a JavaScript object literal with the following properties: 

<dl>
  <dt><code>name</code> (required)</dt>
  <dd>
    The name of the person.
  </dd>
  <dt><code>url</code></dt>
  <dd>
    The URL for the person, can be used to point to the person's personal site.
  </dd>
  <dt><code>company</code></dt>
  <dd>
    The company for which the person is working.
  </dd>
  <dt><code>companyURL</code></dt>
  <dd>
    The URL for the above company.
  </dd>
  <dt><code>mailto</code></dt>
  <dd>
    An email with which to contact the person.
  </dd>
  <dt><code>note</code></dt>
  <dd>
    Additional information on the person, often used to indicate a former employer (if
    the person switched companies during edition) or to clarify that an editor
    is no longer active even if her name is still attached to the document out
    of respect for her past contributions.
  </dd>
  <dt><code>w3cid</code></dt>
  <dd>
    Numeric id of the editor profile in W3C (W3C account holders can find their id by
    visiting their <a href="https://www.w3.org/users/myprofile">W3C profile</a>);
    it is used by the W3C publication system to associate specifications with their
    editors.
  </dd>
  <dt><code>extras</code></dt>
  <dd>Array of objects consisting of the <code>name</code>, <code>href</code>, and
    <code>class</code> entries. The generated content is a sequence of elements
    the form <code>&lt;span class="<i>class</i>&gt;&lt;a href="
    <i>href</i>"&gt;<i>name</i>&lt;/a&gt;&lt;/span&gt;</code>
    added to the end of the person's entry. Can be used to add, e.g., the twitter
    account, ORCID ID, etc., of the person.</dd>
</dl>

## Example
This example shows a group of person objects being used to define the editors of a spec. 

```JS
var respecConfig = {
    editors: [{
      name: "Marcos Caceres",
      company: "Mozilla Corporation",
      companyURL: "https://mozilla.org/",
      w3cid: 39125
    }, {
      name: "Kenneth Rohde Christiansen",
      company: "Intel Corporation",
      companyURL: "http://intel.com",
      w3cid: 57705,
    }, {
      name: "Mounir Lamouri",
      company: "Google Inc.",
      companyURL: "https://google.com",
      w3cid: 45389,
    }, {
      name: "Anssi Kostiainen",
      company: "Intel Corporation",
      companyURL: "http://intel.com",
      w3cid: 41974,
    }],
}
```