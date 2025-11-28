import { merge } from 'lodash-es';
import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/link-react/package.json';
import { Link as LinkComponent } from '@nl-design-system-candidate/link-react';
import linkMeta from '@nl-design-system-candidate/link-docs/stories/link.react.meta';
import * as Stories from '@nl-design-system-candidate/link-docs/stories/link.stories';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { ParagraphDecorator } from '@nl-design-system-candidate/storybook-shared/src/ParagraphDecorator';
import '../../components-css/paragraph-css/src/paragraph.scss';

const meta = {
  ...merge({}, linkMeta, {
    decorators: [ParagraphDecorator, ExampleBodyTextDecorator],
    parameters: {
      externalLinks: [
        {
          name: 'Open op NL Design System',
          url: 'https://nldesignsystem.nl/link',
        },
        {
          name: 'Open op GitHub',
          url: packageJSON.homepage,
        },
      ],
    },
  }),
  title: 'React Componenten/Link',
  id: 'link',
} satisfies Meta<typeof LinkComponent>;

export default meta;

export const Link = Stories.Link;
export const LinkInEenParagraph = Stories.LinkInEenParagraph;
