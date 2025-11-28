import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/mark-react/package.json';
import { Mark as MarkComponent } from '../../components-react/mark-react/src/mark';
import markMeta from '@nl-design-system-candidate/mark-docs/stories/mark.react.meta';
import * as Stories from '@nl-design-system-candidate/mark-docs/stories/mark.stories';
import '../../components-css/paragraph-css/src/paragraph.scss';

const meta = {
  ...markMeta,
  component: MarkComponent,
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
} satisfies Meta<typeof MarkComponent>;

export default meta;

export const Mark = Stories.Mark;
export const MarkInEenParagraph = Stories.MarkInEenParagraph;
