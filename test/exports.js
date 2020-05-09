/* --------------------
 * @overlook/{{name}} module
 * Tests
 * Test function to ensure all exports present
 * ------------------*/

/* eslint-disable jest/no-export */

'use strict';

// Exports

module.exports = function itExports({{nameCamel}}) {
	describe('methods', () => {
		it.each([
			{{exports}}
		])('%s', (key) => {
			expect({{nameCamel}}[key]).toBeFunction();
		});
	});

	describe('symbols', () => {
		it.each([
			{{exports}}
		])('%s', (key) => {
			expect(typeof {{nameCamel}}[key]).toBe('symbol');
		});
	});
};
