import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/form-field-label-css/src/form-field-label.scss';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel as FormFieldLabelComponent } from '../../components-react/form-field-label-react/src/form-field-label';
import componentMarkdown from '../../docs/form-field-label-docs/docs/component.md?raw';
import tokens from '../../tokens/form-field-label-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: FormFieldLabelComponent,
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
} satisfies Meta<typeof FormFieldLabelComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// <FormFieldLabel for="email">Email</FormFieldLabel>
export const FormFieldLabel: Story = {
  name: 'Form Field Label',
  args: {},
  parameters: {
    docs: {
      description: {
        story: '...',
      },
    },
  },
};

// <FormFieldLabel for="email">Email</FormFieldLabel>
// <input
//   id="email"
//   name="email"
//   type="email"
//   required
// />
export const FormFieldLabelHtmlFor: Story = {
  name: 'Form Field Label gekoppeld via HTML-attribuut for',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Label is gekoppeld aan het bijbehorende invoerveld met een for-attribuut dat verwijst naar het id van het invoerveld. Een screenreader leest het label voor zodra het invoerveld focus krijgt, en een bezoeker kan op het label klikken om het veld te focussen of te activeren.`,
      },
    },
  },
};

export const FormFieldLabelNestedInput: Story = {
  name: 'TODO:OPTION_ON_HOLD Form Field Label met genest invoerveld',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier is het invoerveld genest in het label. Doordat het invoerveld binnen het label staat, krijgt het invoerveld de labeltekst als toegankelijke naam. Een screenreader leest het label voor zodra het invoerveld focus krijgt, en een bezoeker kan op het label klikken om het veld te focussen of te activeren.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelPhrasingContent: Story = {
  name: 'Form Field Label met phrasing content',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Het label bevat een span-element met tekst. De tekst krijgt dezelfde kleur en typografie en de koppeling met het invoerveld blijft werken.`,
      },
    },
  },
};

export const FormFieldLabelTypeOptionRadioButton: Story = {
  name: 'TODO:OPTION_ON_HOLD Form Field Label met type="option" en Radio Button',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in de option-variant naast een radiobutton. Zowel het label als de radiobutton zijn klikbaar, en de tekst staat naast de radiobutton. Form Field Label als tekst naast een Radio Button. Zowel de tekst als de Radio Button zijn klikbaar`,
      },
    },
  },
};

export const FormFieldLabelTypeOptionCheckbox: Story = {
  name: 'TODO:OPTION_ON_HOLD Form Field Label met type="option" en Checkbox',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in de option-variant naast een checkbox. Zowel het label als de checkbox zijn klikbaar, en de tekst staat op één regel naast de checkbox.`,
      },
    },
  },
};

export const FormFieldLabelTypeOptionSwitch: Story = {
  name: 'TODO:OPTION_ON_HOLD Form Field Label met type="option" en Switch',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in de option-variant naast een switch. Een switch is, net als een radiobutton en een checkbox, een klein bedieningselement waar het label naast past.`,
      },
    },
  },
};

// <h1>
//   <FormFieldLabel type="inherit" for="email">Email</FormFieldLabel>
// </h1>
// <input
//   id="email"
//   name="email"
//   type="email"
//   required
//   aria-describedby="email-required"
// />
export const FormFieldLabelTypeInherit: Story = {
  name: 'Form Field Label met type="inherit" binnen een heading',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Het label staat hier in een kop, bijvoorbeeld bovenaan een stap in een meerstappenformulier. Een screenreader kondigt de tekst als kop en als label voor het invoerveld aan. Visueel neemt het label de opmaak van de kop over.`,
      },
    },
  },
};

export const FormFieldLabelTypeOptionHtmlFor: Story = {
  name: 'TODO:OPTION_ON_HOLD Form Field Label met type="option" en HTML-attribuut for',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in de option-variant, waarbij het invoerveld genest is in het label en gekoppeld is met de HTML-attributen \`for\` en \`id\`.`,
        // Form Field Label met type="option" en HTML for: dit is mogelijk, maar het is redundant om de for hier te zetten.',
      },
    },
  },
};

