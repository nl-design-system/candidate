import type { Meta } from '@storybook/react-vite';
import { FormFieldLabel } from '@nl-design-system-candidate/form-field-label-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlFormFieldLabel: {
      name: 'nl-form-field-label',
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
  component: (props) => <FormFieldLabel {...props} />,
} satisfies Meta;

export default meta;
