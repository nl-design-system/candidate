import type { StoryObj } from '@storybook/react-vite';
import type { ColorSampleProps } from '@nl-design-system-candidate/color-sample-react';

type Story = StoryObj<ColorSampleProps>;

export const ColorSample: Story = {
  name: 'Color Sample',
  args: {
    value: 'deeppink',
  },
};
