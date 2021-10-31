import eslint from '@rollup/plugin-eslint';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    resolve(),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**'
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};
