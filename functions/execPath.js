'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;

/**
 * Get the path to the current node exectuable.
 * @return {string}
 */
function execPath() {
    return process.execPath;
}

module.exports = execPath;