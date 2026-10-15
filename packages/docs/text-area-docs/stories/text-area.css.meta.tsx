import type { Meta } from '@storybook/react-vite';
import { TextArea } from '@nl-design-system-candidate/text-area-react/css';

const CLASSES = 'classes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ATTRIBUTES = 'attributes';

const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlTextArea: {
      name: 'nl-text-area',
      description: 'De basis class van de component.',
      control: false,
      type: { name: 'other', value: 'string', required: true },
      table: {
        category: CLASSES,
        type: { summary: undefined },
      },
    },
    // TODO: Ontwikkelfase: moet de children verstopt? Doe dan `children: { table: { disable: true } }`
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
  component: (props) => <TextArea {...props} />,
} satisfies Meta;

export default meta;
