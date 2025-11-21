import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta } from '@storybook/react-vite';
import '../../components-css/paragraph-css/src/paragraph.scss';
import packageJSON from '../../components-react/paragraph-react/package.json';
import { Paragraph } from '../../components-react/paragraph-react/src/paragraph';
import paragraphMeta from '@nl-design-system-candidate/paragraph-docs/stories/paragraph.react.meta';
import * as Stories from '@nl-design-system-candidate/paragraph-docs/stories/paragraph.stories';

const meta = {
  ...paragraphMeta,
  decorators: [ExampleBodyTextDecorator],
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/paragraph',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Paragraph',
} satisfies Meta<typeof Paragraph>;

export default meta;

export const Default = Stories.Default;
export const Lead = Stories.Lead;
