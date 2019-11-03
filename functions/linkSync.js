'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , fs = require('fs')
    
    /* NPM */
    
    /* in-package */
    ;

/**
 * Create `newname` as a hard link to `oldname`.
 * @param {string} oldname
 * @param {string} newname
 * @return {void}
 */
function linkSync(oldname, newname) {
    fs.linkSync(oldname, newname);
}

module.exports = linkSync;