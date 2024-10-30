import { defineConfig } from 'rollup';
import { rollupConfig } from '../rollupConfig.mjs';

export default defineConfig({
  input: ['./src/heading-6.tsx', './src/css.tsx'],
  ...rollupConfig,
});
