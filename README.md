#	deno
__Bridge to deno.__

>	If links in this document not avaiable, please access [README on GitHub](./README.md) directly.

This module is designed as a bridge from Node.js to [*Deno*][^deno]. 

What is [*Deno*][^deno]? According to [deno.land](https://deno.land/manual.html):
>   A secure JavaScript/TypeScript runtime ...

##  Get Started

```javascript
const Deno = require('deno');

// Display build info.
console.log(Deno.build);
```

##  API

ATTENTION: Although this module `deno` tries to imitate behaviors of real [*Deno*][^deno], they two are different things.

*   Variables
    *   args
    *   build
    *   execPath
	*   pid
	*   platform
	*   stderr
	*   stdin 
	*   stdout
	*   version

##	Reference

*	[Deno Manual](https://deno.land/manual.html)
*	[TypeScript Deno API](https://deno.land/typedoc/index.html)

[^deno]: https://deno.land/