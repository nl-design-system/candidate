import type { Preview } from '@storybook/react';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/src/font';
import { StoryRootDecorator } from '@nl-design-system-candidate/storybook-shared/src/StoryRootDecorator';
import { DocsPage } from '../src/DocsPage';

const preview: Preview = {
  decorators: [StoryRootDecorator],
  initialGlobals: {
    storyRootClassname: 'voorbeeld-theme',
  },
  parameters: {
    controls: { expanded: false },
    docs: {
      // page template for automatic docs
      page: DocsPage,
    },
    // @whitespace/storybook-addon-html
    html: {
      root: '[data-story-root]',
    },
  },
  tags: [
    'autodocs', // enable automatic docs generation for all stories
  ],
};

export default preview;
