import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldDescription as FormFieldDescriptionComponent } from '@nl-design-system-candidate/form-field-description-react';

const _meta = { component: FormFieldDescriptionComponent } satisfies Meta<typeof FormFieldDescriptionComponent>;

type Story = StoryObj<typeof _meta>;

export const FormFieldDescription: Story = {
  name: 'Form Field Description',
  args: {
    children:
      'Beschrijf het probleem zo specifiek mogelijk. Vermeld in ieder geval de foutcode (indien bekend), wanneer het probleem voor het eerst optrad en welke stappen je al hebt ondernomen. (Max. 500 woorden).',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard foutmelding.',
      },
    },
  },
};

export const FormFieldDescriptionDisabled: Story = {
  name: 'Form Field Description Disabled',
  args: {
    children:
      'Beschrijf het probleem zo specifiek mogelijk. Vermeld in ieder geval de foutcode (indien bekend), wanneer het probleem voor het eerst optrad en welke stappen je al hebt ondernomen. (Max. 500 woorden).',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een foutmelding waarvan de stijl herkenbaar overeenkomt met de disabled formuliervelden.',
      },
    },
  },
};
