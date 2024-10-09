import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../../components-react/paragraph/src/paragraph';

const meta = {
  component: Paragraph,
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Lead: Story = { args: { appearance: 'lead' } };

export const Small: Story = { args: { appearance: 'small' } };
