import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../../components-react/paragraph-react/src/css';

const meta = {
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    children: { table: { category: 'API' } },
    purpose: {
      options: [undefined, 'lead'],
      control: { type: 'select', labels: { undefined: '(undefined)' } },
      table: { category: 'API' },
    },
  },
  args: {
    children: 'Op brute wĳze ving de schooljuf de quasi-kalme lynx.',
    purpose: undefined,
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Lead: Story = { args: { purpose: 'lead' } };
