import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import type { Preview } from '@storybook/react';
import { DocsPage } from '../src/DocsPage';
import { StoryRootDecorator } from '../src/StoryRootDecorator';
import { viewports } from './viewports';

const storyRootClassname = 'voorbeeld-theme';

const preview: Preview = {
  // StoryRootDecorator has to be the first decorator for `parameters.html.root` below to work properly
  decorators: [StoryRootDecorator],
  globalTypes: {
    // Zoom control in the Storybook toolbar
    zoom: {
      description: 'Bepaalt het zoom niveau voor een story',
      toolbar: {
        dynamicTitle: true,
        icon: 'zoom',
        items: [
          { title: '50%', value: 0.5 },
          { title: '100%', value: undefined },
          { title: '200%', value: 2 },
          { title: '400%', value: 4 },
        ],
      },
    },
  },
  initialGlobals: {
    dir: undefined,
    lang: undefined,
    storyRootClassname,
    viewport: { value: undefined },
    zoom: undefined,
  },
  parameters: {
    controls: { expanded: false },
    docs: {
      // page template for automatic docs
      page: DocsPage,
    },
    // @whitespace/storybook-addon-html
    html: {
      root: `.${storyRootClassname}`,
    },
    viewport: {
      options: viewports,
    },
  },
  tags: [
    'autodocs', // enable automatic docs generation for all stories
  ],
};

export default preview;
