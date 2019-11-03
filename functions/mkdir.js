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

module.exports = mkdir;