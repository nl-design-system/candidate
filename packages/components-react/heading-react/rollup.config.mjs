import { defineConfig } from 'rollup';
import { config } from '@nl-design-system/rollup-config-react-component';

export default defineConfig({
  input: ['./src/heading.ts', './src/css.ts'],
  ...config,
});
