import type { Meta } from '@storybook/react-vite';
import { Mark } from '@nl-design-system-candidate/mark-react/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
  },
  component: Mark,
} satisfies Meta<typeof Mark>;

export default meta;
