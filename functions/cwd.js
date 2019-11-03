'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;

/**
 * Get the current working directory.
 * @return {string}
 */
function cwd() {
	return process.cwd();
}

module.exports = cwd;