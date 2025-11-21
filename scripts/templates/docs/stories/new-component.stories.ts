import type { StoryObj } from '@storybook/react-vite';
import type { NewComponentProps } from '@nl-design-system-candidate/new-component-react';

type Story = StoryObj<NewComponentProps>;

export const Default: Story = {
  name: 'New Component',
  args: {
    children: `New Component`,
  },
};