// Voorbeeldcode: een label met de disabled class, met een checkbox radio of switch die disabled is
export const FormFieldLabelDisabled: Story = {
  name: 'Form Field Label visueel disabled',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met disabled-opmaak: de tekst krijgt de kleur van een disabled label. Gebruik deze versie bij een disabled invoerveld.`,
      },
    },
  },
};

// <FormFieldLabel for="email">Email</FormFieldLabel>
// <FormFieldLabelSuffix id="email-required">Dit veld is verplicht.</FormFieldLabelSuffix>
// <input
//   id="email"
//   name="email"
//   type="email"
//   required
//   aria-describedby="email-required"
// />
export const FormFieldLabelSuffixOptional: Story = {
  name: 'Patroon: Form Field Label met optioneel aanduiding in Form Field Label Suffix',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met een suffix. De suffix is met het aria-describedby-attribuut gekoppeld aan het invoerveld. Hierdoor past de suffix de toegankelijke naam van het invoerveld niet aan en blijft de toegankelijke naam kort en duidelijk voor screenreadergebruikers.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelSuffixRequired: Story = {
  name: 'Patroon: Form Field Label met verplichte aanduiding in Form Field Label Suffix',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met een 'verplicht' suffix. De suffix is met het aria-describedby-attribuut gekoppeld aan het invoerveld. Hierdoor past de suffix de toegankelijke naam van het invoerveld niet aan en blijft de toegankelijke naam kort en duidelijk voor screenreadergebruikers.`,
      },
    },
  },
};

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
  name: 'Patroon: Form Field Label met Form Field Label Suffix en Form Field Description',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met zowel een suffix als een extra beschrijving. Beiden zijn met het aria-describedby-attribuut aan het invoerveld gekoppeld en leveren zo aanvullende informatie, zonder de toegankelijke naam van het invoerveld te veranderen.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelSuffixDifferentLineHeight: Story = {
  name: 'Patroon: Form Field Label met afwijkende line-height ten opzichte van Form Field Label Suffix',
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
  name: 'Form Field Label met HTML-attribuut hidden',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een verborgen label. Het label verdwijnt niet alleen visueel, maar ook voor screenreader-gebruikers. Let op: Hierdoor heeft het invoerveld ook geen toegankelijke naam meer. `,
      },
    },
  },
};

// TODO:
export const FormFieldLabelLang: Story = {
  name: 'Form Field Label met HTML-attribuut lang',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in een andere taal. Een screenreader spreekt de tekst hierdoor uit met de uitspraak die bij die taal hoort.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelDir: Story = {
  name: 'Form Field Label met HTML-attribuut dir',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in een andere schrijfrichting. Zo geef je de tekstrichting van de tekst in het label aan, bijvoorbeeld rechts-naar-links voor Arabisch.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelAlternativeHTMLDiv: Story = {
  name: 'Form Field Label (default) opgebouwd met div',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label gemaakt met het HTML-element div, in plaats van het HTML-element label. Om het label te koppelen aan het invoerveld gebruik je het aria-labelledby attribuut.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelAlternativeHTMLSpan: Story = {
  name: 'Form Field Label (default) opgebouwd met span',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Het label is gemaakt met het HTML-element span, in plaats van het HTML-element label. Om het label te koppelen aan het invoerveld gebruik je het aria-labelledby attribuut.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelAlternativeHTMLOptionDiv: Story = {
  name: 'TODO:OPTION_ON_HOLD Form Field Label (option) opgebouwd met div',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label van de option-variant die is gemaakt met het HTML-element div, in plaats van het HTML-element label. Om het label te koppelen aan het invoerveld gebruik je het aria-labelledby attribuut.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelAlternativeHTMLOptionSpan: Story = {
  name: 'TODO:OPTION_ON_HOLD Form Field Label (option) opgebouwd met span',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label van de option-variant die is gemaakt met het HTML-element span, in plaats van het HTML-element label. Om het label te koppelen aan het invoerveld gebruik je het aria-labelledby attribuut.`,
      },
    },
  },
};

