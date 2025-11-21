import type { Meta } from '@storybook/react-vite';
import { SkipLink } from '@nl-design-system-candidate/skip-link-react/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    href: {
      type: { name: 'other', value: 'string', required: true },
      table: { category: 'API', type: { summary: "AnchorHTMLAttributes['href']" } },
    },
    target: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, '_blank', '_parent', '_self', '_top'],
      table: { category: 'API' },
    },
  },
  component: SkipLink,
} satisfies Meta<typeof SkipLink>;

export default meta;
