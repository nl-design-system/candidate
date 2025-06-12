import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    'storybook/viewport',
    '@whitespace/storybook-addon-html',
    '@etchteam/storybook-addon-status',
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: {
    defaultName: 'Documentatie',
  },
  features: {
    // Make @storybook/addon-viewport use Storybook's globals
    // viewportStoryGlobals: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*stories.@(ts|tsx)'],
};

export default config;
