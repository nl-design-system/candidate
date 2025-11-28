import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/icon-css/package.json';
import { Icon as IconComponent } from '@nl-design-system-candidate/icon-react';
import iconMeta from '@nl-design-system-candidate/icon-docs/stories/icon.css.meta';
import * as Stories from '@nl-design-system-candidate/icon-docs/stories/icon.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/icon', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(iconMeta, externalLinks),
  title: 'CSS Componenten/Icon',
  id: 'css-icon',
} satisfies Meta<typeof IconComponent>;

export default meta;

export const Icon = Stories.Icon;
