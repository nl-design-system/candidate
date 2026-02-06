import type { StoryObj } from '@storybook/react-vite';
import type { FormFieldDescriptionProps } from '@nl-design-system-candidate/form-field-description-react';

type Story = StoryObj<FormFieldDescriptionProps>;

export const FormFieldDescription: Story = {
  name: 'Form Field Description',
  args: {
    children: `Form Field Description`,
  },
};
