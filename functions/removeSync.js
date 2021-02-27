'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , fs = require('fs')
    
	/* NPM */
	, noda = require('noda')
    , qir = require('qir')
    
    /* in-package */
	, flag = noda.inRequire('util/flag')
    ;

/**
 * Remove file or directory synchronously.
 * @param {string}   pathname 
 * @param {Object}  [options] 
 * @param {boolean} [options.recursive=false]
 *
 * @todo Trigger proper error in cases that native Deno does.
 */
function removeSync(pathname, options) {
	flag('allow-write');

	options = Object.assign({
		recursive: false,
	}, options);

	if (options.recursive) {
		qir.syncing.rmfr(pathname);
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

module.exports = removeSync;