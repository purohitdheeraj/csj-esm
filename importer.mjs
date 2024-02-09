/**
 * @file `importer.mjs`
 *
 * An ESM module that imports stuff
 */

// cjs
import defaultCjsExport, {
	namedCjsExport,
} from './exporter.cjs';

// esm
import defaultMjsExport, {
	namedMjsExport,
} from './exporter.mjs';

defaultCjsExport();
namedCjsExport();

defaultMjsExport();
namedMjsExport();

// console.log({
// 	title: 'Importing into an ESM module.',
// 	defaultCjsExport,
// 	// namedCjsExport,
// 	// defaultMjsExport,
// 	// namedMjsExport,
// });
