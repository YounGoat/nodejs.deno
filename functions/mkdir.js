'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , fs = require('fs')
    , util = require('util')
    
	/* NPM */
	, noda = require('noda')
    , qir = require('qir')
    
	/* in-package */
	, flag = noda.inRequire('util/flag')
    ;

/**
 * Make directory.
 * @param {string}   pathname 
 * @param {boolean} [options.recursive]
 * @param {number}  [options.mode]
 * @return {Promise}
 */
async function mkdir(pathname, options) {
	flag('allow-write');

	let { recursive, mode } = options;
	
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