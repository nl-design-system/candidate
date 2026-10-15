import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldStatus as FormFieldStatusComponent } from '@nl-design-system-candidate/form-field-status-react';

const _meta = { component: FormFieldStatusComponent } satisfies Meta<typeof FormFieldStatusComponent>;

type Story = StoryObj<typeof _meta>;

export const FormFieldStatus: Story = {
  name: 'Form Field Status',
  args: {
    children: 'Form Field Status',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard Form Field Status',
      },
    },
  },
};
