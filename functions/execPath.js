'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , flag = noda.inRequire('util/flag')
    ;

/**
 * Get the path to the current node exectuable.
 * @return {string}
 */
function execPath() {
    flag('allow-read');
    
    return process.execPath;
}

module.exports = execPath;