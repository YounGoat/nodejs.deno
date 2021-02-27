'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , fs = require('fs')
    
    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , flag = noda.inRequire('util/flag')
    ;

/**
 * Create `newname` as a hard link to `oldname`.
 * @param {string} oldname
 * @param {string} newname
 * @return {void}
 */
function linkSync(oldname, newname) {
    flag('allow-write');

    fs.linkSync(oldname, newname);
}

module.exports = linkSync;