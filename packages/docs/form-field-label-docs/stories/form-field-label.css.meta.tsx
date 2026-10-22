import type { Meta } from '@storybook/react-vite';
import { FormFieldLabel } from '@nl-design-system-candidate/form-field-label-react/css';

const CLASSES = 'classes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ATTRIBUTES = 'attributes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CHILDREN = 'children';

const meta = {
  argTypes: {
    nlFormFieldLabel: {
      name: 'nl-form-field-label',
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
  component: (props) => <FormFieldLabel {...props} />,
} satisfies Meta;

export default meta;
