import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/skip-link-css/package.json';
import { SkipLink as SkipLinkComponent } from '../../components-react/skip-link-react/src/skip-link';
import skipLinkMeta from '@nl-design-system-candidate/skip-link-docs/stories/skip-link.css.meta';
import * as Stories from '@nl-design-system-candidate/skip-link-docs/stories/skip-link.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/skip-link', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(skipLinkMeta, externalLinks),
  title: 'CSS Componenten/Skip Link',
  id: 'css-skip-link',
} satisfies Meta<typeof SkipLinkComponent>;

export default meta;

export const SkipLink = Stories.SkipLink;
