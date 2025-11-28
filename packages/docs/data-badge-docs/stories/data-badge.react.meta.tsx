import type { Meta } from '@storybook/react-vite';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    dateTime: { if: { arg: 'value', exists: false }, table: { category: 'API' } },
    value: { if: { arg: 'dateTime', exists: false }, table: { category: 'API' } },
  },
  component: DataBadge,
} satisfies Meta<typeof DataBadge>;

export default meta;
