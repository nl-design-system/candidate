import { merge } from 'lodash-es';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/text-input-css/src/text-input.scss';
import packageJSON from '../../components-react/text-input-react/package.json';
import { TextInput } from '../../components-react/text-input-react/src/text-input';
import componentMarkdown from '../../docs/text-input-docs/docs/component.md?raw';
import reactMeta from '../../docs/text-input-docs/stories/text-input.react.meta';

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
    },
  }),
  title: 'Componenten/Text Input',
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInputWithoutLabel: Story = {
  name: 'Fout: Text Input zonder label',
  render: () => (
    <>
      <div>Naam</div>
      <div>
        <TextInput autoComplete="name" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De tekst "Naam" staat boven de Text Input, maar is niet gekoppeld als label. Een screenreader noemt alleen "invoerveld" zonder naam, en een klik op de tekst zet de focus niet in de Text Input. Gebruik een `label` HTML-element met een `for` HTML-attribuut dat verwijst naar het `id` van de Text Input.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputPlaceholderAsLabel: Story = {
  name: 'Fout: Text Input met een placeholder in plaats van een label',
  render: () => (
    <div>
      <TextInput aria-label="Naam" autoComplete="name" placeholder="Naam" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Text Input heeft alleen een placeholder als zichtbaar label. Zodra je iets invult, verdwijnt de placeholder en weet je niet meer wat je moest invullen. Ook heeft een placeholder vaak te weinig contrast om als label te dienen. Gebruik altijd een zichtbaar label.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputInvalidWithoutErrorMessage: Story = {
  name: 'Fout: Text Input invalid zonder foutmelding',
  render: () => (
    <>
      <div>
        <label htmlFor="8bcd272e-94bb-41a7-8dcd-35b1efc71ea6">E-mailadres</label>
      </div>
      <div>
        <TextInput
          id="8bcd272e-94bb-41a7-8dcd-35b1efc71ea6"
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
          'De Text Input is gemarkeerd als invalid, maar er is geen foutmelding die uitlegt wat er mis is en hoe je het oplost. Koppel een Form Field Error Message via `aria-describedby`.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputWithoutAutocomplete: Story = {
  name: 'Fout: Text Input voor persoonsgegevens zonder autocomplete',
  render: () => (
    <>
      <div>
        <label htmlFor="70e0a780-cc1a-4ebe-976c-096418b13c8b">E-mailadres</label>
      </div>
      <div>
        <TextInput id="70e0a780-cc1a-4ebe-976c-096418b13c8b" type="email" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Text Input vraagt om een e-mailadres van de bezoeker, maar heeft geen `autocomplete` HTML-attribuut. De browser kan het veld niet automatisch invullen, en hulpsoftware kan het doel van het veld niet herkennen. Gebruik `autoComplete="email"`.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputSizeTooSmall: Story = {
  name: 'Fout: Text Input smaller dan de verwachte waarde',
  render: () => (
    <>
      <div>
        <label htmlFor="fad7cf5c-4dd7-4046-9552-8c7e9567fa32">E-mailadres</label>
      </div>
      <div>
        <TextInput
          id="fad7cf5c-4dd7-4046-9552-8c7e9567fa32"
          autoComplete="email"
          defaultValue="jan.jansen@voorbeeldgemeente.nl"
          size="xs"
          type="email"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Text Input is veel smaller dan een gemiddeld e-mailadres. Je ziet maar een deel van wat je hebt ingevuld, waardoor je fouten moeilijk opmerkt. Kies een breedte die past bij de verwachte lengte van de waarde.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputDisabledAndReadOnly: Story = {
  name: 'Fout: Text Input die disabled en read-only tegelijk is',
  render: () => (
    <>
      <div>
        <label htmlFor="4ec51b67-9538-4c88-86b2-e7df66324063">Naam</label>
      </div>
      <div>
        <input
          id="4ec51b67-9538-4c88-86b2-e7df66324063"
          autoComplete="name"
          className="nl-text-input nl-text-input--disabled nl-text-input--read-only"
          defaultValue="Jan Jansen"
          disabled
          readOnly
          type="text"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Text Input is tegelijk disabled en read-only. Een read-only waarde kun je lezen en kopiëren, een disabled Text Input kun je niet gebruiken. Samen is onduidelijk wat de bezoeker met het veld kan. Kies één van beide. De React component negeert `readOnly` als `disabled` gezet is.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputInvalidAndDisabled: Story = {
  name: 'Fout: Text Input die invalid en disabled tegelijk is',
  render: () => (
    <>
      <div>
        <label htmlFor="512ac87a-ed1e-446f-9db8-02e77d3473c6">E-mailadres</label>
      </div>
      <div>
        <input
          id="512ac87a-ed1e-446f-9db8-02e77d3473c6"
          aria-invalid="true"
          autoComplete="email"
          className="nl-text-input nl-text-input--invalid nl-text-input--disabled"
          defaultValue="jan.jansen"
          disabled
          type="email"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Text Input is tegelijk invalid en disabled. Je kunt de fout niet herstellen, omdat je de Text Input niet kunt gebruiken. De React component negeert `invalid` als `disabled` gezet is.',
      },
    },
    status: { type: [] },
  },
};

export const TextInputWithPositiveTabIndex: Story = {
  name: 'Fout: Text Input met een positieve tabindex',
  render: () => (
    <>
      <div>
        <label htmlFor="7901e1ca-c2d6-4541-ba9a-af02a8c72594">Voornaam</label>
      </div>
      <div>
        <TextInput id="7901e1ca-c2d6-4541-ba9a-af02a8c72594" autoComplete="given-name" />
      </div>
      <div>
        <label htmlFor="0ccf950d-1f74-46f4-a3fd-7de2263f4d6c">Achternaam</label>
      </div>
      <div>
        <TextInput id="0ccf950d-1f74-46f4-a3fd-7de2263f4d6c" autoComplete="family-name" tabIndex={1} />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De tweede Text Input heeft `tabIndex={1}`, waardoor die met de Tab-toets eerder de focus krijgt dan de eerste. De focusvolgorde komt niet meer overeen met de visuele volgorde. Gebruik geen positieve `tabIndex`.',
      },
    },
    status: { type: [] },
  },
};
