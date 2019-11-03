'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;

/**
 * Get environment variable(s).
 * @param {string} [name] 
 * @return {object | string}
 */
function env(name) {
    return name ? process.env[name] : process.env;
}

module.exports = env;