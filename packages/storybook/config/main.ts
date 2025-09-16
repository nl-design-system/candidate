import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@whitespace/storybook-addon-html'],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: {
    defaultName: 'Documentatie',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*stories.@(ts|tsx)', '../docs/**/*.mdx'],
};

export default config;
