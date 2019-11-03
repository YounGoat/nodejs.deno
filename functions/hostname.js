'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , os = require('os')
    
    /* NPM */
    
    /* in-package */
    ;

/**
 * Get the hostname.
 * @return {string}
 */
function hostname() {
    return os.hostname();
}

module.exports = hostname;