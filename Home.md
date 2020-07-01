ReSpec is a tool that makes writing specifications easier. ReSpec handles things like styling, referential integrity, bibliographical data, and other mundane tasks.

## User's guide

A [detailed user's guide](ReSpec-Editor's-Guide) is available.

If you want to hack on ReSpec, we also have a [Developers Guide](Developers-Guide).

## Getting up and running

All you need is an HTML document and to set some configuration options. Each configuration option is documented in this Wiki.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Replace me with a real title</title>
    <script src="https://www.w3.org/Tools/respec/respec-w3c" class="remove" defer></script>
    <script class="remove">
      var respecConfig = {
        specStatus: "ED",
        editors: [
          {
            name: "Your Name",
            url: "https://your-site.com",
          },
        ],
        github: "w3c/some-spec",
      };
    </script>
  </head>
  <body>
    <section id="abstract">
      <p>
        This is required.
      </p>
    </section>
    <section id="sotd">
      <p>
        This is required.
      </p>
    </section>
    <section id="conformance">
      <p>
        This is required for specifications that contain normative material.
      </p>
    </section>
    <section data-dfn-for="Foo">
      <h2><dfn>Foo</dfn> interface</h2>
      <pre class="idl">
      interface Foo {
        attribute Bar bar;
        void doTheFoo();
      };
      </pre>
      <p>The {{Foo}} interface is nice. Lets you do stuff.</p>
      <p>The <dfn>bar</dfn> attribute, returns 🍺.</p>
      <p>The <dfn>doTheFoo()</dfn> method, returns nothing.</p>
    </section>
  </body>
</html>
```

### Getting Support

The official support channel for ReSpec is [spec-prod@w3.org](mailto:spec-prod@w3.org). The [mailing list archives](http://lists.w3.org/Archives/Public/spec-prod/) are available. You can subscribe by sending email to [spec-prod-request@w3.org](mailto:spec-prod-request@w3.org?subject=subscribe) with "subscribe" as the subject line.
