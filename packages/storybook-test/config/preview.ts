import '@fontsource/fira-code';
import { forcedColorsGlobalType } from '@nl-design-system-candidate/storybook-shared/src/forcedColorsGlobalType';
import { zoomGlobalType } from '@nl-design-system-candidate/storybook-shared/src/zoomGlobalType';
import { StoryRootDecorator } from '@nl-design-system-candidate/storybook-shared/src/StoryRootDecorator';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/src/font';
import '@nl-design-system-candidate/storybook-shared/src/candidate-theme.css';
import '@nl-design-system-candidate/storybook-shared/src/component-forced-colors-simulation.scss';
import type { Preview } from '@storybook/react-vite';
import { DocsPage } from '../src/DocsPage';
import { statuses } from './statuses';
import { viewports } from './viewports';

const preview: Preview = {
  // StoryRootDecorator has to be the first decorator for `parameters.html.root` below to work properly
  decorators: [StoryRootDecorator],
  globalTypes: {
    forcedColors: forcedColorsGlobalType,
    // Zoom control in the Storybook toolbar
    zoom: zoomGlobalType,
  },
  initialGlobals: {
    storyRootClassname: 'voorbeeld-theme candidate-theme',
    dir: undefined,
    forcedColors: undefined,
    lang: undefined,
    viewport: { value: undefined },
    zoom: undefined,
  },
  parameters: {
    controls: { expanded: false },
    docs: {
      // page template for automatic docs
      page: DocsPage,
      codePanel: true,
    },
    // @whitespace/storybook-addon-html
    html: {
      root: '[data-story-root]',
    },
    status: { statuses },
    viewport: {
      options: viewports,
    },
  },
  tags: [
    'autodocs', // enable automatic docs generation for all stories
  ],
};

export default preview;
