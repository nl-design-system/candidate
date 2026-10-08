import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/form-field-label-docs/docs/component.md?raw';
import '../../components-css/form-field-label-css/src/form-field-label.scss';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel as FormFieldLabelComponent } from '../../components-react/form-field-label-react/src/form-field-label';

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
} satisfies Meta<typeof FormFieldLabelComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// <FormFieldLabel>Email</FormFieldLabel>
// <input
//   id="email"
//   name="email"
//   type="email"
//   required
// />
export const FormFieldLabelNotLinked: Story = {
  name: 'Fout: Form Field Label zonder koppeling aan een invoerveld',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const FormFieldLabelTabIndex: Story = {
  name: 'Fout: Form Field Label met HTML-attribuut tabindex',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Bezoekers die met het toetsenbord navigeren komen onbedoeld in de focusvolgorde van de label terecht, terwijl de label niet interactief is. Dat voelt onlogisch en verwart de navigatie. Bij een klik op de label hoort de focus naar het gekoppelde formulierveld te gaan.

Het probleem ontstaat omdat een niet-interactief element via het HTML-attribuut \`tabindex\` focusbaar is gemaakt. Verwijder het HTML-attribuut \`tabindex\`, zodat de label niet extra in de keyboardnavigatie verschijnt en de focusvolgorde logisch blijft.`,
      },
    },
  },
};

export const FormFieldLabelInteractiveContent: Story = {
  name: 'Fout: Form Field Label met interactieve content',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een label bevat een link. Dat moet niet: een klik op het label activeert namelijk ook het gekoppelde veld, waardoor de link niet meer apart te bedienen is.`,
        // suggestie:     story: 'Fout: Het label krijgt focus tijdens het navigeren met de Tab-toets doordat er handmatig een tab-volgorde (`tabindex`) is ingesteld. Een label is informatief, niet interactief, en hoort niet focusbaar te zijn. Alleen het gekoppelde invoerveld moet focus krijgen.',
      },
    },
  },
};

export const FormFieldLabelToggletip: Story = {
  name: 'Fout: Form Field Label met Toggletip',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Het label bevat een Toggletip. Dat moet niet: een klik op het label activeert namelijk ook het gekoppelde veld, waardoor de Toggletip niet meer apart te bedienen is.`,
      },
    },
  },
};

