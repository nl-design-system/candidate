import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/color-sample-react/package.json';
import { ColorSample as ColorSampleComponent } from '@nl-design-system-candidate/color-sample-react';
import colorSampleMeta from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.react.meta';
import * as Stories from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.stories';

const meta = {
  ...colorSampleMeta,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/color-sample',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Color Sample',
} satisfies Meta<typeof ColorSampleComponent>;

export default meta;

export const ColorSample = Stories.ColorSample;
