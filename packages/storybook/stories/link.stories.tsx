import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import { ParagraphDecorator } from '@nl-design-system-candidate/storybook-shared/src/ParagraphDecorator';
import type { Meta } from '@storybook/react-vite';
import '../../components-css/link-css/src/link.scss';
import '../../components-css/paragraph-css/src/paragraph.scss';
import packageJSON from '../../components-react/link-react/package.json';
import { Link } from '../../components-react/link-react/src/link';
import linkMeta from '@nl-design-system-candidate/link-docs/stories/link.react.meta';
import * as Stories from '@nl-design-system-candidate/link-docs/stories/link.stories';

const meta = {
  ...linkMeta,
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
  title: 'Link',
} satisfies Meta<typeof Link>;

export default meta;

export const Default = Stories.Default;
export const LinkInParagraph = Stories.LinkInParagraph;
