import type { Meta } from '@storybook/react-vite';
import { Heading } from '@nl-design-system-candidate/heading-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlHeading: {
      name: 'nl-heading',
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
  component: (props) => <Heading {...props} />,
} satisfies Meta;

export default meta;
