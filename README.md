# deno
__A bridge to Deno.__

[![total downloads of deno](https://img.shields.io/npm/dt/deno.svg)](https://www.npmjs.com/package/deno)
[![deno's License](https://img.shields.io/npm/l/deno.svg)](https://www.npmjs.com/package/deno)
[![latest version of deno](https://img.shields.io/npm/v/deno.svg)](https://www.npmjs.com/package/deno)

> If links in this document not available, please access the [README on GitHub](./README.md) directly.

This package is designed to help developers experience functions of [*Deno*][^deno] in Node.js.

What is [*Deno*][^deno]? According to [deno.land](https://deno.land/manual.html):
> A secure JavaScript/TypeScript runtime ...

ATTENTION: This package is NOT an official distribution of [deno.land](https://deno.land/). It is suggested to access [*Deno*'s homepage][^deno] if you are seeking an official binary. And, I should show my appreciation of [Ryan](https://www.npmjs.com/~ry)'s great work on [*Deno*][^deno].

Since v0.1.0, the package begins to follow [*Deno*][^deno] v1.7.5+ .

##  Get Started

```javascript
const Deno = require('deno');

// Display build info.
console.log(Deno.build);
```

##	Links

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/nodejs.deno/tree/v1)

##  API

ATTENTION: Although this module `deno` tries to imitate behaviors of real [*Deno*][^deno], the two are different things.

Here are available features and standard modules:  
[view on single page](docs/all.md)
* [variables](docs/variables.md)
* [functions](docs/functions.md)
* [ErrorKind](docs/ErrorKind.md)
* [datetime](docs/datetime.md)

##  Reference

* [Deno Manual](https://deno.land/manual.html)
* [TypeScript Deno API](https://deno.land/typedoc/index.html)
* [Ching(YounGoat)'s NPM Packages](https://github.com/YounGoat/articles/blob/master/2019/npm.md)

[^deno]: https://deno.land/
