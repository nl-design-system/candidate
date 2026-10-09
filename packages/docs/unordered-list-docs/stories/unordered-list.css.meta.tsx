import type { Meta } from '@storybook/react-vite';
import { UnorderedList } from '@nl-design-system-candidate/unordered-list-react/css';

const CLASSES = 'classes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ATTRIBUTES = 'attributes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlUnorderedList: {
      name: 'nl-unordered-list',
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
  component: (props) => <UnorderedList {...props} />,
} satisfies Meta;

export default meta;
