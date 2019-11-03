'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;

/**
 * Exit process with specified code.
 * @param {number} [code] 
 */
function exit(code) {
	process.exit(code);
}

module.exports = exit;