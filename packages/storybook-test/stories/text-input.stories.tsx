import { merge } from 'lodash-es';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import '../../components-css/form-field-error-message-css/src/form-field-error-message.scss';
import '../../components-css/text-input-css/src/text-input.scss';
import '../../components-css/text-input-css/src/html/text-input.scss';
import { FormFieldErrorMessage } from '../../components-react/form-field-error-message-react/src/form-field-error-message';
import packageJSON from '../../components-react/text-input-react/package.json';
import { TextInput } from '../../components-react/text-input-react/src/text-input';
import acceptanceCriteria from '../../docs/text-input-docs/docs/acceptance-criteria.md?raw';
import componentMarkdown from '../../docs/text-input-docs/docs/component.md?raw';
import reactMeta from '../../docs/text-input-docs/stories/text-input.react.meta';
import tokens from '../../tokens/text-input-tokens/tokens.json';
import { FormFieldDescription } from '../../components-react/form-field-description-react/src/form-field-description';

/**
 * Simulates a user stylesheet for WCAG 1.4.12 Text Spacing, like the bookmarklets used to test it.
 * A user stylesheet sets the text spacing on every element, because `input` elements don't inherit
 * `letter-spacing` and `word-spacing` from their parent.
 */
const TextSpacingDecorator: Decorator = (Story) => (
  <div className="example-text-spacing">
    <style>
      {`.example-text-spacing * {
  letter-spacing: 0.12em !important;
  line-height: 1.5 !important;
  word-spacing: 0.16em !important;
}`}
    </style>
    <Story />
  </div>
);

