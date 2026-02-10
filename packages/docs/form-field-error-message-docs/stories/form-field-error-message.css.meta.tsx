import type { Meta } from '@storybook/react-vite';
import { FormFieldErrorMessage } from '@nl-design-system-candidate/form-field-error-message-react/css';

const CLASSES = 'classes';

const meta = {
  argTypes: {
    nlFormFieldErrorMessage: {
      name: 'nl-form-field-error-message',
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
  component: (props) => <FormFieldErrorMessage {...props} />,
} satisfies Meta;

export default meta;
