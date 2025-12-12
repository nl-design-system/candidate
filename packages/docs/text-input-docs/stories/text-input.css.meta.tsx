import type { Meta } from '@storybook/react-vite';
import { TextInput } from '@nl-design-system-candidate/text-input-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlTextInput: {
      name: 'nl-text-input',
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
  component: (props) => <TextInput {...props} />,
} satisfies Meta;

export default meta;
