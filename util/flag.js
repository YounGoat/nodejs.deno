/**
 * @author Youngoat@163.com
 * @create 2021-02-27
 */

'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	;

function flag(name) {
	if (!process.argv.includes(`--${name}`)) {
		throw `PermissionDenied: --${name} flag required`;
	}
}

module.exports = flag;