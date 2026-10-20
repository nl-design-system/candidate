import { StoryRootDecorator } from '@nl-design-system-candidate/storybook-shared/src/StoryRootDecorator';
import { sourceTransformPrettierHTML } from '@nl-design-system-candidate/storybook-shared/src/StorySourceTransformPrettierHTML';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/src/font';
import '@nl-design-system-candidate/storybook-shared/src/candidate-theme.css';
import type { Preview } from '@storybook/react-vite';
import { DocsPage } from '../src/DocsPage';
import { formatHtml } from '@rijkshuisstijl-community/storybook-tooling/formatHtml';

const preview: Preview = {
  decorators: [StoryRootDecorator],
  initialGlobals: {
    storyRootClassname: 'voorbeeld-theme candidate-theme',
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
      // always render the source as prettified HTML, even for React
      source: {
        transform: sourceTransformPrettierHTML,
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
