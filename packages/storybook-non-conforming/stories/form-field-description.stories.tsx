import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import componentMarkdown from '../../docs/form-field-description-docs/docs/component.md?raw';
import '../../components-css/form-field-description-css/src/form-field-description.scss';
import packageJSON from '../../components-react/form-field-description-react/package.json';
import { FormFieldDescription } from '../../components-react/form-field-description-react/src/form-field-description';

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

export const FormFieldDescriptionAsParagraph: Story = {
  name: 'Fout: Form Field Description als HTML span element',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => (
    <div style={{ all: 'initial', display: 'block' } as CSSProperties}>
      <label htmlFor="probleem">Probleem</label>
      <span className="nl-form-field-description" id="probleem-omschrijving">
        Beschrijf het probleem zo specifiek mogelijk. Vermeld in ieder geval de foutcode (indien bekend), wanneer het
        probleem voor het eerst optrad en welke stappen je al hebt ondernomen. (Max. 500 woorden).
      </span>
      <textarea id="probleem" aria-describedby="probleem-omschrijving" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description als HTML \`span\` element in plaats van HTML \`div\` element. De CSS \`display\` property van een \`span\` is \`inline\`, die van een \`div\` is \`block\`. Wanneer de CSS niet wordt ingeladen, zorgt dit verschil ervoor dat de component inline wordt geplaatst naast andere componenten in plaats van er tussen.

Dit overtreedt de richtlijn "Formulieren - Descriptions - Plaats descriptions tussen label en formulierveld".`,
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
  render: () => (
    <>
      <label htmlFor="omschrijving">Omschrijving</label>
      <FormFieldDescription id="omschrijving-description">
        <details>
          <summary>Meer informatie</summary>
          Beschrijf het probleem zo specifiek mogelijk. Vermeld in ieder geval de foutcode (indien bekend), wanneer het
          probleem voor het eerst optrad en welke stappen je al hebt ondernomen. (Max. 500 woorden).
        </details>
      </FormFieldDescription>
      <textarea id="omschrijving" aria-describedby="omschrijving-description" />
    </>
  ),
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
  render: () => (
    <>
      <label htmlFor="postcode">Postcode</label>
      <FormFieldDescription id="postcode-description" role="definition">
        Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
      </FormFieldDescription>
      <input id="postcode" aria-describedby="postcode-description" type="text" />
    </>
  ),
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
  name: 'Fout: Form Field Description boven invoerveld via visual order',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="postcode">Postcode</label>
      <input id="postcode" aria-describedby="postcode-description" type="text" style={{ order: 2 }} />
      <FormFieldDescription id="postcode-description" style={{ order: 1 }}>
        Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
      </FormFieldDescription>
    </div>
  ),
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

export const FormFieldDescriptionAriaLabel: Story = {
  name: 'Fout: Form Field Description met aria-label op invoerveld dat Form Field Label overschrijft',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => (
    <>
      <label htmlFor="postcode">Postcode</label>
      <FormFieldDescription id="postcode-description">
        Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
      </FormFieldDescription>
      <input id="postcode" aria-label="Postcode" aria-describedby="postcode-description" type="text" />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description met \`aria-describedby\` gekoppeld aan het bijbehorende invoerveld. Het invoerveld heeft ook een \`aria-label\` dat de toegankelijke naam vanuit de Form Field Label overschrijft. Hierdoor is de Form Field Label overbodig en worden bezoekers van hulpsoftware verward.

Gebruik geen \`aria-label\` in combinatie met een Form Field Label.`,
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
  render: () => (
    <>
      <label htmlFor="postcode">Postcode</label>
      <FormFieldDescription id="postcode-description">
        Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
      </FormFieldDescription>
      <input id="postcode" aria-labelledby="postcode-description" type="text" />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description die is gekoppeld aan het bijbehorende invoerveld via \`aria-labelledby\` in plaats van \`aria-describedby\`. Hierdoor wordt de toegankelijke naam van het invoerveld bepaald door de Form Field Description in plaats van de Form Field Label. Gebruik in plaats daarvan \`aria-describedby\`.`,
      },
    },
    status: { type: [] },
  },
};
