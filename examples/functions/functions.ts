if (0) {
    console.log(Deno.cwd());
}

if (1) {
    Deno.mkdir('temp/foo/bar/quz', { recursive: true, mode: 0o777 })
        .then(() => {
            console.log('Directory made successfully.');
        })
        .catch(ex => {
            console.log(ex);
        });
}

if (0) {
    Deno.remove('temp', { recursive: true })
        .then(() => {
            console.log('Directory removed successfully.');
        })
        .catch(ex => {
            console.log(ex);
        });
}

if (0) {
    Deno.mkdirSync('temp/foo/bar/foo', { recursive: false });
}

if (0) {
    Deno.removeSync('foo', { recursive: true });
}

if (0) {
    Deno.exit(99);
}

if (0) {
    console.log(Deno.execPath());
}

if (0) {
    // console.log(Deno.lstatSync(__dirname));
}