const meta = {
  ...merge({
    ...reactMeta,
    decorators: [ExampleBodyTextDecorator],
    globals: {
      dir: 'ltr',
      lang: 'nl',
    },
    parameters: {
      // TODO: When component is implemented, enable Chromatic
      chromatic: { disableSnapshot: true },
      acceptanceCriteria,
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
          url: 'https://nldesignsystem.nl/text-input',
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
      },
      tokens,
    },
  }),
  title: 'Componenten/Text Input',
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInputDefault: Story = {
  name: 'Text Input',
  render: () => (
    <>
      <div>
        <label htmlFor="64099010-9164-448b-a733-fcdfe551f2f2">Naam</label>
      </div>
      <div>
        <TextInput id="64099010-9164-448b-a733-fcdfe551f2f2" autoComplete="name" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met een label. Het label is gekoppeld via het `for` HTML-attribuut, zodat de Text Input een toegankelijke naam heeft. Je kunt de Text Input bereiken en bedienen met het toetsenbord.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputWithValue: Story = {
  name: 'Text Input met een waarde',
  render: () => (
    <>
      <div>
        <label htmlFor="c8c80ca4-3c91-408f-8e10-dd0dc273152d">Naam</label>
      </div>
      <div>
        <TextInput id="c8c80ca4-3c91-408f-8e10-dd0dc273152d" autoComplete="name" defaultValue="Jan Jansen" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Een Text Input met een ingevulde waarde. Hulpsoftware leest de rol, de naam en de waarde voor.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputWithPlaceholder: Story = {
  name: 'Text Input met een placeholder',
  render: () => (
    <>
      <div>
        <label htmlFor="25afdd81-db76-4987-ad47-4473b9dc3483">Postcode</label>
      </div>
      <div>
        <TextInput
          id="25afdd81-db76-4987-ad47-4473b9dc3483"
          autoComplete="postal-code"
          placeholder="1234 AB"
          size="xs"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met een voorbeeld van de waarde als placeholder. De placeholder heeft voldoende contrast met de achtergrond.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputAutocomplete: Story = {
  name: 'Text Input met autocomplete',
  render: () => (
    <>
      <div>
        <label htmlFor="23c0a7b9-756a-4f9a-84df-45fa1c0fe45c">E-mailadres</label>
      </div>
      <div>
        <TextInput id="23c0a7b9-756a-4f9a-84df-45fa1c0fe45c" autoComplete="email" type="email" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met het `autocomplete` HTML-attribuut. De browser kan het veld automatisch invullen, en hulpsoftware kan het doel van het veld herkennen.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputTypeEmail: Story = {
  name: 'Text Input met type email',
  render: () => (
    <>
      <div>
        <label htmlFor="31a99b09-3a48-4867-bc3d-f5376f01ebf3">E-mailadres</label>
      </div>
      <div>
        <TextInput
          id="31a99b09-3a48-4867-bc3d-f5376f01ebf3"
          autoComplete="email"
          defaultValue="jan.jansen@example.com"
          type="email"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input voor een e-mailadres. Elk teken wordt los getoond, zonder ligaturen, zodat je het e-mailadres teken voor teken kunt controleren.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputTypeUrl: Story = {
  name: 'Text Input met type url',
  render: () => (
    <>
      <div>
        <label htmlFor="d32c9ae9-9723-4d2c-a64a-806ea8fe3b1c">Website</label>
      </div>
      <div>
        <TextInput
          id="d32c9ae9-9723-4d2c-a64a-806ea8fe3b1c"
          autoComplete="url"
          defaultValue="https://example.com/fietsen"
          type="url"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input voor een webadres. Elk teken wordt los getoond, zonder ligaturen, zodat je het webadres teken voor teken kunt controleren.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputTypeTel: Story = {
  name: 'Text Input met type tel',
  render: () => (
    <>
      <div>
        <label htmlFor="97bea9ee-9bb7-461b-a25f-8f6eea9ed8de">Telefoonnummer</label>
      </div>
      <div>
        <TextInput id="97bea9ee-9bb7-461b-a25f-8f6eea9ed8de" autoComplete="tel" defaultValue="0612345678" type="tel" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input voor een telefoonnummer. Alle cijfers zijn even hoog en even breed, zodat je het nummer makkelijk kunt controleren.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputInputModeNumeric: Story = {
  name: 'Text Input met inputmode numeric',
  render: () => (
    <>
      <div>
        <label htmlFor="16809ae1-9f36-4cd9-bd0b-21411193a838">Huisnummer</label>
      </div>
      <div>
        <TextInput id="16809ae1-9f36-4cd9-bd0b-21411193a838" defaultValue="1011" inputMode="numeric" size="xs" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input voor een getal met `inputmode="numeric"`. Op een mobiel apparaat verschijnt een numeriek toetsenbord, en alle cijfers zijn even hoog en even breed.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputTypeSearch: Story = {
  name: 'Text Input met type search',
  render: () => (
    <>
      <div>
        <label htmlFor="e03d4729-c52c-44ea-88cf-96fb723d252e">Zoeken</label>
      </div>
      <div>
        <TextInput id="e03d4729-c52c-44ea-88cf-96fb723d252e" type="search" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Een Text Input voor een zoekterm.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputTypePassword: Story = {
  name: 'Text Input met type password',
  render: () => (
    <>
      <div>
        <label htmlFor="fe2314f1-b197-4f75-b4d9-05f701995919">Wachtwoord</label>
      </div>
      <div>
        <TextInput
          id="fe2314f1-b197-4f75-b4d9-05f701995919"
          autoComplete="current-password"
          defaultValue="geheim"
          type="password"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Een Text Input voor een wachtwoord. De ingevulde tekens worden niet getoond.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputPasswordVisible: Story = {
  name: 'Text Input met een zichtbaar wachtwoord',
  render: () => (
    <>
      <div>
        <label htmlFor="16625ba4-5337-462a-8b3c-8ed4de926509">Wachtwoord</label>
      </div>
      <div>
        <TextInput
          id="16625ba4-5337-462a-8b3c-8ed4de926509"
          autoComplete="current-password"
          className="nl-text-input--password-visible"
          defaultValue="O0Il1fi"
          type="text"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een wachtwoord dat zichtbaar is gemaakt. Tekens worden niet als ligatuur getoond, zodat je elk teken los ziet. Als het lettertype het ondersteunt, heeft de nul een streep, zodat je de letter `O` en het cijfer `0` uit elkaar kunt houden. Het lettertype van dit thema (Noto Sans) ondersteunt dat niet.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputHover: Story = {
  name: 'Text Input met hover styling',
  render: () => (
    <>
      <div>
        <label htmlFor="d753f2dd-6e0c-4a3f-9470-cb102dd7c2bb">Naam</label>
      </div>
      <div>
        <TextInput id="d753f2dd-6e0c-4a3f-9470-cb102dd7c2bb" autoComplete="name" className="nl-text-input--hover" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Een Text Input zoals die eruitziet als je er met de muis overheen gaat: de rand is dikker.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputFocusVisible: Story = {
  name: 'Text Input met focus-visible styling',
  render: () => (
    <>
      <div>
        <label htmlFor="0bd667ec-ce55-45f3-a547-648a3d36bad6">Naam</label>
      </div>
      <div>
        <TextInput
          id="0bd667ec-ce55-45f3-a547-648a3d36bad6"
          autoComplete="name"
          className="nl-text-input--focus-visible"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input zoals die eruitziet als die de toetsenbordfocus heeft: er staat een gestreepte focusring om het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputInvalid: Story = {
  name: 'Text Input invalid',
  render: () => (
    <>
      <div>
        <label htmlFor="909618e5-1f05-4ef6-b82c-1ce0459fff56">E-mailadres</label>
      </div>
      <FormFieldErrorMessage contentId="909618e5-1f05-4ef6-b82c-1ce0459fff56-error">
        Vul een e-mailadres in zoals naam@example.com.
      </FormFieldErrorMessage>
      <div>
        <TextInput
          id="909618e5-1f05-4ef6-b82c-1ce0459fff56"
          aria-describedby="909618e5-1f05-4ef6-b82c-1ce0459fff56-error"
          autoComplete="email"
          defaultValue="jan.jansen"
          invalid
          type="email"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met een ongeldige waarde. De Text Input heeft `aria-invalid="true"`, en de foutmelding is gekoppeld via `aria-describedby`. De invalid state is niet alleen aan de kleur te zien, de rand is ook dikker.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputDisabled: Story = {
  name: 'Text Input disabled',
  render: () => (
    <>
      <div>
        <label htmlFor="46cbeb03-aa53-4afc-a65e-c1a9693a9784">Naam</label>
      </div>
      <div>
        <TextInput id="46cbeb03-aa53-4afc-a65e-c1a9693a9784" autoComplete="name" defaultValue="Jan Jansen" disabled />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input die je niet kunt gebruiken. De Text Input is niet bereikbaar met het toetsenbord, en heeft bij hover geen andere styling.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputReadOnly: Story = {
  name: 'Text Input read-only',
  render: () => (
    <>
      <div>
        <label htmlFor="76b992e3-dee1-468d-ab31-e81b616bc01b">Naam</label>
      </div>
      <div>
        <TextInput id="76b992e3-dee1-468d-ab31-e81b616bc01b" autoComplete="name" defaultValue="Jan Jansen" readOnly />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input waarvan je de waarde kunt lezen en kopiëren, maar niet aanpassen. De Text Input is wel bereikbaar met het toetsenbord. Bij focus krijgt de Text Input een focusring, maar niet de dikkere rand van een invoerveld waarin je kunt typen.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputRequired: Story = {
  name: 'Text Input required',
  render: () => (
    <>
      <div>
        <label htmlFor="8c6012e8-fbc5-415f-b89d-13270d1490ab">Naam (verplicht)</label>
      </div>
      <div>
        <TextInput id="8c6012e8-fbc5-415f-b89d-13270d1490ab" autoComplete="name" required />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input die ingevuld moet worden. Hulpsoftware meldt dat het veld verplicht is. Het label maakt dit ook zichtbaar duidelijk, want `required` heeft geen eigen styling.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputLangAR: Story = {
  name: 'Text Input in het Arabisch',
  globals: {
    dir: 'rtl',
    lang: 'ar',
  },
  render: () => (
    <>
      <div>
        <label htmlFor="29ff8052-2b42-4918-a5e6-a8db61a2395c">الاسم</label>
      </div>
      <div>
        <TextInput id="29ff8052-2b42-4918-a5e6-a8db61a2395c" autoComplete="name" defaultValue="علي" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Een Text Input op een Arabische pagina. De tekst begint aan de rechterkant.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputDirAuto: Story = {
  name: 'Text Input met een Arabische waarde op een Nederlandse pagina',
  render: () => (
    <>
      <div>
        <label htmlFor="e231f129-d9e8-4c93-96a8-92974e2ce68f">Naam</label>
      </div>
      <div>
        <TextInput id="e231f129-d9e8-4c93-96a8-92974e2ce68f" autoComplete="name" defaultValue="علي" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met een Arabische waarde op een Nederlandse pagina. Door `dir="auto"` wordt de leesrichting van de waarde automatisch bepaald, zodat de tekst aan de rechterkant begint.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputVerticalText: Story = {
  name: 'Text Input in het Japans',
  globals: {
    dir: 'ltr',
    lang: 'ja',
    writingMode: 'vertical-rl',
  },
  render: () => {
    const INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D10987654';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <div>
          <label htmlFor={INPUT_ID}>郵便番号</label>
        </div>
        <FormFieldDescription id={DESCRIPTION_ID} lang="ja">
          郵便番号は、4桁の数字、スペース、2文字のアルファベットで構成されています。例：1234 AB。
        </FormFieldDescription>
        <div>
          <TextInput id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De hele pagina staat in verticale tekstrichting, aangezet via de CSS-eigenschap `writingMode`. Het label, de ondersteunende tekst en het invoerveld passen zich allemaal aan de verticale richting aan. De taal is aangegeven met het HTML-attribuut `lang`.',
      },
    },
    status: { type: [] },
    testResult: {},
  },
};

export const TextInputPlaceholderTextZoom: Story = {
  name: 'Text Input met een placeholder en 200% tekstgrootte',
  globals: { fontSize: '32px' },
  render: () => (
    <>
      <div>
        <label htmlFor="97b9d996-51f2-4de9-9e49-844bb662e50e">Postcode</label>
      </div>
      <div>
        <TextInput
          id="97b9d996-51f2-4de9-9e49-844bb662e50e"
          autoComplete="postal-code"
          placeholder="1234 AB"
          size="xs"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De standaard tekstgrootte van de pagina is vergroot van 16px naar 32px, zoals bij een gebruikersvoorkeur voor grotere tekst ([WCAG-criterium 1.4.4 Herschalen van tekst](https://nldesignsystem.nl/wcag/1.4.4/)). De placeholder blijft in zijn geheel zichtbaar. Deze story is alleen los te bekijken, niet op de documentatiepagina, omdat de tekstgrootte op paginaniveau wordt ingesteld.',
      },
      story: { inline: false },
    },
    status: { type: [] },
  },
};

export const TextInputPlaceholderTextSpacing: Story = {
  name: 'Text Input met een placeholder en vergrootte tekstafstand',
  decorators: [TextSpacingDecorator],
  render: () => (
    <>
      <div>
        <label htmlFor="d276482d-7afa-475a-a40c-f2b22d5d6b11">Postcode</label>
      </div>
      <div>
        <TextInput
          id="d276482d-7afa-475a-a40c-f2b22d5d6b11"
          autoComplete="postal-code"
          placeholder="1234 AB"
          size="sm"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een Text Input met een placeholder en vergrootte tekstafstand. De placeholder blijft leesbaar.

De tekstafstand is vergroot volgens [WCAG Succescriterium 1.4.12 Tekstafstand](https://nldesignsystem.nl/wcag/1.4.12/):

- Regelafstand: minimaal 150% van de lettergrootte
- Letterafstand: minimaal 12% van de lettergrootte
- Woordafstand: minimaal 16% van de lettergrootte`,
      },
    },
    status: { type: [] },
  },
};

export const TextInputPageZoom: Story = {
  name: 'Text Input met 200% pagina-zoom',
  globals: { zoom: 2 },
  render: () => (
    <>
      <div>
        <label htmlFor="593ffb9e-32c8-43b8-8af8-4a3246f413d0">Naam</label>
      </div>
      <div>
        <TextInput id="593ffb9e-32c8-43b8-8af8-4a3246f413d0" autoComplete="name" defaultValue="Jan Jansen" size="xl" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De pagina is gezoomd naar 200% via de browser (paginazoom), waardoor zowel de tekst als de Text Input twee keer zo groot worden. De Text Input wordt niet breder dan de beschikbare ruimte.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputSmallViewport: Story = {
  name: 'Text Input in een kleine viewport',
  globals: { viewport: { value: 'wcag400' } },
  render: () => (
    <>
      <div>
        <label htmlFor="d21cfd69-8772-41a6-9150-301f5ca07a92">Naam</label>
      </div>
      <div>
        <TextInput id="d21cfd69-8772-41a6-9150-301f5ca07a92" autoComplete="name" defaultValue="Jan Jansen" size="xl" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met breedte `xl` in een kleine viewport, vergelijkbaar met 400% zoom. De Text Input wordt niet breder dan de viewport, zodat je niet horizontaal hoeft te scrollen.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputForcedColorsMode: Story = {
  name: 'Text Input in Forced Colors mode',
  globals: { forcedColors: 'active' },
  render: () => (
    <>
      <div>
        <label htmlFor="2db884ee-9882-4482-b388-0c532789cf10">Naam</label>
      </div>
      <div>
        <TextInput id="2db884ee-9882-4482-b388-0c532789cf10" autoComplete="name" defaultValue="Jan Jansen" />
      </div>
      <div>
        <label htmlFor="5740e3a5-0033-44d3-9c57-7ccc0a7970f5">Naam</label>
      </div>
      <div>
        <TextInput id="5740e3a5-0033-44d3-9c57-7ccc0a7970f5" autoComplete="name" defaultValue="Jan Jansen" disabled />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input en een disabled Text Input in de modus voor hoge contrastkleurinstellingen. De disabled Text Input gebruikt de systeemkleur `GrayText`. Dit is een gesimuleerde weergave binnen Storybook (via de toolbar-knop "Forced Colors"), controleer voor definitieve verificatie ook de echte Forced Colors mode via de browser DevTools of het besturingssysteem.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputHTMLClasses: Story = {
  name: 'Text Input zonder class names met nl-html--text-input',
  render: () => (
    <div className="nl-html--text-input">
      <div>
        <label htmlFor="9dd9ed6d-a8e4-4ea0-a483-9057a9de1b96">Naam</label>
      </div>
      <div>
        <input id="9dd9ed6d-a8e4-4ea0-a483-9057a9de1b96" autoComplete="name" type="text" />
      </div>
      <div>
        <label htmlFor="a958a9f0-ef19-4424-a965-248a4d46b3a4">E-mailadres</label>
      </div>
      <div>
        <input id="a958a9f0-ef19-4424-a965-248a4d46b3a4" aria-invalid="true" autoComplete="email" type="email" />
      </div>
      <div>
        <label htmlFor="1246d405-a7ea-4d18-8385-90ee213cf55f">Telefoonnummer</label>
      </div>
      <div>
        <input id="1246d405-a7ea-4d18-8385-90ee213cf55f" autoComplete="tel" disabled type="tel" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Invoervelden zonder eigen class names krijgen de styling van de Text Input. De states, zoals invalid en disabled, en de types worden automatisch herkend.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputWithoutType: Story = {
  name: 'Text Input zonder type HTML-attribuut (niet aangeraden)',
  render: () => (
    <>
      <div>
        <label htmlFor="001f1787-b753-4518-a871-24e2b92fac49">Naam</label>
      </div>
      <div>
        <input id="001f1787-b753-4518-a871-24e2b92fac49" autoComplete="name" className="nl-text-input" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een `input` zonder `type` HTML-attribuut is een tekstveld. Dit wordt ondersteund, maar zet bij voorkeur `type="text"`.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputTypeNumber: Story = {
  name: 'Text Input met type number (niet aangeraden)',
  render: () => (
    <>
      <div>
        <label htmlFor="711a3fbf-8e58-4ad3-a92c-7a32885e9e0c">Aantal</label>
      </div>
      <div>
        <TextInput id="711a3fbf-8e58-4ad3-a92c-7a32885e9e0c" defaultValue="3" size="xs" type="number" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met `type="number"`. Dit wordt ondersteund, maar raden we niet aan: de waarde verandert onbedoeld bij scrollen, en de knoppen om de waarde te verhogen zijn klein. Gebruik `inputmode="numeric"` in plaats daarvan.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputTypeDate: Story = {
  name: 'Text Input met type date (niet aangeraden)',
  render: () => (
    <>
      <div>
        <label htmlFor="5b8c8fd1-2b94-4753-a15c-18c9aa35588b">Geboortedatum</label>
      </div>
      <div>
        <TextInput id="5b8c8fd1-2b94-4753-a15c-18c9aa35588b" autoComplete="bday" type="date" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Een Text Input met `type="date"`. Dit wordt ondersteund, maar raden we niet aan: de datumkiezer verschilt per browser en is niet altijd goed te gebruiken met hulpsoftware. Hetzelfde geldt voor `month`, `week`, `time` en `datetime-local`.',
      },
    },
    status: { type: [] },
  },
};
