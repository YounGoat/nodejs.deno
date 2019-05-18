'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;
    
const Variables = require('./variables');
const ErrorKind = require('./ErrorKind');
const Functions = require('./functions')
module.exports = Object.assign({ ErrorKind }, Variables, Functions);