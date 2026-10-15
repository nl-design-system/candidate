import type { Meta } from '@storybook/react-vite';
import { FormFieldStatus } from '@nl-design-system-candidate/form-field-status-react/css';

const CLASSES = 'classes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ATTRIBUTES = 'attributes';

const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlFormFieldStatus: {
      name: 'nl-form-field-status',
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
  component: (props) => <FormFieldStatus {...props} />,
} satisfies Meta;

export default meta;
