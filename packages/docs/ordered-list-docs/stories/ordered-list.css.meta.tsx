import type { Meta } from '@storybook/react-vite';
import { OrderedList } from '@nl-design-system-candidate/ordered-list-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlOrderedList: {
      name: 'nl-ordered-list',
      description: 'De basis class van dit component',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    children: {
      table: { disable: true },
    },
  },
  component: (props) => <OrderedList {...props} />,
} satisfies Meta;

export default meta;
