import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/skip-link-react/package.json';
import { SkipLink as SkipLinkComponent } from '../../components-react/skip-link-react/src/skip-link';
import skipLinkMeta from '@nl-design-system-candidate/skip-link-docs/stories/skip-link.css.meta';
import * as Stories from '@nl-design-system-candidate/skip-link-docs/stories/skip-link.stories';
import { mergeCssMeta } from '../src/mergeCssMeta';

const meta = {
  ...mergeCssMeta(skipLinkMeta, {
    parameters: {
      externalLinks: [
        {
          name: 'Open op NL Design System',
          url: 'https://nldesignsystem.nl/skip-link',
        },
        {
          name: 'Open op GitHub',
          url: packageJSON.homepage,
        },
      ],
    },
  }),
  title: 'CSS Componenten/Skip Link',
  id: 'css-skip-link',
} satisfies Meta<typeof SkipLinkComponent>;

export default meta;

export const SkipLink = Stories.SkipLink;
