import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/data-badge-react/package.json';
import { DataBadge as DataBadgeComponent } from '@nl-design-system-candidate/data-badge-react';
import dataBadgeMeta from '@nl-design-system-candidate/data-badge-docs/stories/data-badge.react.meta';
import * as Stories from '@nl-design-system-candidate/data-badge-docs/stories/data-badge.stories';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/data-badge', packageJSON.homepage);

const meta = {
  ...dataBadgeMeta,
  ...externalLinks,
  title: 'React Componenten/Data Badge',
  id: 'data-badge',
} satisfies Meta<typeof DataBadgeComponent>;

export default meta;

export const DataBadge = Stories.DataBadge;
export const DataBadgeMetValue = Stories.DataBadgeMetValue;
export const DataBadgeMetDateTime = Stories.DataBadgeMetDateTime;
