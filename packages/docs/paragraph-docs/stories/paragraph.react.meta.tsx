import type { Meta } from '@storybook/react-vite';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' } },
    purpose: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'lead'],
      table: { category: 'API' },
    },
  },
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;
