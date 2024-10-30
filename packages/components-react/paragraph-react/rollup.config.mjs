import { defineConfig } from 'rollup';
import { rollupConfig } from '../rollupConfig.mjs';

export default defineConfig({
  input: ['./src/paragraph.tsx', './src/css.tsx'],
  ...rollupConfig,
});
