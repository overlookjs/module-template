/* --------------------
 * @overlook/{{name}} module
 * Tests
 * ------------------*/

'use strict';

// Modules
const {{nameCamel}} = require('@overlook/{{name}}');

// Init
require('./support/index.js');

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect({{nameCamel}}).not.toBeUndefined();
	});
});
