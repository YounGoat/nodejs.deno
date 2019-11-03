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
 */
function link(oldname, newname) {    
    return new Promise((resolve, reject) => {
        fs.link(oldname, newname, err => {
            err ? reject(err) : resolve();
        });
    });
}

module.exports = link;