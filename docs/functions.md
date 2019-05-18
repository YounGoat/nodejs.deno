#	Functions

##  ToC

* [Get Started](#get-started)
* [chdir()](#chdir)
* [cwd()](#cwd)
* [exit()](#exit)
* [kill()](#kill)
* [mkdir()](#mkdir)
* [mkdirSync()](#mkdirsync)
* [remove()](#remove)
* [removeSync()](#removesync)

##  Get Started

All functions described in this document may be invoked with namespace `deno`. E.g.

```javascript
const deno = require('deno');
deno.chdir('/home/to/ching');
```

##  chdir()
since v0.0.4

*   void __deno.chdir__(string *directory*)

Change the current working directory.

##  cwd()
since v0.0.4

*   string __deno.cwd__()

Get the current working directory.

##  exit()
since v0.0.4

*   __deno.exit__(number *code*)

Exit process with specified code.

##  kill()
since v0.0.4

*   void __deno.kill__(number *code*)

Send signal to process.

##  mkdir()
since v0.0.4

*   Promise __deno.mkdir__(string *pathname*, boolean *recursive* = `false`)
*   Promise __deno.mkdir__(string *pathname*, boolean *recursive*, number *mode*)

Make directory.

##  mkdirSync()
since v0.0.4

*   void __deno.mkdirSync__(string *pathname*, boolean *recursive*)
*   void __deno.mkdirSync__(string *pathname*, boolean *recursive*, number *mode*)

Make directory synchronously.  
See [mkdir()](#mkdir) for details.

##  remove()
since v0.0.4

*   Promise __deno.remove__(string *pathname*)
*   Promise __deno.remove__(string *pathname*, Object *options*)

Remove file or directory.

Parameters:
*   string *pathname*
*   boolean *options.recursive* DEFAULT `false`

##  removeSync()
since v0.0.4

*   void __deno.removeSync__(string *pathname*)
*   void __deno.removeSync__(string *pathname*, Object *options*)


Remove file or directory synchronously.  
See [remove()](#remove) for details.