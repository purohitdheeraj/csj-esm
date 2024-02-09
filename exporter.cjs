/**
 * @file `exporter.cjs`
 * (A CommonJS module exporting a default and named entity.)
 */

module.exports = function defaultCjsExport() {
	console.log('default cjs export');
};

module.exports.namedCjsExport = function namedCjsExport() {
	console.log('named cjs export');
};
