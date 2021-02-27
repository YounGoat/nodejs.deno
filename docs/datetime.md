#	datetime

Since v0.0.3

`datetime` is a standard module in `deno`.

##	ToC

* [Get Started](#get-started)
* [API](#api)
* [References](#references)

##  Get Started

```javascript
const datetime = require('deno/datetime');

datetime.parseDate("03-01-2019", "dd-mm-yyyy");
datetime.parseDateTime("01-03-2019 16:34", "mm-dd-yyyy hh:mm");
```

##  API

*   Date __datetime.parse__(string *datetimeStr*, string *format*)  
*   Date __datetime.parseDate__(string *dateStr*, string *format*)  
	@deprecated since v0.1.0
*   Date __datetime.parseDateTime__(string *datetimeStr*, string *format*)  
	@deprecated since v0.1.0

##	References

*	Deno Standard Modules, [datetime](https://github.com/denoland/deno_std/blob/master/datetime/README.md)