import type { Meta } from '@storybook/react-vite';
import { Heading } from '@nl-design-system-candidate/heading-react/css';

const meta = {
  argTypes: {
    appearance: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6'],
      table: { category: 'API', type: { summary: 'literal' } },
    },
    children: { table: { category: 'API' } },
    level: {
      type: { required: true },
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: { category: 'API', type: { summary: 'unknown[number]' } },
    },
  },
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
