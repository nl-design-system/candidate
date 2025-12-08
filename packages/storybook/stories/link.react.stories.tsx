import { merge } from 'lodash-es';
import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/link-react/package.json';
import { Link as LinkComponent } from '@nl-design-system-candidate/link-react';
import linkMeta from '@nl-design-system-candidate/link-docs/stories/link.react.meta';
import * as Stories from '@nl-design-system-candidate/link-docs/stories/link.stories';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { ParagraphDecorator } from '@nl-design-system-candidate/storybook-shared/src/ParagraphDecorator';
import '../../components-css/paragraph-css/src/paragraph.scss';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/link-docs/docs/description.md?raw';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/link', packageJSON.homepage);

const meta = {
  ...merge(linkMeta, externalLinks, {
    decorators: [ParagraphDecorator, ExampleBodyTextDecorator],
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Link',
  id: 'link',
} satisfies Meta<typeof LinkComponent>;

export default meta;

export const Link = Stories.Link;
export const LinkInEenParagraph = Stories.LinkInEenParagraph;
