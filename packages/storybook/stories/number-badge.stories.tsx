import type { Meta } from '@storybook/react-vite';
import '../../components-css/number-badge-css/src/number-badge.scss';
import packageJSON from '../../components-react/number-badge-react/package.json';
import { NumberBadge } from '../../components-react/number-badge-react/src/number-badge';
import numberBadgeMeta from '@nl-design-system-candidate/number-badge-docs/stories/number-badge.react.meta';
import * as Stories from '@nl-design-system-candidate/number-badge-docs/stories/number-badge.stories';

const meta = {
  ...numberBadgeMeta,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/number-badge',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Number Badge',
} satisfies Meta<typeof NumberBadge>;

export default meta;

export const Default = Stories.Default;
export const NumberBadgeWithValue = Stories.NumberBadgeWithValue;
export const NumberBadgeWithLabel = Stories.NumberBadgeWithLabel;
