import type { StoryObj } from '@storybook/react-vite';
import type { NumberBadgeProps } from '@nl-design-system-candidate/number-badge-react';

type Story = StoryObj<NumberBadgeProps>;

export const Default: Story = {
  name: 'Number Badge',
  args: {
    children: '42',
  },
};

export const NumberBadgeWithValue: Story = {
  name: 'Number Badge met "value"',
  args: {
    children: '42',
    value: 42,
  },
};

export const NumberBadgeWithLabel: Story = {
  name: 'Number Badge met "label"',
  args: {
    children: '42',
    label: '42 ongelezen berichten',
    value: 42,
  },
};
