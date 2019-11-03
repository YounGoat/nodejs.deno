'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;

function stats2FileInfo(stats) {
    let time2num = t => Math.floor(t.getTime() / 1000);
    let is = {
        File      : stats.isFile(),
        Directory : stats.isDirectory(), 
        Symlink   : stats.isSymbolicLink(),
    };

    let info = {
        accessed : time2num(stats.atime),
        created  : time2num(stats.ctime),
        len      : stats.size,
        mode     : stats.mode,
        modified : time2num(stats.mtime),
        name     : null,

        isFile       : () => is.File,
        isDirectory  : () => is.Directory,
        isSymlink    : () => is.Symlink,
    };

    return info;
}

module.exports = stats2FileInfo;