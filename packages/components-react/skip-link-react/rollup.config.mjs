import { config } from '@nl-design-system/rollup-config-react-component';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: ['./src/skip-link.tsx', './src/css.tsx'],
  ...config,
});