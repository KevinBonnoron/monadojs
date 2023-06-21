import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import typescript from 'rollup-plugin-typescript';
import packageConfig from './package.json' assert { type: 'json' };

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
});

export default [
  bundle({
    plugins: [esbuild(), terser()],
    output: [
      {
        file: 'dist/monadojs.mjs',
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: 'dist/monadojs.d.ts',
      format: 'es',
    },
  }),

  bundle({
    plugins: [typescript(), commonjs(), terser()],
    output: [
      {
        file: packageConfig.main,
        format: 'commonjs',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: 'dist/monadojs.d.cts',
      format: 'commonjs',
    },
  }),
  
];
