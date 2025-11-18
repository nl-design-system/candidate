import type { StoryObj } from '@storybook/react-vite';
import type { DataBadgeProps } from '@nl-design-system-candidate/data-badge-react';

type Story = StoryObj<DataBadgeProps>;

export const Default: Story = {
  name: 'Data Badge',
  args: {
    children: '42',
  },
};

export const DataBadgeWithValue: Story = {
  name: 'Data Badge met "value"',
  args: {
    children: '42',
    value: '42',
  },
};

export const DataBadgeWithDateTime: Story = {
  name: 'Data Badge met "dateTime"',
  args: {
    children: 'Donderdag 1 januari 1970 om 01:00:00',
    dateTime: '1970-01-01T00:00:00+01:00',
  },
};
