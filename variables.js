'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	, os = require('os')
	
	/* NPM */
	
	/* in-package */
	;

// In Deno, the primary command line arguments are kept.
// In Node, JavaScript filename is returned by full pathname.
const args = process.argv.slice(1);

const build = {
	arch: process.arch,
	os: os.platform(),
	args: '',
};

const execPath = process.argv0;

const noColor = {
	enumerable: true,
	get: function() {
		return process.env.hasOwnProperty('NO_COLOR');
	},
};

// Alias of "build".
const pid = process.pid;

/**
 * Property 'platform' never exists on type 'typeof Deno'?
 * @deprecated since 0.1.0
 */
const platform = build;

const stderr = process.stderr;
const stdin  = process.stdin;
const stdout = process.stdout;

// ATTENTION: `Deno.version` is not a string but an object.
const version = process.versions;

const Deno = {
	args,
	build,
	execPath,
	pid,
	platform,
	stderr,
	stdin, 
	stdout,
	version,
};

Object.defineProperty(Deno, 'noColor', noColor);

module.exports = Deno;
