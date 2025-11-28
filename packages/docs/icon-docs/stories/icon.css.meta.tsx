import type { Meta } from '@storybook/react-vite';
import { Icon } from '@nl-design-system-candidate/icon-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlIcon: {
      name: 'nl-icon',
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
  component: (props) => <Icon {...props} />,
} satisfies Meta;

export default meta;
