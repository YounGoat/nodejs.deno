'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    
    /* in-package */
    ;

describe('Test Section 1', () => {
    
    it('unit test 1', () => {
        assert(true);
        assert.equal(2, 1+1);
    });

    it('unit test 2', (done) => {
        done();
    });
    
});