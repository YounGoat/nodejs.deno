'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , os = require('os')
    
    /* NPM */
    
    /* in-package */
    ;

/**
 * Get the current user's home directory.
 * @return {string}
 */
function homeDir() {
    // return process.env.HOME;
    return os.homedir();
}

module.exports = homeDir;