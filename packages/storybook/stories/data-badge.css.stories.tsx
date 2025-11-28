import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/data-badge-css/package.json';
import { DataBadge as DataBadgeComponent } from '@nl-design-system-candidate/data-badge-react';
import dataBadgeMeta from '@nl-design-system-candidate/data-badge-docs/stories/data-badge.css.meta';
import * as Stories from '@nl-design-system-candidate/data-badge-docs/stories/data-badge.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/data-badge', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(dataBadgeMeta, externalLinks),
  title: 'CSS Componenten/Data Badge',
  id: 'css-data-badge',
} satisfies Meta<typeof DataBadgeComponent>;

export default meta;

export const DataBadge = Stories.DataBadge;
export const DataBadgeMetValue = Stories.DataBadgeMetValue;
export const DataBadgeMetDateTime = Stories.DataBadgeMetDateTime;
