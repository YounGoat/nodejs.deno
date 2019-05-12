#	ErrorKind

Since v0.0.2.

`ErrorKind` is a built-in enumeration within `deno`:

```javascript
const deno = require('deno');
const ErrorKind = require('deno/ErrorKind');

deno.ErrorKind === ErrorKind;

// Get error name via error number.
deno.ErrorKind[1];  
// RETURN string "NotFound"

// Or, get error number via error name.
deno.ErrorKind.NotFound;
deno.ErrorKind['NotFound'];
// RETURN number 1
```

##	References

*	Deno API Reference, [Enumeration ErrorKind](https://deno.land/typedoc/enums/deno.errorkind.html)