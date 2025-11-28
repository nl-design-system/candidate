import type { Meta } from '@storybook/react-vite';
import { Code } from '@nl-design-system-candidate/code-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlCode: {
      name: 'nl-code',
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
  component: (props) => <Code {...props} />,
} satisfies Meta;

export default meta;
