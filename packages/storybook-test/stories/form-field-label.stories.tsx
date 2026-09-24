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

export const FormFieldLabelLinkedWithHtmlFor: Story = {
  name: `Form Field Label gekoppeld via HTML for`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Label is gekoppeld aan het bijbehorende invoerveld met een for-attribuut dat verwijst naar het id van het invoerveld. Een screenreader leest het label voor zodra het invoerveld focus krijgt, en een bezoeker kan op het label klikken om het veld te focussen of te activeren.`,
      },
    },
  },
};

export const FormFieldLabelWithNestedInput: Story = {
  name: `OPTION_ON_HOLD Form Field Label met genest invoerveld`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier is het invoerveld genest in het label. Doordat het invoerveld binnen het label staat, krijgt het invoerveld de labeltekst als toegankelijke naam. Een screenreader leest het label voor zodra het invoerveld focus krijgt, en een bezoeker kan op het label klikken om het veld te focussen of te activeren.,
      },
    },
  },
};

export const FormFieldLabelWithPhrasingContent: Story = {
  name: `Form Field Label met phrasing content`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Het label bevat een span-element met tekst. De tekst krijgt dezelfde kleur en typografie en de koppeling met het invoerveld blijft werken.`,
      },
    },
  },
};

export const FormFieldLabelTypeOptionRadio: Story = {
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

export const FormFieldLabelTypeOptionCheckbox: Story = {
  name: `OPTION_ON_HOLD Form Field Label met type="option" (checkbox)`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: Een label in de option-variant naast een checkbox. Zowel het label als de checkbox zijn klikbaar, en de tekst staat op één regel naast de checkbox.`,
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
        story: `Een label in de option-variant naast een switch. Een switch is, net als een radiobutton en een checkbox, een klein bedieningselement waar het label naast past.`,
      },
    },
  },
};

// Voorbeeld:
// <h1>
//   <FormFieldLabel type="inherit" for="email">Email</FormFieldLabel>
// </h1>

export const FormFieldLabelHeadingTypeInherit: Story = {
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

export const FormFieldLabelWithTypeOptionAndHtmlFor: Story = {
  name: `OPTION_ON_HOLD Form Field Label met type="option" en HTML for: dit is mogelijk, maar het is redundant om de for hier te zetten.`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in de option-variant, waarbij het invoerveld genest is in het label en gekoppeld is met de HTML-attributen `for` en `id`.`,
      },
    },
  },
};

export const FormFieldLabelDisabled: Story = {
  name: `Form Field Label met disabled state`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met disabled-opmaak: de tekst krijgt de kleur van een disabled label. Gebruik deze versie bij een disabled invoerveld.`,
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

export const FormFieldLabelWithSuffixOptionalPattern: Story = {
  name: "Form Field Label met Form Field Label Suffix",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met een suffix. De suffix is met het aria-describedby-attribuut gekoppeld aan het invoerveld. Hierdoor past de suffix de toegankelijke naam van het invoerveld niet aan en blijft de toegankelijke naam kort en duidelijk voor screenreadergebruikers.`,
      },
    },
  },
};

export const FormFieldLabelWithSuffixRequiredPattern: Story = {
  name: `Patroon: Form Field Label met verplicht veld (Form Field Label Suffix)`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met een 'verplicht' suffix. De suffix is met het aria-describedby-attribuut gekoppeld aan het invoerveld. Hierdoor past de suffix de toegankelijke naam van het invoerveld niet aan en blijft de toegankelijke naam kort en duidelijk voor screenreadergebruikers.`,
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

export const FormFieldLabelSuffixAndDescriptionPattern: Story = {
  name: "Patroon: Form Field Label met Form Field Label Suffix en Form Field Description",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met zowel een suffix als een extra beschrijving. Beiden zijn met het aria-describedby-attribuut aan het invoerveld gekoppeld en leveren zo aanvullende informatie, zonder de toegankelijke naam van het invoerveld te veranderen.`,
      },
    },
  },
};
export const FormFieldLabelWithSuffixDifferentLineHeightPattern: Story = {
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

export const FormFieldLabelHidden: Story = {
  name: `Form Field Label met HTML hidden attribuut`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een verborgen label. Het label verdwijnt niet alleen visueel, maar ook voor screenreader-gebruikers. Let op: Hierdoor heeft het invoerveld ook geen toegankelijke naam meer. `,
      },
    },
  },
};

export const FormFieldLabelLang: Story = {
  name: `Form Field Label met HTML lang attribuut`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in een andere taal. Een screenreader spreekt de tekst hierdoor uit met de uitspraak die bij die taal hoort.`,
      },
    },
  },
};

export const FormFieldLabelDir Story = {
  name: `Form Field Label met HTML dir attribuut`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in een andere schrijfrichting. Zo geef je de tekstrichting van de tekst in het label aan, bijvoorbeeld rechts-naar-links voor Arabisch.`,
      },
    },
  },
};

export const FormFieldLabelDefaultDiv: Story = {
  name: `Form Field Label (default) opgebouwd met div`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label gemaakt met het HTML-element div, in plaats van het HTML-element label. Om het label te koppelen aan het invoerveld gebruik je het aria-labelledby attribuut.`,
      },
    },
  },
};

