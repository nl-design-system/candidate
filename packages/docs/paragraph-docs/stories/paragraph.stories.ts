import type { StoryObj } from '@storybook/react-vite';
import type { ParagraphProps } from '@nl-design-system-candidate/paragraph-react';

type Story = StoryObj<ParagraphProps>;

export const Paragraph: Story = {
  name: 'Paragraph',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    purpose: undefined,
  },
};

export const Lead: Story = {
  name: 'Paragraph Lead',
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    purpose: 'lead',
  },
};
