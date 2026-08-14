import { UnorderedList } from '../../components-react/unordered-list-react/src/unordered-list';
import '../../components-css/unordered-list-css/src/unordered-list.scss';
import type { Meta, StoryObj } from '@storybook/react-vite';
import componentMarkdown from '../../docs/form-field-description-docs/docs/component.md?raw';
import '../../components-css/form-field-description-css/src/form-field-description.scss';
import packageJSON from '../../components-react/form-field-description-react/package.json';
import { FormFieldDescription } from '../../components-react/form-field-description-react/src/form-field-description';
import { CandidateDisableCssDecorator } from '@nl-design-system-candidate/storybook-shared/src/CandidateDisableCssDecorator';

const POSTCODE_HELP_TEXT = 'Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
    disabled: { control: 'boolean', table: { category: 'API' } },
  },
  component: FormFieldDescription,
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
        url: 'https://nldesignsystem.nl/form-field-description',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Form Field Description',
} satisfies Meta<typeof FormFieldDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormFieldDescriptionAsSpan: Story = {
  name: 'Fout: Form Field Description als HTML span element',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  decorators: [CandidateDisableCssDecorator],
  render: () => {
    const POSTCODE_INPUT_ID = 'B902BC9E-0490-49A0-9193-5EEF82ECA12B';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_DESCRIPTION_ID}>Probleem</label>
        <span className="nl-form-field-description" id={POSTCODE_DESCRIPTION_ID}>
          Beschrijf het probleem zo specifiek mogelijk. Vermeld in ieder geval de foutcode (indien bekend), wanneer het
          probleem voor het eerst optrad en welke stappen je al hebt ondernomen. (Max. 500 woorden).
        </span>
        <textarea id="probleem" aria-describedby={POSTCODE_DESCRIPTION_ID} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description als HTML \`span\` element in plaats van HTML \`div\` element. De CSS \`display\` property van een \`span\` is \`inline\`, die van een \`div\` is \`block\`. Wanneer de CSS niet wordt ingeladen, zorgt dit verschil ervoor dat de component inline wordt geplaatst naast andere componenten in plaats van er tussen.

Dit overtreedt de richtlijn "[Plaats descriptions tussen label en formulierveld](https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/plaatsing/)".`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithDetailsAndSummary: Story = {
  name: 'Fout: Form Field Description met HTML details en summary element',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const TEXTAREA_ID = '9890CEB5-3288-4399-B119-E8929CB8BDE2';
    const DESCRIPTION_ID = `${TEXTAREA_ID}-description`;
    return (
      <>
        <label htmlFor={DESCRIPTION_ID}>Omschrijving</label>
        <FormFieldDescription id={DESCRIPTION_ID}>
          <details>
            <summary>Meer informatie</summary>
            <p>
              Beschrijf het probleem zo specifiek mogelijk. Vermeld in ieder geval de foutcode (indien bekend), wanneer
              het probleem voor het eerst optrad en welke stappen je al hebt ondernomen. (Max. 500 woorden).
            </p>
          </details>
        </FormFieldDescription>
        <div>
          <textarea id="omschrijving" aria-describedby={DESCRIPTION_ID} />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description met een HTML \`details\` en \`summary\` element als inhoud. Een Form Field Description in een \`details\`-\`summary\` combinatie wordt niet goed voorgelezen door screenreaders wanneer een bezoeker met het toetsenbord focust op het bijbehorende invoerveld.`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithRole: Story = {
  name: 'Fout: Form Field Description met een role attribuut',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'E201ED2B-6323-40D7-B2B1-950BDA93E49C';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_DESCRIPTION_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID} role="definition">
          {POSTCODE_HELP_TEXT}
        </FormFieldDescription>
        <div>
          <input id="postcode" aria-describedby={POSTCODE_DESCRIPTION_ID} type="text" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description met een \`role\` attribuut. De semantiek is al geregeld via het \`aria-describedby\` attribuut op het invoerveld. Een extra \`role\` op de Form Field Description is overbodig en kan verwarring veroorzaken bij hulpsoftware.`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionAboveTextInputViaVisualOrder: Story = {
  name: 'Fout: Form Field Description ná het invoerveld in document order',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '6E448EA9-DCD2-4FAA-AC66-EE24931F675E';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor={POSTCODE_DESCRIPTION_ID}>Postcode</label>
        <div>
          <input id="postcode" aria-describedby={POSTCODE_DESCRIPTION_ID} type="text" style={{ order: 2 }} />
        </div>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID} style={{ order: 1 }}>
          {POSTCODE_HELP_TEXT}
        </FormFieldDescription>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description die visueel boven het invoerveld staat door middel van CSS \`order\`, maar in de DOM-volgorde ónder het invoerveld staat. Voor bezoekers die gebruik maken van een screenreader staat de beschrijving nog steeds ónder het invoerveld in plaats van erboven.

De Form Field Description voldoet niet aan [WCAG Succescriterium 1.3.2 Betekenisvolle volgorde](https://nldesignsystem.nl/wcag/1.3.2/), omdat de visuele volgorde en de DOM-volgorde niet overeenkomen.`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionAboveTextInput: Story = {
  name: 'Fout: Form Field Description ná het invoerveld in document order',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '679F0E96-F497-4C33-90AB-DE118A4D7DDC';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_DESCRIPTION_ID}>Postcode</label>
        <div>
          <input id="postcode" aria-describedby={POSTCODE_DESCRIPTION_ID} type="text" />
        </div>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>{POSTCODE_HELP_TEXT}</FormFieldDescription>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description die in de documentvolgorde ná het invoerveld staat.

Voor bezoekers die gebruikmaken van een screenreader wordt de beschrijving pas aangekondigd nadat het invoerveld is bereikt. Hierdoor komt de volgorde van de informatie niet overeen met de bedoelde leesvolgorde.

De Form Field Description voldoet niet aan [WCAG Succescriterium 1.3.2 Betekenisvolle volgorde](https://nldesignsystem.nl/wcag/1.3.2/).`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionAriaLabelledBy: Story = {
  name: 'Fout: Form Field Description gekoppeld via aria-labelledby',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '1DDE8A40-0B02-4F57-B903-EEE29F74DB9C';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_DESCRIPTION_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>{POSTCODE_HELP_TEXT}</FormFieldDescription>
        <div>
          <input id="postcode" aria-labelledby={POSTCODE_DESCRIPTION_ID} type="text" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Fout: De Form Field Description is gekoppeld via \`aria-labelledby\` in plaats van \`aria-describedby\`. Hierdoor wordt de toegankelijke naam van het invoerveld bepaald door de Form Field Description in plaats van de Form Field Label. Gebruik in plaats daarvan \`aria-describedby\`.`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionAriaLabelledByLabelAndDescription: Story = {
  name: 'Fout: Form Field Description gekoppeld via aria-labelledby met label en description',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '13CADDA8-653E-4406-A918-5944B21202BD';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    const POSTCODE_LABEL_ID = `${POSTCODE_INPUT_ID}-label`;
    return (
      <>
        <label id={POSTCODE_LABEL_ID} htmlFor="postcode">
          Postcode
        </label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>{POSTCODE_HELP_TEXT}</FormFieldDescription>
        <div>
          <input
            id="postcode"
            aria-labelledby={`${POSTCODE_LABEL_ID} ${POSTCODE_DESCRIPTION_ID}`}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Fout: De Form Field Description is opgenomen in \`aria-labelledby\` samen met het label. Alle informatie wordt wel voorgelezen, maar als onderdeel van de toegankelijke naam in plaats van de beschrijving. Hierdoor wordt de toegankelijke naam van het invoerveld veel te lang, en heeft de bezoeker niet de mogelijkheid om de description over te slaan zoals dat wel kan met \`aria-describedby\`. Gebruik in plaats daarvan \`aria-describedby\` voor de Form Field Description.`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithoutRelationWithInput: Story = {
  name: 'Fout: Form Field Description niet gekoppeld aan HTML input element met WAI-ARIA aria-describedby attribuut',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'D3F3AE7E-E770-4457-81EC-F04D698C724E';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>{POSTCODE_HELP_TEXT}</FormFieldDescription>
        <div>
          <input id={POSTCODE_INPUT_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fout: De Form Field Description is niet gekoppeld aan het invoerveld via `aria-describedby`. De beschrijving wordt niet voorgelezen door een screenreader bij focus op het invoerveld.',
      },
    },
    status: { type: [] },
  },
};
export const FormFieldDescriptionWithTabindexAttribute: Story = {
  name: 'Fout: Form Field Description met HTML tabindex attribuut',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '583564E1-4BF7-4C24-AB1E-D76B954B08D3';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID} tabIndex={0}>
          {POSTCODE_HELP_TEXT}
        </FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Fout: De Form Field Description krijgt focus via \`Tab\` tijdens toetsenbordnavigatie. Het is onlogisch dat dit element in de focusvolgorde voorkomt, want de component is informatief, niet interactief.

De beschrijving wordt al voorgelezen via \`aria-describedby\` bij focus op het invoerveld.`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionAriaDescription: Story = {
  name: 'Fout: Form Field met aria-description in plaats van Form Field Description',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => (
    <>
      <label htmlFor="postcode">Postcode</label>
      <div>
        <input id="postcode" type="text" autoComplete="postal-code" aria-description={POSTCODE_HELP_TEXT} />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Fout: De beschrijving staat in een \`aria-description\` op het invoerveld. Hierdoor is de tekst alleen beschikbaar voor bezoekers die gebruik maken van hulpsoftware, in plaats van als zichtbare informatie voor iedereen. Gebruik in plaats daarvan een Form Field Description en koppel het met \`aria-describedby\` aan het invoerveld.`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithUnorderedListWithoutBullets: Story = {
  name: 'Fout: Form Field Description met een ongeordende lijst zonder leestekens',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'E37F1DD3-72C1-4999-8C9C-5C966EAC9A97';
    const PASSWORD_DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Wachtwoord</label>
        <FormFieldDescription id={PASSWORD_DESCRIPTION_ID}>
          <UnorderedList>
            <ul style={{ listStyle: 'none' }}>
              <li>Minimaal 8 tekens.</li>
              <li>Minimaal één hoofdletter.</li>
              <li>Minimaal één cijfer.</li>
            </ul>
          </UnorderedList>
        </FormFieldDescription>
        <div>
          <input id={INPUT_ID} aria-describedby={PASSWORD_DESCRIPTION_ID} type="password" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Fout: De opsommingstekens (bullets) ontbreken bij de lijstitems. Visueel is niet duidelijk dat het om een lijst gaat. Verwijder \`list-style: none\` niet, want dit verwijdert de bullets die nodig zijn om de lijst herkenbaar te maken.`,
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionANDAriaDescription: Story = {
  name: 'Fout: Form Field met Form Field Description en aria-description',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '02F7932E-F73A-4DCB-B903-F5CECFCC4F72';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>{POSTCODE_HELP_TEXT}</FormFieldDescription>
        <div>
          <input
            id={POSTCODE_INPUT_ID}
            aria-describedby={POSTCODE_DESCRIPTION_ID}
            aria-description={POSTCODE_HELP_TEXT} // NOSONAR
            type="text"
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Fout: De beschrijving staat zowel als zichtbare tekst in de Form Field Description als in een \`aria-description\` op het invoerveld. Als de zichtbare tekst later wordt aangepast maar de \`aria-description\` niet, horen bezoekers met een screenreader andere informatie dan wat er op het scherm staat. Verwijder de \`aria-description\` en gebruik alleen de Form Field Description gekoppeld via \`aria-describedby\`.`,
      },
    },
    status: { type: [] },
  },
};
