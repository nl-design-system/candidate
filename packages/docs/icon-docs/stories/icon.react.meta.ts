import type { Meta } from '@storybook/react-vite';
import { Icon } from '@nl-design-system-candidate/icon-react/css';

const meta = {
  argTypes: {
    bidiMirrored: {
      control: 'boolean',
      description:
        'If `true` flips the icon horizontally in right-to-left layouts. This is useful for directional icons like arrows or chevrons.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['em', 'ex', 'lh'],
      table: {
        type: { summary: 'union' },
      },
    },
    'aria-label': { table: { category: 'API' }, type: 'string' },
    'aria-labelledby': { table: { category: 'API' }, type: 'string' },
    // Hide children as it's a React component which cannot be displayed nicely in the Storybook UI
    children: { table: { disable: true } },
    className: { table: { category: 'API' }, type: 'string' },
    dir: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'rtl', 'ltr', 'auto'],
      table: { category: 'API' },
    },
    role: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'img'],
      table: { category: 'API' },
    },
  },
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
