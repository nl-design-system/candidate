import type { Meta } from '@storybook/react-vite';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlDataBadge: {
      name: 'nl-data-badge',
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
  component: (props) => <DataBadge {...props} />,
} satisfies Meta;

export default meta;
