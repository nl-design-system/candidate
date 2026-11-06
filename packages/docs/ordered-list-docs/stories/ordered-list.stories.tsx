import type { StoryObj } from '@storybook/react-vite';
import { OrderedListItem, type OrderedListProps } from '@nl-design-system-candidate/ordered-list-react';

type Story = StoryObj<OrderedListProps>;

export const OrderedList: Story = {
  name: 'Ordered List',
  args: {
    children: (
      <>
        <OrderedListItem>Paspoortfoto, niet ouder dan 6 maanden</OrderedListItem>
        <OrderedListItem>Je oude paspoort</OrderedListItem>
        <OrderedListItem>Je afspraakbevestiging</OrderedListItem>
      </>
    ),
  },
};
