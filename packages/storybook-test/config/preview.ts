import type { Preview } from '@storybook/react';
import { DocsPage } from '../src/DocsPage';
import { StoryRoot, storyRootClassname } from '../src/StoryRoot';
import { DEFAULT_ZOOM, Zoom } from '../src/Zoom';
import { viewports } from './viewports';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';

const preview: Preview = {
  // StoryRoot has to be the first decorator for `parameters.html.root` below to work properly
  decorators: [StoryRoot, Zoom],
  globalTypes: {
    zoom: {
      description: 'Bepaalt het zoom niveau voor een story',
      toolbar: {
        dynamicTitle: true,
        icon: 'zoom',
        items: [
          { title: '50%', value: 0.5 },
          { title: '100%', value: 1 },
          { title: '200%', value: 2 },
          { title: '400%', value: 4 },
        ],
      },
    },
  },
  initialGlobals: {
    viewport: { value: undefined },
    zoom: DEFAULT_ZOOM,
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
