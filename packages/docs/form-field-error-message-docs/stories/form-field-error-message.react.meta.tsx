import type { Meta } from '@storybook/react-vite';
import { FormFieldErrorMessage } from '@nl-design-system-candidate/form-field-error-message-react/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: FormFieldErrorMessage,
} satisfies Meta<typeof FormFieldErrorMessage>;

export default meta;
