import type { StoryObj } from '@storybook/react-vite';
import type { FormFieldErrorMessageProps } from '@nl-design-system-candidate/form-field-error-message-react';

type Story = StoryObj<FormFieldErrorMessageProps>;

export const FormFieldErrorMessage: Story = {
  name: 'Form Field Error Message',
  args: {
    children: `Form Field Error Message`,
  },
};
