'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	, fs = require('fs')
	, util = require('util')
	
	/* NPM */
	, qir = require('qir')
	
	/* in-package */
	;

/**
 * Change current working directory.
 * @param {string} directory 
 */
function chdir(directory) {
	process.chdir(directory);
}

/**
 * Get the current working directory.
 * @return {string}
 */
function cwd() {
	return process.cwd();
}

/**
 * Exit process with specified code.
 * @param {number} [code] 
 */
function exit(code) {
	process.exit(code);
}

/**
 * Make directory.
 * @param {string}   pathname 
 * @param {boolean} [recursive]
 * @param {number}  [mode]
 * @return {Promise}
 */
async function mkdir(pathname, recursive = false, mode = undefined) {
	if (recursive) {
		await qir.asyncing.mkd(pathname);
	}
	else {
		let mkdir = util.promisify(fs.mkdir);
		await mkdir(pathname);
	}

	if (typeof mode != 'undefined') {
		let chmod = util.promisify(fs.chmod);
		await chmod(pathname, mode);
	}
}

/**
 * Make directory synchronously.
 * @param {string}   pathname 
 * @param {boolean} [recursive]
 * @param {number}  [mode]
 */
function mkdirSync(pathname, recursive = false, mode = undefined) {
	if (recursive) {
		qir.syncing.mkd(pathname);
	}
	else {
		fs.mkdirSync(pathname);
	}

	if (typeof mode != 'undefined') {
		fs.chmodSync(pathname, mode);
	}
}

/**
 * Send signal to process.
 * @param {number} pid 
 * @param {number} signal 
 */
function kill(pid, signal) {
	process.kill(pid, signal);
}

/**
 * Remove file or directory.
 * @param {string}   pathname 
 * @param {Object}  [options] 
 * @param {boolean} [options.recursive]
 * 
 * @todo Trigger proper error in cases that native Deno does.
 */
async function remove(pathname, options) {
	options = Object.assign({
		recursive: false,
	}, options);

	if (options.recursive) {
		await qir.asyncing.rmfr(pathname);
	}
	else {
		let stat   = util.promisify(fs.stat);
		let rmdir  = util.promisify(fs.rmdir);
		let unlink = util.promisify(fs.unlink);

		if ((await stat(pathname)).isDirectory()) {
			await rmdir(pathname);
		}
		else {
			await unlink(pathname);
		}
	}
}

/**
 * Remove file or directory synchronously.
 * @param {string}   pathname 
 * @param {Object}  [options] 
 * @param {boolean} [options.recursive]
 *
 * @todo Trigger proper error in cases that native Deno does.
 */
function removeSync(pathname, options) {
	options = Object.assign({
		recursive: false,
	}, options);

	if (options.recursive) {
		await qir.syncing.rmfr(pathname);
	}
	else {
		if (fs.statSync(pathname).isDirectory()) {
			fs.rmdirSync(pathname);
		}
		else {
			fs.unlinkSync(pathname);
		}
	}
}

module.exports = {
	chdir,
	cwd,
	exit,
	kill,
	mkdir,
	mkdirSync,
	remove,
	removeSync,
};
