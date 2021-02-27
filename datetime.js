'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, dafo = require('dafo')
	
	/* in-package */
	;

let DATE_PATTERNS = {
	'mm-dd-yyyy' : 'm-d-Y',
	'dd-mm-yyyy' : 'd-m-Y',
	'yyyy-mm-dd' : 'Y-m-d',
};

let DATETIME_PATTERNS = {
	'mm-dd-yyyy hh:mm' : 'm-d-Y H:i',
	'dd-mm-yyyy hh:mm' : 'd-m-Y H:i',
	'yyyy-mm-dd hh:mm' : 'Y-m-d H:i',
	'hh:mm mm-dd-yyyy' : 'H:i m-d-Y',
	'hh:mm dd-mm-yyyy' : 'H:i d-m-Y',
	'hh:mm yyyy-mm-dd' : 'H:i Y-m-d',
};

/**
 * @param {string} date 
 * @param {string} pattern 
 * @return {Date}
 * 
 * @deprecated since 0.1.0
 */
function parseDate(date, pattern) {
	pattern = DATE_PATTERNS[pattern];
	if (!pattern) {
		throw new Error('invalid date format');
	}
	return dafo.parse(date, pattern);
}

/**
 * @param {string} datetime 
 * @param {string} pattern 
 * @return {Date}
 * 
 * @deprecated since 0.1.0
 */
function parseDateTime(datetime, pattern) {
	pattern = DATETIME_PATTERNS[pattern];
	if (!pattern) {
		throw new Error('invalid datetime format');
	}
	return dafo.parse(datetime, pattern);
}

function parse(datetime, pattern) {
	pattern = DATE_PATTERNS[pattern] || DATETIME_PATTERNS[pattern];
	if (!pattern) {
		throw new Error('invalid datetime format');
	}
	return dafo.parse(datetime, pattern);
}

/**
 * @param {Date} date 
 * @return {number}
 */
function dayOfYear(date) {
	return dafo.getDayOfYear(date);
}

/**
 * @return {number}
 */
function currentDayOfYear() {
	return dafo.getDayOfYear(new Date); 
}

module.exports = {
	parseDate,
	parseDateTime,
	parse,
	dayOfYear,
	currentDayOfYear,
};