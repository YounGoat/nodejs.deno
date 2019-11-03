'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;
    
/**
 * Change current working directory.
 * @param {string} directory 
 */
function chdir(directory) {
	process.chdir(directory);
}

module.exports = chdir;