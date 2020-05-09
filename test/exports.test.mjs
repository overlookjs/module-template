/* --------------------
 * @overlook/{{name}} module
 * Tests
 * ESM export
 * ------------------*/

// Modules
import {{nameCamel}}, * as namedExports from '@overlook/{{name}}/es';

// Imports
import itExports from './exports.js';

// Tests

describe('ESM export', () => { // eslint-disable-line jest/lowercase-name
	it('default export is defined', () => {
		expect({{nameCamel}}).not.toBeUndefined();
	});

	describe('default export has properties', () => {
		itExports({{nameCamel}});
	});

	describe('named exports', () => {
		itExports(namedExports);
	});
});
