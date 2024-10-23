import { config } from '@nl-design-system/rollup-config-react-component';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: ['./src/code-block.tsx', './src/css.tsx'],
  ...config,
});