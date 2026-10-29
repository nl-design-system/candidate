import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldLabel as FormFieldLabelComponent } from '@nl-design-system-candidate/form-field-label-react';

const _meta = { component: FormFieldLabelComponent } satisfies Meta<typeof FormFieldLabelComponent>;

type Story = StoryObj<typeof _meta>;

export const FormFieldLabel: Story = {
  name: 'Form Field Label',
  args: {
    children: 'Postcode',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een standaard label bij een invoerveld.',
      },
    },
  },
};

export const FormFieldLabelDisabled: Story = {
  name: 'Form Field Label Disabled',
  args: {
    children: 'Postcode',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een label waarvan de stijl herkenbaar overeenkomt met de disabled formuliervelden.',
      },
    },
  },
};

export const FormFieldLabelOptionCheckbox: Story = {
  name: 'Form Field Label Option met Checkbox',
  args: {
    children: 'Ik wil de nieuwsbrief ontvangen',
    input: <input type="checkbox" name="nieuwsbrief" />,
    type: 'option',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een label met een checkbox, voor een optie om te kiezen.',
      },
    },
  },
};

export const FormFieldLabelOptionRadio: Story = {
  name: 'Form Field Label Option met Radio Button',
  args: {
    children: 'Per e-mail',
    input: <input type="radio" name="contact" />,
    type: 'option',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een label met een radio button, voor een optie om te kiezen.',
      },
    },
  },
};

export const FormFieldLabelOptionDisabled: Story = {
  name: 'Form Field Label Option Disabled',
  args: {
    children: 'Ik wil de nieuwsbrief ontvangen',
    disabled: true,
    input: <input type="checkbox" name="nieuwsbrief" disabled />,
    type: 'option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een label met een disabled checkbox. Zet het HTML `disabled` attribuut ook op de checkbox zelf: de `disabled` prop verandert alleen de stijl van het label.',
      },
    },
  },
};

export const FormFieldLabelInherit: Story = {
  name: 'Form Field Label Inherit',
  args: {
    children: 'Wat is uw naam?',
    type: 'inherit',
  },
  decorators: [
    (Story) => (
      <h1>
        <Story />
      </h1>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Een label binnen een HTML `h1` element, dat de styling van de heading overneemt.',
      },
    },
  },
};
