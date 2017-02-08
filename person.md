A person object (used for [`editors`](editors)  [`authors`](authors)) contains the following fields (most of the fields are straightforward). Only the `name` field is required.

<dl>
	<dt><code>name</code></dt>
	<dd>Name of the person</dd>
	<dt><code>mailto</code></dt>
	<dd>email address (turned into a mailto URL by respec)</dd>
	<dt><code>url</code></dt>
	<dd>home page of the author</dd>
	<dt><code>company</code></dt>
	<dd>company name</dd>
	<dt><code>companyUrl</code></dt>
	<dd>url of the company</dd>
	<dt><code>w3cid</code></dt>
	<dd>identifier of the persons’ W3C account, if applicable. (This id can be found through the <a href="https://www.w3.org/users/myprofile">“my profile”</a> URL that will be redirected to the user’s page; the id appears in the address bar).</dd>
	<dt><code>note</code></dt>
	<dd>any text in this field will appear at the end of the person’s identification in parenthesis</dd>
	<dt><code>extras</code></dt>
	<dd>refers to an array of extras (see below) objects, displayed at the end of the person's identification</dd>
</dl>

The “extras” are objects, each rendered as a separate `span` element, with the following fields:

<dl>
	<dt><code>name</code></dt>
	<dd>the content of the resulting <code>span</code>; this can contain html elements</dd>
	<dt><code>class</code></dt>
	<dd>a value of the class attribute added to the enclosing <code>span</code> (can be used for styling)</dd>
	<dt><code>href</code></dt>
	<dd>if set, the content within the enclosing <code>span</code> is turned into an active link pointing to the value of <code>href</code></dd>
</dl>

A simple example:

```js
{   
	name:       "Benjamin Young",
	company:    "John Wiley &amp; Sons, Inc.",
	companyURL: "http://www.wiley.com/",
	mailto:     "byoung@bigbluehat.com",
	w3cid:      65468
}
```

A more complex example, using the <code>extras</code> field to include a reference to the person’s ORCID id (with a logo):

```js
{              
	name:       "Ben De Meester",
	mailto:     "ben.demeester@ugent.be",
	company:    "Ghent University - iMinds - Data Science Lab",
	companyURL: "http://www.iminds.be/",
	url:        "http://users.ugent.be/~bjdmeest/",
	extras: [{
		name:  "<img src='figures/orcid_logo.png' alt='orcid logo'/>",
		href:  "http://orcid.org/0000-0003-0248-0987",
		class: "orcid"
	}],
	w3cid:      "73403"
}
```
