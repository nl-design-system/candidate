import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html',
    '@etchteam/storybook-addon-status',
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: {
    autodocs: 'tag', // allow stories to opt out of docs if necessary
    defaultName: 'Documentatie',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*stories.@(ts|tsx)', '../docs/**/*.mdx'],
};

export default config;
