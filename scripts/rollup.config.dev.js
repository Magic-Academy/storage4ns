import baseConfig from './rollup.config.base.js';
import serve from 'rollup-plugin-serve';

import { name } from '../package.json';

export default {
  ...baseConfig,
  output: [
    {
      file: `dist/${name}.js`,
      format: 'umd',
      name,
      sourcemap: true,
      exports: 'default'
    },
    {
      file: `dist/${name}.cjs.js`,
      format: 'cjs',
      name,
      sourcemap: 'inline',
      exports: 'default'
    },
    {
      file: `dist/${name}.amd.js`,
      format: 'amd',
      name,
      sourcemap: 'inline',
      exports: 'default'
    },
    {
      file: `dist/${name}.es6.js`,
      format: 'es',
      name,
      exports: 'default'
    }
  ],
  plugins: [...baseConfig.plugins]
};
