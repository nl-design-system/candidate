import type { Meta } from '@storybook/react-vite';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlNumberBadge: {
      name: 'nl-number-badge',
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
  component: (props) => <NumberBadge {...props} />,
} satisfies Meta;

export default meta;
