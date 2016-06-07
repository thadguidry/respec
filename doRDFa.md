A setting indicating what version of RDFa to use when annotating the specification with semantic information that is compatible with RDFa Processors. Possible values:

<dl>
  <dt>false</dt>
  <dd>Disable RDFa.</dd> 
  <dt>"1.0"</dt> 
  <dd>Include RDFa 1.0 - compatible annotations.</dd>
  <dt>"1.1" (default=)</dt> 
  <dd>Include RDFa 1.1 - compatible annotations.</dd>
</dl>

## Example
The following example would disable RDFa. 

```JS
var respecConfig = {
  doRDFa: false,
}
```