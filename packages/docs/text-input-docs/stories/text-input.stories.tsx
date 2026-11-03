import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput as TextInputComponent } from '@nl-design-system-candidate/text-input-react';

const _meta = { component: TextInputComponent } satisfies Meta<typeof TextInputComponent>;

type Story = StoryObj<typeof _meta>;

export const TextInput: Story = {
  name: 'Text Input',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Een standaard Text Input.',
      },
    },
  },
};

export const TextInputWithValue: Story = {
  name: 'Text Input met een waarde',
  args: {
    defaultValue: 'Jan Jansen',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Text Input met een ingevulde waarde.',
      },
    },
  },
};

export const TextInputWithPlaceholder: Story = {
  name: 'Text Input met een placeholder',
  args: {
    placeholder: '1234 AB',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met een voorbeeld van de waarde als placeholder. De placeholder verdwijnt zodra je iets invult, gebruik hem daarom niet als vervanging van een label of instructie.',
      },
    },
  },
};

export const TextInputType: Story = {
  name: 'Text Input met type email',
  args: {
    defaultValue: 'jan.jansen@example.com',
    type: 'email',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input voor een e-mailadres. Met het `type` HTML-attribuut kies je ook het juiste toetsenbord op een mobiel apparaat.',
      },
    },
  },
};

export const TextInputSize: Story = {
  name: 'Text Input met size xs',
  args: {
    defaultValue: '1234 AB',
    size: 'xs',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met een breedte die past bij de verwachte lengte van de waarde. Kies uit `xs`, `sm`, `md`, `lg`, `xl` of `stretch`.',
      },
    },
  },
};

export const TextInputInvalid: Story = {
  name: 'Text Input invalid',
  args: {
    defaultValue: 'jan.jansen',
    invalid: true,
    type: 'email',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met een ongeldige waarde. Koppel ook een Form Field Error Message via `aria-describedby`, zodat duidelijk is wat er mis is.',
      },
    },
  },
};

export const TextInputDisabled: Story = {
  name: 'Text Input disabled',
  args: {
    defaultValue: 'Jan Jansen',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Text Input die je niet kunt gebruiken.',
      },
    },
  },
};

export const TextInputReadOnly: Story = {
  name: 'Text Input read-only',
  args: {
    defaultValue: 'Jan Jansen',
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Text Input waarvan je de waarde kunt lezen en kopiëren, maar niet aanpassen.',
      },
    },
  },
};

export const TextInputRequired: Story = {
  name: 'Text Input required',
  args: {
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input die ingevuld moet worden. Het `required` HTML-attribuut heeft geen eigen styling, maak in het label duidelijk dat het veld verplicht is.',
      },
    },
  },
};
