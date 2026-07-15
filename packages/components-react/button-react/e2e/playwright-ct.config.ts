import { config } from '@nl-design-system-candidate/playwright-config/src/config.ts';
import { defineConfig } from '@playwright/experimental-ct-react';

export default defineConfig({
  ...config,
  testDir: '.',
});
