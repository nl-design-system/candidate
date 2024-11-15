import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/src/font';
import type { Preview } from '@storybook/react';
import { DocsPage } from '../src/DocsPage';
import { ParametersArgsDecorator } from '../src/ParametersArgsDecorator';

const preview: Preview = {
  decorators: [ParametersArgsDecorator],
  parameters: {
    controls: { expanded: false },
    docs: {
      // page template for automatic docs
      page: DocsPage,
    },
    // @whitespace/storybook-addon-html
    html: {
      root: '.voorbeeld-theme', // use `<div class="voorbeeld-theme"> as the root
    },
  },
  tags: [
    'autodocs', // enable automatic docs generation for all stories
  ],
};

export default preview;
