import { StoryRootDecorator } from '@nl-design-system-candidate/storybook-shared/src/StoryRootDecorator';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/src/font';
import type { Preview } from '@storybook/react-vite';
import { DocsPage } from '../src/DocsPage';
import { formatHtml } from '@rijkshuisstijl-community/storybook-tooling/formatHtml';

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
      codePanel: true,
      canvas: {
        sourceState: 'shown',
      },
    },
    // @whitespace/storybook-addon-html
    html: {
      root: '[data-story-root]',
      transform: formatHtml,
    },
  },
  tags: [
    'autodocs', // enable automatic docs generation for all stories
  ],
};

export default preview;
