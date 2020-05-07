import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  external({ includeDependencies: true }),
  resolve(),
  babel({
    exclude: 'node_modules/**',
  }),
  commonjs(),
  production && terser(),
];

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins,
};
