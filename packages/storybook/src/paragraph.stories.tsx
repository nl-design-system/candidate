import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../../components-react/paragraph-react/src/css';

const meta = {
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    purpose: undefined,
  },
  argTypes: {
    children: { table: { category: 'API' } },
    purpose: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'lead'],
      table: { category: 'API' },
    },
  },
  component: Paragraph,
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Lead: Story = { args: { purpose: 'lead' } };
