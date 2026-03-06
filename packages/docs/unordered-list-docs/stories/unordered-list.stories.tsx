import type { StoryObj } from '@storybook/react-vite';
import type { UnorderedListProps } from '@nl-design-system-candidate/unordered-list-react';

type Story = StoryObj<UnorderedListProps>;

export const UnorderedList: Story = {
  name: 'Unordered List',
  args: {
    children: `Unordered List`,
  },
};
