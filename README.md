#	deno
__A bridge to Deno.__

[![total downloads of deno](https://img.shields.io/npm/dt/deno.svg)](https://www.npmjs.com/package/deno)
[![deno's License](https://img.shields.io/npm/l/deno.svg)](https://www.npmjs.com/package/deno)
[![latest version of deno](https://img.shields.io/npm/v/deno.svg)](https://www.npmjs.com/package/deno)

>	If links in this document not avaiable, please access [README on GitHub](./README.md) directly.

This module is designed as a bridge from Node.js to [*Deno*][^deno]. 

What is [*Deno*][^deno]? According to [deno.land](https://deno.land/manual.html):
>   A secure JavaScript/TypeScript runtime ...

ATTENTION: The semi-official *Deno* installer via NPM is [get-deno](https://www.npmjs.com/package/get-deno). I was asked to transfer the ownership of this package to *Deno* official team (see issue "[Install via npm](https://github.com/denoland/deno_install/issues/6)" for details of the discussion). By now, I have not decided to accept such suggestion.

##  Get Started

```javascript
const Deno = require('deno');

// Display build info.
console.log(Deno.build);
```

##  API

ATTENTION: Although this module `deno` tries to imitate behaviors of real [*Deno*][^deno], they two are different things.

Here are available features and standard modules:  
[view on single page](docs/all.md)
*   [variables](docs/variables)
*	[ErrorKind](docs/ErrorKind.md)	
*   [datetime](docs/datetime.md)

##	Reference

*	[Deno Manual](https://deno.land/manual.html)
*	[TypeScript Deno API](https://deno.land/typedoc/index.html)
*   [Ching(YounGoat)'s NPM Packages](https://github.com/YounGoat/articles/blob/master/2019/npm.md)

[^deno]: https://deno.land/