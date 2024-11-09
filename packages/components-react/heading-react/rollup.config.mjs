import { config } from '@nl-design-system/rollup-config-react-component';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: ['./src/heading.ts', './src/css.ts'],
  ...config,
});
