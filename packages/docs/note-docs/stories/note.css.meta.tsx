import type { Meta } from '@storybook/react-vite';
import { Note } from '@nl-design-system-candidate/note-react/css';

const CLASSES = 'classes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ATTRIBUTES = 'attributes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlNote: {
      name: 'nl-note',
      description: 'De basis class van de component.',
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
    // TODO: Ontwikkelfase: aanvullen adhv acceptance-criteria
  },
  component: (props) => <Note {...props} />,
} satisfies Meta;

export default meta;