// Het label krijgt de styling via een so genoemde element selector in plaats van een eigen class attribute.
// TODO:
export const FormFieldLabelNlHtmlAll: Story = {
  name: 'Form Field Label binnen nl-html--all',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelNlHtmlFormFieldLabel: Story = {
  name: 'Form Field Label binnen nl-html--form-field-label',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelTypeInheritDisabled: Story = {
  name: 'Form Field Label met type="inherit" gecombineerd met disabled',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label van de variant inherit, met disabled-opmaak. Deze variant neemt de disabled-opmaak over van een omliggend element, zodat je die niet los op het label hoeft te zetten. Dit kun je doen met bijvoorbeeld has(.nl-form-field-label--disabled).`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelTypeInheritInput: Story = {
  name: 'TODO:OPTION_ON_HOLD Form Field Label met type="inherit" gecombineerd met input: dit ondersteunen we niet uit onszelf, maar de story laat zien welke CSS je kan toepassen om het zelf te ondersteunen, ie h1:has(.nl-form-field-label--option)',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label van de inherit-variant, gecombineerd met een invoerveld. Dit kun je bijvoorbeeld doen met has(.nl-form-field-label--option).`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelIncreasedTextSpacing: Story = {
  name: 'Form Field Label met vergrote tekstafstand',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met vergrote tekstafstand (letter-, woord- en regelafstand), volgens [WCAG Succescriterium 1.4.12 Tekstafstand](https://nldesignsystem.nl/wcag/1.4.12/). De tekst blijft goed leesbaar en wordt niet afgekapt of overlapt.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelText200Percent: Story = {
  name: 'Form Field Label met tekst vergroot naar 200%',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label waarvan de tekst 200% is vergroot, volgens [WCAG Succescriterium 1.4.4 Herschalen van tekst](https://nldesignsystem.nl/wcag/1.4.4/). De tekst blijft goed leesbaar en wordt niet afgekapt of overlapt.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelForcedColors: Story = {
  name: 'Form Field Label in Forced Colors modus',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label in Forced Colors modus (zoals in Windows Contrast Thema's). Het label blijft goed leesbaar en onderscheidbaar wanneer kleuren door het besturingssysteem worden overschreven.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelShortText: Story = {
  name: 'Form Field Label met zeer korte tekst',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met een hele korte tekst. De opmaak en ruimte eromheen blijven ook bij minimale inhoud goed werken.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelTextWrap: Story = {
  name: 'Form Field Label met zeer lange tekst die wrapped',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label met een hele lange inhoud, die over meerdere regels wordt weergegeven. De opmaak en uitlijning blijven ook dan goed werken, zodat de tekst op een klein scherm of bij inzoomen niet buiten het zichtbare venster valt.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelSmallScreen: Story = {
  name: 'Form Field Label op een klein scherm',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een voorbeeldweergave van een label op een klein scherm. Het label blijft goed leesbaar en de tekst valt niet buiten het zichtbare venster.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelWideScreen: Story = {
  name: 'Form Field Label op een breed scherm',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een voorbeeldweergave van een label op een breed scherm. De opmaak blijft gelijk met de weergave op kleinere schermen.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelTypeOptionDisabled: Story = {
  name: 'Form Field Label met type="option" en disabled',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label van de option-variant, met disabled-opmaak: de tekst krijgt de kleur van een disabled label. Gebruik deze variant bij disabled Radio Buttons, Checkboxes en Switches.`,
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

// TODO:
export const FormFieldLabelRedundantAriaLabelledBy: Story = {
  name: 'Form Field Label met redundant aria-labelledby',
  args: {},
  parameters: {
    docs: {
      description: {
        // story: `Er wordt hier onnodig een aria-labelledby-attribuut op het invoerveld toegevoegd, terwijl het label al goed gekoppeld is aan het invoerveld. Dat moet niet: hierdoor ontstaat het risico dat de toegankelijke naam en de zichtbare labeltekst uit elkaar gaan lopen zodra één van beide wordt aangepast, wat verwarrend is voor screenreadergebruikers en bezoekers die gebruik maken van spraakgestuurde navigatie.`,
        story: `Een invoerveld waarvan WAI-ARIA \`aria-labelledby\` attribuut verwijst naar het gekoppelde \`FormFieldLabel\`. Hoewel dit functioneel werkt, is het attribuut overbodig omdat de HTML \`label\` element al middels de HTML \`for\` attribuut de toegankelijke naam bepaalt.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelTextInput: Story = {
  name: 'Patroon: Text Input met toegankelijke naam via Form Field Label',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Text Input krijgt een toegankelijke naam van een goed gekoppeld label. Screenreadergebruikers horen de toegankelijke naam als ze het invoerveld activeren met het toetsenbord of de muis. `,
      },
    },
  },
};

// TODO:
export const FormFieldLabelTextInputNoPlaceholder: Story = {
  name: 'Patroon: Text Input zonder placeholder maar met Form Field Label',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Text Input met een label. De Text Input heeft geen placeholder, omdat een placeholder vaak slecht leesbaar is en geen informatie mag bevatten die niet ook al in het label of in een extra beschrijving staat.`,
      },
    },
  },
};
