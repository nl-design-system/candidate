import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/form-field-label-css/src/form-field-label.scss';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel } from '../../components-react/form-field-label-react/src/form-field-label';
import componentMarkdown from '../../docs/form-field-label-docs/docs/component.md?raw';
import tokens from '../../tokens/form-field-label-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

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
    testResult: {
      notApplicable: [
        // Vul aan door toegankelijkheidsexpert
      ],
      notTested: [
        // Vul aan door toegankelijkheidsexpert
      ],
      pass: [],
    },
    tokens,
  },
  title: 'Componenten/Form Field Label',
} satisfies Meta<typeof FormFieldLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const xxxx: Story = {
  name: `Form Field Label gekoppeld via HTML for`,
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
  name: `OPTION_ON_HOLD Form Field Label met genest invoerveld`,
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
  name: `Form Field Label met phrasing content`,
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
  name: `OPTION_ON_HOLD Form Field Label met type="option" (radio)`,
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
  name: `OPTION_ON_HOLD Form Field Label met type="option" (checkbox)`,
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
  name: `OPTION_ON_HOLD Form Field Label met type="option" (switch)`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// Voorbeeld:
// <h1>
//   <FormFieldLabel type="inherit" for="email">Email</FormFieldLabel>
// </h1>

export const FormFieldLabelHeading: Story = {
  name: `Form Field Label binnen een heading (type="inherit")`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `De \`Form Field Label\` component correct functioneert wanneer het onderdeel is van een heading, bijvoorbeeld in een meerstappenformulier. De semantiek van zowel de heading als het gekoppelde formulier-element moet behouden blijven. De styling van het heading-element word overgenomen op de \`Form Field Label\` component.`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `OPTION_ON_HOLD Form Field Label met type="option" en HTML for: dit is mogelijk, maar het is redundant om de for hier te zetten.`,
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
  name: `Form Field Label met disabled state`,
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
  name: `Form Field Label Suffix`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// Voorbeeld uitwerking
// <FormFieldLabel for="email">Email</FormFieldLabel>
// <FormFieldLabelSuffix id="email-required">Dit veld is verplicht.</FormFieldLabelSuffix>
// <input
//   id="email"
//   name="email"
//   type="email"
//   required
//   aria-describedby="email-required"
// />

export const FormFieldLabelSuffix: Story = {
  name: "Form Field Label met Form Field Label Suffix",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een \`FormFieldLabel\` component met een \`FormFieldLabelSuffix\` component, waarbij de suffix via de WAI-ARIA \`aria-describedby\` attribuut is gekoppeld aan het invoerveld. De \`FormFieldLabelSuffix\` component levert aanvullende informatie via WAI-ARIA \`aria-describedby\` attribuut zonder de toegankelijke naam van het invoerveld te wijzigen.`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Patroon: Form Field Label met verplicht veld (Form Field Label Suffix)`,
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
  name: `Patroon: Form Field Label met optioneel veld (Form Field Label Suffix)`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// Voorbeeld:
// <FormFieldLabel for="email">Email</FormFieldLabel>
// <FormFieldLabelSuffix id="email-required">Dit veld is verplicht.</FormFieldLabelSuffix>
// <FormFieldDescription id="email-description">
//   Jouw e-mailadres gebruik je als gebruikersnaam om in te loggen.
// </FormFieldDescription>
// <input
//   id="email"
//   name="email"
//   type="email"
//   required
//   aria-describedby="email-required email-description"
// />

export const FormFieldLabelSuffixAndDescription: Story = {
  name: "Form Field Label met Form Field Label Suffix en Form Field Description",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een \`FormFieldLabel\` component met zowel een \`FormFieldLabelSuffix\` component als een \`FormFieldDescription\` component, waarbij beide via de WAI-ARIA \`aria-describedby\` attribuut aan het invoerveld zijn gekoppeld. Beide leveren aanvullende informatie zonder de toegankelijke naam van het invoerveld te beïnvloeden.`,
      },
    },
  },
};
export const xxxx: Story = {
  name: `Patroon: Form Field Label met afwijkende line-height tussen Label en Suffix`,
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
  name: `Form Field Label met HTML for attribuut`,
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
  name: `Form Field Label zonder HTML for attribuut maar met geneste input`,
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
  name: `Form Field Label met HTML hidden attribuut`,
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
  name: `Form Field Label met HTML lang attribuut`,
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
  name: `Form Field Label met HTML dir attribuut`,
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
  name: `Form Field Label (default) opgebouwd met div`,
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
  name: `Form Field Label (default) opgebouwd met span`,
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
  name: `OPTION_ON_HOLD Form Field Label (option) opgebouwd met div`,
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
  name: `OPTION_ON_HOLD Form Field Label (option) opgebouwd met span`,
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
  name: `Form Field Label binnen nl-html--all`,
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
  name: `Form Field Label binnen nl-html--form-field-label`,
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
  name: `Form Field Label met type="inherit" gecombineerd met disabled: dit ondersteunen we niet uit onszelf, maar de story laat zien welke CSS je kan toepassen om het zelf te ondersteunen, ie h1:has(.nl-form-field-label--disabled)`,
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
  name: `OPTION_ON_HOLD Form Field Label met type="inherit" gecombineerd met input: dit ondersteunen we niet uit onszelf, maar de story laat zien welke CSS je kan toepassen om het zelf te ondersteunen, ie h1:has(.nl-form-field-label--option)`,
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
  name: `Form Field Label met vergrote tekstafstand`,
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
  name: `Form Field Label met tekst vergroot naar 200%`,
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
  name: `Form Field Label in Forced Colors modus`,
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
  name: `Form Field Label met zeer korte tekst`,
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
  name: `Form Field Label met zeer lange tekst die wrapped`,
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
  name: `Form Field Label op een klein scherm`,
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
  name: `Form Field Label op een breed scherm`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// Voorbeeld uitwerking
// <FormFieldLabel for="email">Email</FormFieldLabel>
// <p id="other-text">Voer je e-mailadres in.</p>
// <input
//   id="email"
//   aria-labelledby="other-text"
// />

export const FormFieldLabelInvalidAriaLabelledBy: Story = {
  name: "Form Field Label overschreven door aria-labelledby",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Fout: Een invoerveld waarvan het WAI-ARIA \`aria-labelledby\` attribuut verwijst naar een ander element dan het gekoppelde HTML \`label\` element in de \`FormFieldLabel\` component. Hierdoor wordt de toegankelijke naam bepaald door het verkeerde element en wordt de \`FormFieldLabel\` component genegeerd. Gebruik het WAI-ARIA \`aria-labelledby\` attribuut voor aanvullende informatie.`,
      },
    },
  },
};

export const FormFieldLabelLineHeight: Story = {
  name: "Form Field Label met afwijkende line-height voor Suffix",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Test dat een Form Field Label correct wordt weergegeven wanneer de Form Field Label Suffix een afwijkende line-height heeft. Controleer dat de tekst visueel goed uitgelijnd blijft en dat de spacing tussen label en suffix niet ongewenst verandert.`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Form Field Label met type="option" en disabled`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// Voorbeeld uitwerking
// <FormFieldLabel id="email-label" for="email">Email</FormFieldLabel>
// <input
//   id="email"
//   aria-labelledby="email-label"
// />

export const FormFieldLabelRedundantAriaLabelledBy: Story = {
  name: 'Form Field Label met redundant aria-labelledby',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een invoerveld waarvan WAI-ARIA `aria-labelledby` attribuut verwijst naar het gekoppelde `FormFieldLabel`. Hoewel dit functioneel werkt, is het attribuut overbodig omdat de HTML `label` element al middels de HTML `for` attribuut de toegankelijke naam bepaalt.`,
      },
    },
  },
};

export const xxxx: Story = {
  name: `Patroon: Text Input met toegankelijke naam via Form Field Label`,
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
  name: `Patroon: Text Input zonder placeholder maar met Form Field Label`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};
