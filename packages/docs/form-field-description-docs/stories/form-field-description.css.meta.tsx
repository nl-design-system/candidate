import type { Meta } from '@storybook/react-vite';
import { FormFieldDescription } from '@nl-design-system-candidate/form-field-description-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlFormFieldDescription: {
      name: 'nl-form-field-description',
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
  component: (props) => <FormFieldDescription {...props} />,
} satisfies Meta;

export default meta;
