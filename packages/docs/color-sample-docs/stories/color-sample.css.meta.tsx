import type { Meta } from '@storybook/react-vite';
import { ColorSample } from '@nl-design-system-candidate/color-sample-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlColorSample: {
      name: 'nl-color-sample',
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
  component: (props) => <ColorSample {...props} />,
} satisfies Meta;

export default meta;
