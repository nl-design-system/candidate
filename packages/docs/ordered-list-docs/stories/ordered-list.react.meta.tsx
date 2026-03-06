import type { Meta } from '@storybook/react-vite';
import { OrderedList } from '@nl-design-system-candidate/ordered-list-react/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: OrderedList,
} satisfies Meta<typeof OrderedList>;

export default meta;
