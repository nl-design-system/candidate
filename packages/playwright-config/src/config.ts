import { defineConfig, devices, type PlaywrightTestConfig } from '@playwright/experimental-ct-react';

export const config: PlaywrightTestConfig = defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  outputDir: '../tmp/test-results/',
  reporter: 'list',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    // Chromium on desktop
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Firefox on desktop
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // Safari on desktop
    {
      name: 'safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      // Chrome on Android / TalkBack
      name: 'android-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      // Safari on iOS / VoiceOver
      name: 'ios-safari',
      use: { ...devices['iPhone 15'] },
    },
  ],
});
