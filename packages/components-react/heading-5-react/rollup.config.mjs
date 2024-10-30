import { defineConfig } from 'rollup';
import { rollupConfig } from '../rollupConfig.mjs';

export default defineConfig({
  input: ['./src/heading-5.tsx', './src/css.tsx'],
  ...rollupConfig,
});
