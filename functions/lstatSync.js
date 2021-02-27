'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , fs = require('fs')
    
    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , flag = noda.inRequire('util/flag')
    , stats2FileInfo = noda.inRequire('util/stats2FileInfo')
    ;

/**
 * Queries the file system for information on the path provided.
 * @param {string} pathname
 * @return {object}
 */
function lstatSync(pathname) {
    let stats = fs.lstatSync(pathname);
    return stats2FileInfo(stats);
}

module.exports = lstatSync;