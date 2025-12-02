import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/paragraph-react/package.json';
import { Paragraph as ParagraphComponent } from '@nl-design-system-candidate/paragraph-react';
import paragraphMeta from '@nl-design-system-candidate/paragraph-docs/stories/paragraph.react.meta';
import * as Stories from '@nl-design-system-candidate/paragraph-docs/stories/paragraph.stories';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/paragraph', packageJSON.homepage);

const meta = {
  ...paragraphMeta,
  ...externalLinks,
  decorators: [ExampleBodyTextDecorator],
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  title: 'React Componenten/Paragraph',
  id: 'paragraph',
} satisfies Meta<typeof ParagraphComponent>;

export default meta;

export const Paragraph = Stories.Paragraph;
export const Lead = Stories.Lead;
