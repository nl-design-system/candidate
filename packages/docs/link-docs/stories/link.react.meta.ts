import type { Meta } from '@storybook/react-vite';
import { Link } from '@nl-design-system-candidate/link-react/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    href: {
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: 'API',
        type: { summary: "AnchorHTMLAttributes['href']" },
      },
    },
    target: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, '_blank', '_parent', '_self', '_top'],
      table: { category: 'API' },
    },
    current: {
      control: 'object',
      table: {
        type: { summary: "AnchorHTMLAttributes['aria-current']" },
      },
    },
    inlineBox: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
