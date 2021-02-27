#	How to run examples?

Some examples depend on [deno_std](https://github.com/denoland/deno_std/), you may clone the repository and put it under *denoland* folder which is at the same level with *example* folder:

```bash
+ deno
  + denoland
    + deno_std
  + examples
    + datetime
	  + misc
	...
```

Then run with Node.js and Deno respectively.
```bash
# Run NPM deno.
node examples/misc/misc.js

# Run Deno v0.22 .
# Run Deno v1.7.5 .
deno run examples/misc/misc.ts

# Run Deno v0.22 .
# Subcommand 'run' may be ignored.
deno examples/misc/misc.ts
```

Some functions SHOULD be enabled explicitly. E.g. 
```bash
deno run --allow-write --allow-read functions/functions.ts
```