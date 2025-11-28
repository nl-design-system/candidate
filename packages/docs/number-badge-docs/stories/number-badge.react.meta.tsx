import type { Meta } from '@storybook/react-vite';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    label: { table: { category: 'API' }, type: 'string' },
    value: { table: { category: 'API' }, type: 'number' },
  },
  component: NumberBadge,
} satisfies Meta<typeof NumberBadge>;

export default meta;