// TODO:
export const FormFieldLabelAsDisplayBlock: Story = {
  name: 'Fout: Form Field Label als display: block waardoor een te groot klikgebied ontstaat',
  // peter: Dit vind ik gek. Een display: block is niet de (enige) reden van het formaat van het element. Wat ik denk dat je wil beschrijven is dat het klikgebied niet te groot moet zijn. De focus op display: block leid daar vanaf
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const FormFieldLabelRequiredTextInLabel: Story = {
  name: "Fout: Form Field Label met 'verplicht' tekst in de label in plaats van in Form Field Label Suffix",
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const FormFieldLabelOptionalTextInLabel: Story = {
  name: "Fout: Form Field Label met 'optioneel' tekst in de label in plaats van in Form Field Label Suffix",
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
export const FormFieldLabelAsteriskForRequiredOptional: Story = {
  name: 'Fout: Form Field Label met asterisk om verplicht of optioneel aan te duiden',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een asterisk (*) wordt gebruikt om aan te geven dat een veld optioneel is. Dit zorgt voor verwarring, omdat een asterisk algemeen bekendstaat als "verplicht". Gebruik voor een optioneel veld de Form Field Label Suffix met de tekst "optioneel".`,
        // suggestie:     story: 'Fout: Een asterisk (*) wordt gebruikt om aan te geven dat een veld optioneel is. Dit zorgt voor verwarring, omdat een asterisk algemeen bekendstaat als "verplicht". Gebruik voor een optioneel veld de Form Field Label Suffix met de tekst "optioneel".',
        // jeff: Moeten we deze Story uitbreiden/dupliceren met een variant waarin de asterisk (*) juist wordt ingezet voor 'verplicht'? Om daarbij de fout/waarschuwing te geven dat een asterisk überhaupt een slech idee is?
        // roos: Bij de eerste zin dacht ik even dat we zeggen dat een asterisk wordt gebruikt voor optionele velden, terwijl ik een asterisk juist ken als aanduiding voor verplichte velden. Uit de tweede zin wordt pas duidelijk dat het om de foutieve toepassing gaat. Kunnen we dit in de eerste zin al duidelijker maken?
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
  name: 'Fout: Form Field Label genegeerd vanwege verwijzing WAI-ARIA-attribuut aria-labelledby naar ander element',
  // name: 'Fout: Form Field Label waarbij aria-labelledby naar een HTML span linked en het HTML label overschrijft',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een invoerveld waarvan het WAI-ARIA \`aria-labelledby\` attribuut verwijst naar een ander element dan het gekoppelde HTML \`label\` element in de \`FormFieldLabel\` component. Hierdoor wordt de toegankelijke naam bepaald door het verkeerde element en wordt de \`FormFieldLabel\` component genegeerd. Gebruik het WAI-ARIA \`aria-labelledby\` attribuut voor aanvullende informatie.`,
        // story: `Hier wordt de toegankelijke naam van het invoerveld overschreven met een \`aria-labelledby\`-attribuut. Dat moet niet: het zichtbare label is dan niet meer de bron van de toegankelijke naam. Dit is verwarrend voor bezoekers die het zichtbare label wél zien én een screenreader gebruiken, omdat wat ze horen dan afwijkt van wat ze lezen.`,
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
// TODO:
export const FormFieldLabelAriaLabel: Story = {
  name: 'Form Field Label met aria-label op invoer-element dat Form Field Label overschrijft',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Fout: Een Form Field Label gekoppeld aan een invoer-element. Het invoer-element heeft ook een aria-label dat de toegankelijke naam vanuit Form Field Label overschrijft. Gebruik geen aria-label in combinatie met een Form Field Label.`,
      },
    },
  },
};

export const FormFieldLabelHTMLForAndMismatchedNestedInput: Story = {
  name: 'Fout: Form Field Label met zowel HTML-attribuut for als een niet-overeenkomende geneste input',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const FormFieldLabelNestedInputGroup: Story = {
  name: 'Fout: Form Field Label met geneste Input Group',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `...`,
      },
    },
  },
};

export const FormFieldLabelNestedTextInput: Story = {
  name: 'Fout: Form Field Label met geneste Text Input',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Text Input in het label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor Radio Buttons, Checkboxes en Switches omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en bij lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

export const FormFieldLabelNestedFileInput: Story = {
  name: 'Fout: Form Field Label met geneste File Input',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een File Input in het label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor Radio Buttons, Checkboxes en Switches omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

export const FormFieldLabelNestedNumberInput: Story = {
  name: 'Fout: Form Field Label met geneste Number Input',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Number Input in het label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor radio buttons en checkboxen omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

export const FormFieldLabelNestedPasswordInput: Story = {
  name: 'Fout: Form Field Label met geneste Password Input',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Password Input in het label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor radio buttons en checkboxen omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

export const FormFieldLabelNestedTextArea: Story = {
  name: 'Fout: Form Field Label met geneste Text Area',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Text Area in het label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor radio buttons en checkboxen omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

export const FormFieldLabelNestedDateInput: Story = {
  name: 'Fout: Form Field Label met geneste Date Input',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Date Input in het label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor radio buttons en checkboxen omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

export const FormFieldLabelNestedDateInputGroup: Story = {
  name: 'Fout: Form Field Label met geneste Date Input Group',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een label gebruikt als groepslabel voor een Date Input Group. Dat moet niet, want ieder invoerveld heeft een eigen label nodig, met een overkoepelende naam voor de Date Input Group. Dat kan bijvoorbeeld met een Fieldset.`,
      },
    },
  },
};

export const FormFieldLabelNestedDatePicker: Story = {
  name: 'Fout: Form Field Label met geneste Date Picker',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Date Picker in het label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor radio buttons en checkboxen omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

export const FormFieldLabelNestedCheckboxGroup: Story = {
  name: 'Fout: Form Field Label met geneste Checkbox Group',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een label gebruikt als groepslabel voor een Checkbox Group. Dat moet niet, want ieder invoerveld heeft een eigen label nodig, met een overkoepelende naam voor de Checkbox Group. Dat kan bijvoorbeeld met een Fieldset.`,
      },
    },
  },
};

export const FormFieldLabelNestedRadioGroup: Story = {
  name: 'Fout: Form Field Label met geneste Radio Group',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een label gebruikt als groepslabel voor een Radio Group. Dat moet niet, want ieder invoerveld heeft een eigen label nodig, met een overkoepelende naam voor de Radio Group. Dat kan bijvoorbeeld met een Fieldset.`,
      },
    },
  },
};

export const FormFieldLabelNestedCalendar: Story = {
  name: 'Fout: Form Field Label met geneste Calendar',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Calendar in een label genest, waardoor de Form Field Label en de Calendar direct naast elkaar staan. Dit slot is bedoeld voor radio buttons en checkboxen omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats de input in plaats daarvan onder het label, in een Date Picker.`,
      },
    },
  },
};

export const FormFieldLabelNestedRange: Story = {
  name: 'Fout: Form Field Label met geneste Range',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Range in een label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor radio buttons en checkboxen omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

export const FormFieldLabelNestedSelect: Story = {
  name: 'Fout: Form Field Label met geneste Select',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Select in een label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor radio buttons en checkboxen omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

export const FormFieldLabelNestedSelectCombobox: Story = {
  name: 'Fout: Form Field Label met geneste Select Combobox',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt een Select Combobox in een label genest, waardoor ze direct naast elkaar staan. Dit slot is bedoeld voor radio buttons en checkboxen omdat het daar het klikgebied van een klein bedieningselement vergroot. Op kleinere schermen, hoge zoomniveaus en lange tekstuele labels verslechtert dit de bediening. Plaats het invoerveld in plaats daarvan onder het label.`,
      },
    },
  },
};

// TODO: tekst example
export const FormFieldLabelContainsDescriptionText: Story = {
  name: 'Fout: Form Field Label met toelichting in de tekst',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Hier wordt toelichtingstekst in de label geplaatst. Dat moet niet, omdat het label kort en specifiek moet blijven. Gebruik de Form Field Description voor aanvullende uitleg.`,
      },
    },
  },
};
