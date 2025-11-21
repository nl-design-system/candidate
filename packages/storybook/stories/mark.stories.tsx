import type { Meta } from '@storybook/react-vite';
import '../../components-css/paragraph-css/src/paragraph.scss';
import '../../components-css/mark-css/src/mark.scss';
import packageJSON from '../../components-react/mark-react/package.json';
import { Mark } from '../../components-react/mark-react/src/mark';
import markMeta from '@nl-design-system-candidate/mark-docs/stories/mark.react.meta';
import * as Stories from '@nl-design-system-candidate/mark-docs/stories/mark.stories';

const meta = {
  ...markMeta,
  component: Mark,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/mark',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Mark',
} satisfies Meta<typeof Mark>;

export default meta;

export const Default = Stories.Default;
export const MarkInParagraph = Stories.MarkInParagraph;
