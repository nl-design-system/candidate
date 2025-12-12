import type { StoryObj } from '@storybook/react-vite';
import type { TextInputProps } from '@nl-design-system-candidate/text-input-react';

type Story = StoryObj<TextInputProps>;

export const TextInput: Story = {
  name: 'Text Input',
  args: {
    children: `Text Input`,
  },
};
