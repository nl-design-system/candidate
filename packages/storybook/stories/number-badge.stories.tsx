import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/number-badge-react/package.json';
import { NumberBadge } from '../../components-react/number-badge-react/src/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    label: { table: { category: 'API' }, type: 'string' },
    value: { table: { category: 'API' }, type: 'number' },
  },
  component: NumberBadge,
  parameters: {
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=1233-4271',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Number Badge',
} satisfies Meta<typeof NumberBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberBadgeChildren: Story = {
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
