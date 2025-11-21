import type { Meta } from '@storybook/react-vite';
import { Link } from '@nl-design-system-candidate/link-react/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    href: { table: { category: 'API' } },
    target: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, '_blank', '_parent', '_self', '_top'],
      table: { category: 'API' },
    },
  },
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
