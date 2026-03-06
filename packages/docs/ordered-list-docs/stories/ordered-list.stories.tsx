import type { StoryObj } from '@storybook/react-vite';
import type { OrderedListProps } from '@nl-design-system-candidate/ordered-list-react';

type Story = StoryObj<OrderedListProps>;

export const OrderedList: Story = {
  name: 'Ordered List',
  args: {
    children: `Ordered List`,
  },
};
