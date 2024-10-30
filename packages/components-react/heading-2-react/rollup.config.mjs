import { defineConfig } from 'rollup';
import { rollupConfig } from '../rollupConfig.mjs';

export default defineConfig({
  input: ['./src/heading-2.tsx', './src/css.tsx'],
  ...rollupConfig,
});