export const FormFieldLabelDefaultSpan: Story = {
  name: `Form Field Label (default) opgebouwd met span`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Het label is gemaakt met het HTML-element span, in plaats van het HTML-element label. Om het label te koppelen aan het invoerveld gebruik je het aria-labelledby attribuut.`,
      },
    },
  },
};

export const FormFieldLabelOptionDiv: Story = {
  name: `OPTION_ON_HOLD Form Field Label (option) opgebouwd met div`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label van de option-variant die is gemaakt met het HTML-element div, in plaats van het HTML-element label. Om het label te koppelen aan het invoerveld gebruik je het aria-labelledby attribuut.`,
      },
    },
  },
};

export const FormFieldLabelOptionSpan: Story = {
  name: `OPTION_ON_HOLD Form Field Label (option) opgebouwd met span`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label van de option-variant die is gemaakt met het HTML-element span, in plaats van het HTML-element label. Om het label te koppelen aan het invoerveld gebruik je het aria-labelledby attribuut.`,
      },
    },
  },
};

export const FormFieldLabelNlHtmlAll: Story = {
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

export const FormFieldLabelNlHtmlFormFieldLabel: Story = {
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

export const FormFieldLabelTypeInheritDisabled Story = {
  name: `Form Field Label met type="inherit" gecombineerd met disabled`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label van de variant inherit, met disabled-opmaak. Deze variant neemt de disabled-opmaak over van een omliggend element, zodat je die niet los op het label hoeft te zetten. Dit kun je doen met bijvoorbeeld has(.nl-form-field-label--disabled).`,
      },
    },
  },
};

export const FormFieldLabelTypeInheritWithInput: Story = {
  name: `OPTION_ON_HOLD Form Field Label met type="inherit" gecombineerd met input: dit ondersteunen we niet uit onszelf, maar de story laat zien welke CSS je kan toepassen om het zelf te ondersteunen, ie h1:has(.nl-form-field-label--option)`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label van de inherit-variant, gecombineerd met een invoerveld. Dit kun je bijvoorbeeld doen met has(.nl-form-field-label--option).`,
      },
    },
  },
};

export const FormFieldLabelIncreasedTextSpacing: Story = {
  name: `Form Field Label met vergrote tekstafstand`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met vergrote tekstafstand (letter-, woord- en regelafstand), volgens [WCAG Succescriterium 1.4.12 Tekstafstand](https://nldesignsystem.nl/wcag/1.4.12/). De tekst blijft goed leesbaar en wordt niet afgekapt of overlapt.`,
      },
    },
  },
};

export const FormFieldLabelText200Percent: Story = {
  name: `Form Field Label met tekst vergroot naar 200%`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label waarvan de tekst 200% is vergroot, volgens [WCAG Succescriterium 1.4.4 Herschalen van tekst](https://nldesignsystem.nl/wcag/1.4.4/). De tekst blijft goed leesbaar en wordt niet afgekapt of overlapt.`,
      },
    },
  },
};

export const FormFieldLabelForcedColors: Story = {
  name: `Form Field Label in Forced Colors modus`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in Forced Colors modus (zoals in Windows Contrast Thema's). Het label blijft goed leesbaar en onderscheidbaar wanneer kleuren door het besturingssysteem worden overschreven.`,
      },
    },
  },
};

export const FormFieldLabelShortText: Story = {
  name: `Form Field Label met zeer korte tekst`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met een hele korte tekst. De opmaak en ruimte eromheen blijven ook bij minimale inhoud goed werken.`,
      },
    },
  },
};

export const FormFieldLabelTextWrap: Story = {
  name: `Form Field Label met zeer lange tekst die wrapped`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met een hele lange inhoud, die over meerdere regels wordt weergegeven. De opmaak en uitlijning blijven ook dan goed werken, zodat de tekst op een klein scherm of bij inzoomen niet buiten het zichtbare venster valt.`,
      },
    },
  },
};

export const FormFieldLabelSmallScreen: Story = {
  name: `Form Field Label op een klein scherm`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een voorbeeldweergave van een label op een klein scherm. Het label blijft goed leesbaar en de tekst valt niet buiten het zichtbare venster.`,
      },
    },
  },
};

export const FormFieldLabelWideScreen: Story = {
  name: `Form Field Label op een breed scherm`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een voorbeeldweergave van een label op een breed scherm. De opmaak blijft gelijk met de weergave op kleinere schermen.`,
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

export const FormFieldLabelTypeOptionDisabled: Story = {
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

export const FormFieldLabelWithTextInputDefaultPattern Story = {
  name: `Patroon: Text Input met toegankelijke naam via Form Field Label`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Text Input krijgt een toegankelijke naam van een goed gekoppeld label. Screenreadergebruikers horen de toegankelijke naam als ze het invoerveld activeren met het toetsenbord of de muis. `,
      },
    },
  },
};

export const FormFieldLabelWithTextInputNoPlaceholderPattern: Story = {
  name: `Patroon: Text Input zonder placeholder maar met Form Field Label`,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Text Input met een label. De Text Input heeft geen placeholder, omdat een placeholder vaak slecht leesbaar is en geen informatie mag bevatten die niet ook al in het label of in een extra beschrijving staat.`,
      },
    },
  },
};
