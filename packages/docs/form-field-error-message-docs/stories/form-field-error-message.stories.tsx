import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldErrorMessage as FormFieldErrorMessageComponent } from '@nl-design-system-candidate/form-field-error-message-react';

const _meta = { component: FormFieldErrorMessageComponent } satisfies Meta<typeof FormFieldErrorMessageComponent>;

type Story = StoryObj<typeof _meta>;

export const FormFieldErrorMessage: Story = {
  name: 'Form Field Error Message',
  args: {
    children: 'Het veld Naam is niet ingevuld. Dit is een verplicht veld.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard Form Field Error Message',
      },
    },
  },
};
