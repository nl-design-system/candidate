import type { Meta } from '@storybook/react-vite';
import '../../components-css/data-badge-css/src/data-badge.scss';
import packageJSON from '../../components-react/data-badge-react/package.json';
import { DataBadge } from '../../components-react/data-badge-react/src/data-badge';
import metaDataBadge from '@nl-design-system-candidate/data-badge-docs/stories/data-badge.react.meta';
import * as Stories from '@nl-design-system-candidate/data-badge-docs/stories/data-badge.stories';

const meta = {
  ...metaDataBadge,
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
  title: 'Data Badge',
} satisfies Meta<typeof DataBadge>;

export default meta;

export const Default = Stories.Default;
export const DataBadgeWithValue = Stories.DataBadgeWithValue;
export const DataBadgeWithDateTime = Stories.DataBadgeWithDateTime;
