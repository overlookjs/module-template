/* --------------------
 * @overlook/{{name}} module
 * Tests
 * CJS export
 * ------------------*/

'use strict';

// Modules
const {{nameCamel}} = require('@overlook/{{name}}');

// Imports
const itExports = require('./exports.js');

// Tests

describe('CJS export', () => {
	it('is defined', () => {
		expect({{nameCamel}}).not.toBeUndefined();
	});

	describe('has properties', () => {
		itExports({{nameCamel}});
	});
});
