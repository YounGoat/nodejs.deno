'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , fs = require('fs')
    
    /* NPM */
    , qir = require('qir')
    
    /* in-package */
    ;

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

module.exports = mkdirSync;