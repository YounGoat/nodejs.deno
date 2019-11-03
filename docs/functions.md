#	Functions

##  ToC

* [Get Started](#get-started)
* [chdir()](#chdir)
* [cwd()](#cwd)
* [env()](#env)
* [execPath()](#execpath)
* [exit()](#exit)
* [homeDir()](#homedir)
* [hostname()](#hostname)
* [isTTY()](#istty)
* [kill()](#kill)
* [link()](#link)
* [linkSync()](#linksync)
* [lstat()](#lstat)
* [lstatSync()](#lstatsync)
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

##  env()
since v0.0.5

*   object __deno.env__()
*   string __deno.env__(string *name*)

Get environment variables.

##  execPath()
since v0.0.5

*   string __deno.execPath__()

Get the path to the current node exectuable.

##  exit()
since v0.0.4

*   __deno.exit__(number *code*)

Exit process with specified code.

##  homeDir()
since v0.0.5

*   object __deno.homeDir__()

Get the current user's home directory.

##  hostname()
since v0.0.5

*   object __deno.hostname__()

Get the hostname.

##  isTTY()
since v0.0.5

*   object __deno.isTTY__()

Check if running in terminal.

The returned object will be made up of the following properties:
*   boolean *stderr*
*   boolean *stdin*
*   boolean *stdout*

##  kill()
since v0.0.4

*   void __deno.kill__(number *code*)

Send signal to process.

##  link()
since v0.0.5

*   object __deno.link__(string *oldname*, string *newname*)

Create `newname` as a hard link to `oldname`.

##  linkSync()
since v0.0.5

*   object __deno.link__(string *oldname*, string *newname*)

Create `newname` as a hard link to `oldname` synchronously.

##  lstat()
since v0.0.5

*   object __deno.lstat__(string *oldname*, string *newname*)

Queries the file system for information on the path provided.

The returned object will be made up of the following properties:
*   number *accessed*
*   number *created*
*   number *len*
*   number *mode*
*   number *modified*
*   string *name*
*   boolean *isFile*()
*   boolean *isDirectory*()
*   boolean *isSymlink*()

The returned object will be brought into correspondence with what described as [FileInfo](https://deno.land/typedoc/interfaces/deno.fileinfo.html) in Deno.

##  lstatSync()
since v0.0.5

*   object __deno.lstat__(string *oldname*, string *newname*)

Queries the file system for information on the path provided.

See [lstat()](#lstat) for details.

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