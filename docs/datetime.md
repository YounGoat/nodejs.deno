#	datetime

Since v0.0.3

`datetime` is a standard module in `deno`.

```javascript
const datetime = require('deno/datetime');

datetime.parseDate("03-01-2019", "dd-mm-yyyy");
datetime.parseDateTime("01-03-2019 16:34", "mm-dd-yyyy hh:mm");
```

##	References

*	Deno Standard Modules, [datetime](https://github.com/denoland/deno_std/blob/master/datetime/README.md)