import { defineConfig } from 'rollup';
import { rollupConfig } from '../rollupConfig.mjs';

export default defineConfig({
  input: ['./src/heading.ts', './src/css.ts'],
  ...rollupConfig,
});
