import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    minify: false,
    target: 'modules',
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => `monadojs.${format.replace('es', 'mjs')}`,
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    passWithNoTests: true,
  },
  plugins: [dts({ rollupTypes: true })],
});
