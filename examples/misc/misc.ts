console.log(Deno.args);
console.log(Deno.build);
console.log(Deno.execPath);
console.log(Deno.noColor);
console.log(Deno.pid);

/**
 * TS2339 [ERROR]: Property 'platform' does not exist on type 'typeof Deno'.
 * @deprecated since 0.1.0
 */
// console.log(Deno.platform === Deno.build);

// console.log(Deno.stderr);
// console.log(Deno.stdin);
// console.log(Deno.stdout);
console.log(Deno.version);

/**
 * TS2339 [ERROR]: Property 'ErrorKind' does not exist on type 'typeof Deno'.
 * @deprecated since 0.1.0
 */
// console.log(`${Object.keys(Deno.ErrorKind).length} predefined errors found in Deno.ErrorKind`);
