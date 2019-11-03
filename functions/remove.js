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
 * Remove file or directory.
 * @param {string}   pathname 
 * @param {Object}  [options] 
 * @param {boolean} [options.recursive=false]
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

module.exports = remove;