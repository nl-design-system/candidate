import type { Meta } from '@storybook/react-vite';
import { OrderedList, OrderedListItem } from '@nl-design-system-candidate/ordered-list-react/css';

const meta = {
  argTypes: {
    children: {
      control: false,
      description: 'Eén of meer `OrderedListItem` componenten.',
      table: {
        category: 'API',
        type: { summary: 'ReactNode' },
      },
      type: { name: 'other', value: 'ReactNode', required: false },
    },
    reversed: {
      control: { type: 'boolean' },
      description: 'Nummert de items in omgekeerde volgorde.',
      table: {
        category: 'API',
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    role: {
      control: { type: 'text' },
      description: 'Gebruik altijd `list`, zodat WebKit-browsers de lijst als lijst blijven herkennen.',
      table: {
        category: 'API',
        type: { summary: 'string' },
      },
      type: { name: 'string', required: false },
    },
    start: {
      control: { type: 'number' },
      description: 'Het nummer waarmee de lijst begint.',
      table: {
        category: 'API',
        type: { summary: 'number' },
      },
      type: { name: 'number', required: false },
    },
    type: {
      control: { type: 'select' },
      description: 'Het soort nummering: cijfers, kleine of hoofdletters, of kleine of hoofdletters Romeinse cijfers.',
      options: ['1', 'a', 'A', 'i', 'I'],
      table: {
        category: 'API',
        type: { summary: "'1' | 'a' | 'A' | 'i' | 'I'" },
      },
      type: { name: 'string', required: false },
    },
  },
  component: OrderedList,
  subcomponents: { OrderedListItem },
} satisfies Meta<typeof OrderedList>;

export default meta;
