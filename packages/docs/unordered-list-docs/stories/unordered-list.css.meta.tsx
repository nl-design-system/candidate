import type { Meta } from '@storybook/react-vite';
import { UnorderedList } from '@nl-design-system-candidate/unordered-list-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlUnorderedList: {
      name: 'nl-unordered-list',
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
  component: (props) => <UnorderedList {...props} />,
} satisfies Meta;

export default meta;
