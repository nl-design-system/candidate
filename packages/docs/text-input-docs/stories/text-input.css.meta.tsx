import type { Meta } from '@storybook/react-vite';
import { TextInput } from '@nl-design-system-candidate/text-input-react/css';

const CLASSES = 'classes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ATTRIBUTES = 'attributes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlTextInput: {
      name: 'nl-text-input',
      description: 'De basis class van de component.',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    children: {
      name: 'content',
      description: 'De inhoud van de component.',
      control: 'text',
      table: {
        category: CHILDREN,
        type: { summary: undefined },
      },
    },
    // TODO: Ontwikkelfase: aanvullen adhv acceptance-criteria
  },
  component: (props) => <TextInput {...props} />,
} satisfies Meta;

export default meta;
