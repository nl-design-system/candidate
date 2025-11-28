import type { Meta } from '@storybook/react-vite';
import { Mark } from '@nl-design-system-candidate/mark-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlMark: {
      name: 'nl-mark',
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
  component: (props) => <Mark {...props} />,
} satisfies Meta;

export default meta;
