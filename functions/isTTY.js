'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;

/**
 * Check if running in terminal.
 * @return {object}
 */
function isTTY() {
	return {
        stderr : process.stderr.isTTY,
        stdin  : process.stdin.isTTY,
        stdout : process.stdout.isTTY,
    };
}

module.exports = isTTY;