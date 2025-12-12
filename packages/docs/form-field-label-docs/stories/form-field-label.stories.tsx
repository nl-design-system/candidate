import type { StoryObj } from '@storybook/react-vite';
import type { FormFieldLabelProps } from '@nl-design-system-candidate/form-field-label-react';

type Story = StoryObj<FormFieldLabelProps>;

export const FormFieldLabel: Story = {
  name: 'Form Field Label',
  args: {
    children: `Form Field Label`,
  },
};
