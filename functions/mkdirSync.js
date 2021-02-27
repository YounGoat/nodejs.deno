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
 * Make directory synchronously.
 * @param {string}   pathname 
 * @param {boolean} [options.recursive]
 * @param {number}  [optins.mode]
 */
function mkdirSync(pathname, options) {
	flag('allow-write');

	let { recursive, mode } = options;
	
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