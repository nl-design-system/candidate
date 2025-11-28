import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/link-css/package.json';
import { Link as LinkComponent } from '@nl-design-system-candidate/link-react';
import linkMeta from '@nl-design-system-candidate/link-docs/stories/link.css.meta';
import * as Stories from '@nl-design-system-candidate/link-docs/stories/link.stories';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { ParagraphDecorator } from '@nl-design-system-candidate/storybook-shared/src/ParagraphDecorator';
import '../../components-css/paragraph-css/src/paragraph.scss';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/link', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(linkMeta, externalLinks, { decorators: [ParagraphDecorator, ExampleBodyTextDecorator] }),
  title: 'CSS Componenten/Link',
  id: 'css-link',
} satisfies Meta<typeof LinkComponent>;

export default meta;

export const Link = Stories.Link;
export const LinkInEenParagraph = Stories.LinkInEenParagraph;
