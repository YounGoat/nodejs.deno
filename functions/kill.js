'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;

/**
 * Send signal to process.
 * @param {number} pid 
 * @param {number} signal 
 */
function kill(pid, signal) {
	process.kill(pid, signal);
}

module.exports = kill;