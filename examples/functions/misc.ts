if (0) {
    console.log(Deno.cwd());
}

if (0) {
    Deno.mkdir('foo/bar/foo', true, 777)
        .then(() => {
            console.log('Directory made successfully.');
        })
        .catch(ex => {
            console.log(ex);
        });
}

if (1) {
    Deno.remove('foo', { recursive: true })
        .then(() => {
            console.log('Directory removed successfully.');
        })
        .catch(ex => {
            console.log(ex);
        });
}

if (0) {
    Deno.mkdirSync('foo/bar/foo', false);
}

if (0) {
    Deno.exit(99);
}