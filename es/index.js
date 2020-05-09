/* --------------------
 * @overlook/{{name}} module
 * ESM entry point
 * Re-export CJS with named exports
 * ------------------*/

// Exports

import {{nameCamel}} from '../lib/index.js';

export default {{nameCamel}};
export const {
	{{exports}}
} = {{nameCamel}};
