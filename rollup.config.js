import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

import pkg from './package.json';

export default [{
	input: './index.js',
	output: [
		{
			name: 'callbag',
			file: pkg.browser,
			format: 'umd'
		},
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
	],
	plugins: [
		resolve(),
		babel(),
		commonjs()
	]
},
{
	input: './index.js',
	output: [
		{ file: 'dist/bundle.umd.min.js', format: 'umd', name: 'callbag' }
	],
	plugins: [
		resolve(),
		babel(),
		commonjs(),
		uglify()
	]
}];
