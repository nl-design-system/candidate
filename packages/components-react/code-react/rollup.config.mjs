import { defineConfig } from 'rollup';
import { config } from '@nl-design-system/rollup-config-react-component';

export default defineConfig({
  input: ['./src/code.tsx', './src/css.tsx'],
  ...config,
});
