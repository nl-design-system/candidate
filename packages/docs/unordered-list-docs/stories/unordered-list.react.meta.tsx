import type { Meta } from '@storybook/react-vite';
import { UnorderedList, UnorderedListItem } from '@nl-design-system-candidate/unordered-list-react/css';

const meta = {
  argTypes: {
    children: {
      control: false,
      description: 'Eén of meer `UnorderedListItem` componenten.',
      table: {
        category: 'API',
        type: { summary: 'ReactNode' },
      },
      type: { name: 'other', value: 'ReactNode', required: false },
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
  },
  component: UnorderedList,
  subcomponents: { UnorderedListItem },
} satisfies Meta<typeof UnorderedList>;

export default meta;
