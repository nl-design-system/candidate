import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/paragraph-css/package.json';
import { Paragraph as ParagraphComponent } from '@nl-design-system-candidate/paragraph-react';
import paragraphMeta from '@nl-design-system-candidate/paragraph-docs/stories/paragraph.css.meta';
import * as Stories from '@nl-design-system-candidate/paragraph-docs/stories/paragraph.stories';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/paragraph', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(paragraphMeta, externalLinks, {
    decorators: [ExampleBodyTextDecorator],
    globals: {
      dir: 'ltr',
      lang: 'nl',
    },
  }),
  title: 'CSS Componenten/Paragraph',
  id: 'css-paragraph',
} satisfies Meta<typeof ParagraphComponent>;

export default meta;

export const Paragraph = Stories.Paragraph;
export const Lead = Stories.Lead;
