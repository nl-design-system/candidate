import type { Meta } from '@storybook/react-vite';
import { OrderedList } from '@nl-design-system-candidate/ordered-list-react/css';

const CLASSES = 'classes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ATTRIBUTES = 'attributes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlOrderedList: {
      name: 'nl-ordered-list',
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
  component: (props) => <OrderedList {...props} />,
} satisfies Meta;

export default meta;
