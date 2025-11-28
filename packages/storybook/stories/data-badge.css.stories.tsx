import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/data-badge-react/package.json';
import { DataBadge as DataBadgeComponent } from '@nl-design-system-candidate/data-badge-react';
import metaDataBadge from '@nl-design-system-candidate/data-badge-docs/stories/data-badge.css.meta';
import * as Stories from '@nl-design-system-candidate/data-badge-docs/stories/data-badge.stories';
import { mergeCssMeta } from '../src/mergeCssMeta';

const meta = {
  ...mergeCssMeta(metaDataBadge, {
    parameters: {
      externalLinks: [
        {
          name: 'Open op NL Design System',
          url: 'https://nldesignsystem.nl/data-badge',
        },
        {
          name: 'Open op GitHub',
          url: packageJSON.homepage,
        },
      ],
    },
  }),
  title: 'CSS Componenten/Data Badge',
  id: 'css-data-badge',
} satisfies Meta<typeof DataBadgeComponent>;

export default meta;

export const DataBadge = Stories.DataBadge;
export const DataBadgeMetValue = Stories.DataBadgeMetValue;
export const DataBadgeMetDateTime = Stories.DataBadgeMetDateTime;
