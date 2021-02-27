'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;
    
const Variables = require('./variables');
const ErrorKind = require('./ErrorKind');
const Functions = require('./functions')

const Deno = { 
    /**
     * @deprecated since 0.1.0
     */
    ErrorKind,

    ...Variables, 
    ...Functions,
};
module.exports = Deno;