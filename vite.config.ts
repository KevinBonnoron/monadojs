import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

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
    env: { TZ: 'UTC' },
    include: ['src/**/*.spec.ts', 'tests/**/*.spec.ts'],
    typecheck: {
      include: ['src/**/*.spec-d.ts'],
    },
    coverage: {
      provider: 'istanbul',
      include: ['src/**'],
      exclude: ['**/*.spec-d.ts', 'mod.ts'],
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
