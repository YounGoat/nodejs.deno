'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;
    
const Deno = require('./variables');
const ErrorKind = require('./ErrorKind');
module.exports = Object.assign({ ErrorKind }, Deno);