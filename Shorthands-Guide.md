# Shorthands

## What are shorthands?

Similar to markdown, shorthands are custom ways of writing things that trigger special behavior in ReSpec. The most commonly used one you've likely seen is `[[Reference]]`. Shorthands save you time and work: you write _a lot less HTML_, and ReSpec does all the linking and error checking for you.

Each of these special character combinations, as well as what behavior they trigger, are detailed below.

<small>Note that only WebIDL identifiers are case sensitive.</small>

| **Type**                                         | **Syntax**              | **Examples**                                          |
| ------------------------------------------------ | ----------------------- | ----------------------------------------------------- |
| [WebIDL](#webidl-shorthands)                     | `{{WebIDLThing}}`       | `{{PaymentRequest}}`<br>`{{PaymentRequest/show()}}`   |
| [Concepts in specs](#concept-shorthands)         | `[=normal link=]`       | `[=queue a task=]`                                    |
| [Variable in an algorithm](#variable-shorthands) | `\|variable:Type\|`     | Let `\|p:Promise\|` be a new `{{Promise}}`            |
| [HTML elements](#element-shorthands)             | `[^element^]`           | `[^iframe^]`                                          |
| [HTML attributes](#element-shorthands)           | `[^element/attribute^]` | `[^iframe/allow^]`                                    |
| [References](#reference-shorthands)              | `[[shortName]]`         | `[[RFC2119]]`                                         |
| [Expansions](#reference-shorthands)              | `[[[#some-id]]]`        | `[[[#example-2]]]` expands and links to `"Example 2"` |

By design, we also share a lot of syntax with the [BikeShed](https://github.com/tabatkins/bikeshed/) document processor. This makes it easier for everyone to edit both ReSpec and BikeShed specifications at the same time.

## WebIDL {#webidl-shorthands}

On the Web, and in Web Standards, WebIDL is a meta language that we use to define Javascript APIs. Please see our [WebIDL Guide](WebIDL-Guide). Please see the [WebIDL spec](https://heycam.github.io/webidl) for more info.

To link to something in WebIDL, you need to know its `identifier`. An `identifier` is the name of the interface, dictionary, or enum.

For example, `{{PaymentRequest}}` links to the `PaymentRequest` interface.

You can link attributes, methods, or members by using the interface name, `/`, and the name of the thing you want to link to. For example, `{{PaymentRequest/show()}}` links to the `show()` operation of the `PaymentRequest` interface.

### Examples

| **Type**                                        | **Syntax**                                                              | **Examples**                                                               |
| ----------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Interface], [Dictionary], [Enum] or [IDL type] | `{{Identifier}}`                                                        | `{{PaymentRequest}}` <br> `{{unrestricted double}}` <br> `{{long long}}`   |
| [Attribute]                                     | `{{Identifier/attributeName}}`                                          | `{{PaymentRequest/id}}`                                                    |
| [Operation or Method]                           | `{{Identifier/methodName()}}` <br> `{{Identifier/methodName(someArg)}}` | {`{PaymentRequest/show()}}` <br> `{{PaymentRequest/show(detailsPromise)}}` |
| [Static Attribute]                              | `{{Identifier.attribute}}`                                              | `{{SomeInterface.someAttribute}}`                                          |
| [Static Operation or Static Method]             | `{{Identifier.methodName()}}` <br> `{{Identifier.methodName(arg)}}`     | `{{URL.createObjectURL()}}` <br> `{{URL.createObjectURL(obj)}}`            |
| [Enum Value]                                    | `{{Identifier/"value"}}`                                                | `{{PaymentComplete/"success"}}`                                            |
| [DOM Exception]                                 | `{{"Identifier"}}`                                                      | `{{"NotAllowedError"}}`                                                    |

## Defining Concepts {#concept-shorthands}

Concepts include: ideas, named algorithms, useful terms, and/or non-webIDL things that are defined in a spec.

Basically, "defined" means that a thing is within `<dfn>` tags. For example, `<dfn>success</dfn>` and `<dfn>the steps to make a great meal</dfn>` are defined concepts.

### Linking to concepts

The syntax is `[=concept you want to link to=]`. For example, `[=queue a task=]` and `[=fire an event=]`.

To link to a concept in another spec, you need to use the [xref](xref) configuration option, and simply cite the spec you want to link to:

```html
<p data-cite="HTML DOM">
  You can [=queue a task=] to [=fire an event=] named `"respec-is-amazing"`.
</p>
```

See [xref](xref) for more information.

### Plural Forms

ReSpec supports automatically linking to plural forms. Thus, `[=fruits=]` links to the singular concept of `fruit`, even across specs.

### Aliasing concepts

**Please note that aliasing is not recommended.**

Always try to adapt your text to a defined concept, and only use an alias if absolutely needed! This keeps specs consistent and keeps things easier to find across specs.

Having said that, sometimes `[=convoluted thing =]` might be confusing or not make sense in the context of your spec. In such cases, use a pipe `|` to "alias" a given concept into something that better fits the flow of your spec.

For example, with `[=convoluted thing | simpler thing=]`, `simpler thing` will be the text on your spec. It will link to `convoluted thing`.

Another reason is that the definition’s default name does not grammatically fit into your sentence. For example, your definition is `[=queue a task=]` but you are giving an example of "task queuing". Alias the concept with `[=queue a task|task queuing=]` (again, don't do this! fix your spec instead or talk to the other editors of the other spec to export a more sane definition 🙇‍♂️).

### Examples

| **Type**        | **Syntax**                                                       | **Examples**                     |
| --------------- | ---------------------------------------------------------------- | -------------------------------- |
| Concept         | `[=concept=]`                                                    | `[=queue a task=]`               |
| Aliased concept | `[=concept|some alias=]`<br>`[=convoluted thing|simpler thing=]` | `[=queue a task|task queuing=]` |

## Concepts belonging to other concepts/things

Just as WebIDL interfaces can have methods and attributes, concepts have a very specific relationship to each other.

For example, the definition of a `forEach()` method for a `list` behaves differently from the definition of `forEach()` method for a `map`: the former operates on a single item, while the letter operates on a key/value pair. To make the relationship clear, we would write `[=map/for each=]`, which is different to, say, `[=list/for each=]`.

To associate a concept with another concept, use `data-dfn-for` to indicate who or what owns the concept. This tells Respec who or what the concept is "for". See the example below:

```html
A <dfn>car</dfn> has a <dfn data-for="car">engine</dfn>, which burns petroleum.
A <dfn>browser</dfn> has a <dfn data-for="browser">engine</dfn>, which burns
democracy.
```

**Please note that ReSpec does not currently support associating concepts using `data-for`** We are working on adding support. You can [track our implementation progress](https://github.com/w3c/respec/pull/2508).

### Examples

| **Type**          | **Syntax**                | **Examples**                                                        |
| ----------------- | ------------------------- | ------------------------------------------------------------------- |
| Concept for thing | `[=concept/sub concept=]` | `[=list/for each=]`<br>`[=map/for-each=]`<br>`[=Document/visible=]` |

---

## Variables in algorithms {#variable-shorthands}

The syntax is `|name|`, where `name` is the name of the variable.

In the example below, `value` is a declared variable

```html
Let |value| be the {{DOMString}} "hello". ... If |value| is not "hello", then
do…
```

### Giving variables data types

Add `:` and the data type after the variable's name.

For example, `|value:DOMString|` tells Respec that the variable `value` is of type `{{DOMString}}`.

ReSpec tracks declared variables within algorithms, allowing users to click on them to have them highlighted.

This helps readers know where variables were declared and where they are used. If the variable has is type information, ReSpec also propagates this throughout an algorithm. When a reader hovers over a variable, Respec presents information about the variable's type ([see an example - GIF, 2.8MB](https://user-images.githubusercontent.com/8426945/74150174-5adf9f00-4c2f-11ea-82ee-d7c059a8f772.gif)).

### Examples

| **Type**                  | **Syntax**              | **Examples**          |
| ------------------------- | ----------------------- | --------------------- |
| Variable                  | `|variable|`          | `|value|`           |
| Variable with a data type | `|variable:dataType|` | `|value:DOMString|` |

---

## HTML Elements and content attributes {#element-shorthands}

To reference HTML elements, use the following syntax: `[^tagname^]`. \* Here, the `tagname` is a valid HTML tag that is defined in the HTML spec or some other spec that defines the tag.

You can also link to particular content attributes of html elements by using a `/` after then tag name, followed by the name of the attribute you'd like to link to.

For example, `[^iframe/allow^]` links to the `allow` attribute for an iframe in the HTML spec.

### Examples

| **Type**                       | **Syntax**                     | **Examples**       |
| ------------------------------ | ------------------------------ | ------------------ |
| Element                        | `[^element^]`                  | `[^iframe^]`       |
| Element with Content Attribute | `[^element/contentAttribute^]` | `[^iframe/allow^]` |

Note: To link to an IDL attribute on a HTML element's interface, you would do, for example `{{HTMLIframeElement/allow}}`

---

## Referencing other specifications {#reference-shorthands}

To reference another specification, just write `[[FOO]]` - where FOO is the short name or id of a specification. If you are don't know the the short name or id, please search for the spec at [SpecRef](http://specref.org).

### Examples

| **Type**                 | **Syntax**                    | **Examples**                                                                                                                                                                              |
| ------------------------ | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Normal Reference         | `[[SHORTNAME]]`               | `[[HTML]]`                                                                                                                                                                                |
| Expanded Reference       | `[[[SHORTNAME]]]`             | `[[[FULLSCREEN]]]`<br>`[[[fullscreen API]]]`<br>is expanded and rendered as<br>`Fullscreen Api`                                                                                           |
| Informative spec         | `[[?SHORTNAME]]`              | Payments can be useful `[[?PAYMENT-REQUEST]]`.                                                                                                                                            |
| Escaped reference        | `[[\anything]]`               | This is not a reference. It is `[[\something else]]`.                                                                                                                                     |
| Inner-document expansion | `[[[#fragment]]]`             | `See [[[#installability-signals]]]`<br>is expanded and rendered as<br>`See § 2.6 Installability signals`. Similarly with examples.<br>TODO: clarify `similarly with examples` with Marcos |
| Multipage reference      | `[[SHORTNAME/page#fragment]]` | `[[SOMESPEC/foo.html#bar]]`<br>**Not recommended.** Only if you really need it!                                                                                                           |

[interface]: https://heycam.github.io/webidl/#idl-interfaces
[dictionary]: https://heycam.github.io/webidl/#dfn-dictionary
[enum]: https://heycam.github.io/webidl/#idl-enums
[idl type]: https://heycam.github.io/webidl/#idl-types
[attribute]: https://heycam.github.io/webidl/#idl-attributes
[operation or method]: https://heycam.github.io/webidl/#idl-operations
[static attribute]: https://heycam.github.io/webidl/#dfn-static-attribute
[static operation or static method]: https://heycam.github.io/webidl/#dfn-static-operation
[enum value]: https://heycam.github.io/webidl/#dfn-enumeration-value
[dom exception]: https://heycam.github.io/webidl/#idl-DOMException
