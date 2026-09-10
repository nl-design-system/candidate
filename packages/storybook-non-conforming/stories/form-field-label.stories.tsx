import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/form-field-label-docs/docs/component.md?raw';
import '../../components-css/form-field-label-css/src/form-field-label.scss';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel } from '../../components-react/form-field-label-react/src/form-field-label';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: FormFieldLabel,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
      source: {
        type: 'dynamic',
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/form-field-label',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Form Field Label',
} satisfies Meta<typeof FormFieldLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const xxxx: Story = {
  name: `Fout: Form Field Label zonder koppeling aan een invoerveld`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met tabindex`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met interactieve content`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Toggletip`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label als display: block waardoor een te groot klikgebied ontstaat`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met required/optional tekst in de label in plaats van Form Field Label Suffix`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met optioneel aangeduid door middel van een asterisk`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label waarbij aria-labelledby het HTML label overschrijft`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met aria-labelledby terwijl het HTML label al voldoende is`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met zowel HTML for als een niet-overeenkomende geneste input`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Input Group in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Text Input in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met File Input in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Number Input in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Password Input in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Text Area in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Date Input in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Date Input Group in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Date Picker in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Checkbox Group in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Radio Group in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Calendar in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Range in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Select in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label met Select Combobox in de input slot`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Fout: Form Field Label waar je de description tekst eigenlijk nu in de label aan het zetten bent`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// Mogelijke story implementatie oplossing:
// <FormField>
// <FormFieldLabel for="postcode-input">Postcode</FormFieldLabel>
// <input type="text" aria-label="Postcode" aria-describedby="postcode-description" id="postcode-input" />
// <FormFieldDescription id="postcode-description">Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</FormFieldDescription>
// </FormField>
// `Fout: Form Field Label met aria-label waardoor de label overschreven wordt `,
export const FormFieldLabelAriaLabel: Story = {
  name: `Form Field Label met aria-label op invoer-element dat Form Field Label overschrijft`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Fout: Een Form Field Label gekoppeld aan een invoer-element. Het invoer-element heeft ook een aria-label dat de toegankelijke naam vanuit Form Field Label overschrijft. Gebruik geen aria-label in combinatie met een Form Field Label.`,
      },
    },
  },
};
