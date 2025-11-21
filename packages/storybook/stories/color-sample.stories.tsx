import type { Meta } from '@storybook/react-vite';
import '../../components-css/color-sample-css/src/color-sample.scss';
import packageJSON from '../../components-react/color-sample-react/package.json';
import { ColorSample } from '../../components-react/color-sample-react/src/color-sample';
import * as Stories from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.stories';
import colorSampleMeta from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.react.meta';

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
} satisfies Meta<typeof ColorSample>;

export default meta;

export const Default = Stories.Default;
