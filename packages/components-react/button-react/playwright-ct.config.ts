import { config } from '@nl-design-system-candidate/playwright-config/src/config.ts';
import { defineConfig } from '@playwright/experimental-ct-react';

export default defineConfig({
  ...config,
  testDir: './src',
  testMatch: '**/*.test-e2e.tsx',
  use: {
    ...config.use,
    ctTemplateDir: './e2e/playwright',
    ctCacheDir: './tmp/.cache',
  },
});
