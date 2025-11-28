import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/paragraph-react/package.json';
import { Paragraph as ParagraphComponent } from '@nl-design-system-candidate/paragraph-react';
import paragraphMeta from '@nl-design-system-candidate/paragraph-docs/stories/paragraph.react.meta';
import * as Stories from '@nl-design-system-candidate/paragraph-docs/stories/paragraph.stories';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';

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
} satisfies Meta<typeof ParagraphComponent>;

export default meta;

export const Paragraph = Stories.Paragraph;
export const Lead = Stories.Lead;
