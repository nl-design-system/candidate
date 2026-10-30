import { merge } from 'lodash-es';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/form-field-label-css/src/form-field-label.scss';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel as FormFieldLabelComponent } from '../../components-react/form-field-label-react/src/form-field-label';
import componentMarkdown from '../../docs/form-field-label-docs/docs/component.md?raw';
import reactMeta from '../../docs/form-field-label-docs/stories/form-field-label.react.meta';

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
          url: 'https://nldesignsystem.nl/form-field-label',
        },
        {
          name: 'Open op GitHub',
          url: packageJSON.homepage,
        },
      ],
    },
  }),
  title: 'Componenten/Form Field Label',
} satisfies Meta<typeof FormFieldLabelComponent>;

export default meta;

type Story = StoryObj<typeof FormFieldLabelComponent>;

export const FormFieldLabelWithoutRelationWithInput: Story = {
  name: 'Fout: Form Field Label niet gekoppeld aan het invoerveld',
  args: {
    children: 'Postcode',
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id="F36DE513-C314-41B2-A48B-CDAA374D9D9D" type="text" autoComplete="postal-code" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label is niet gekoppeld aan het bijbehorende invoerveld met het HTML-attribuut `for`. Het invoerveld heeft daardoor geen toegankelijke naam, en een screenreader leest bij focus op het invoerveld niet voor wat er ingevuld moet worden. Een klik op het label zet de focus niet op het invoerveld. Dit voldoet niet aan [WCAG-criterium 1.3.1 Info en relaties](https://nldesignsystem.nl/wcag/1.3.1/). Koppel de Form Field Label met het HTML-attribuut `for` aan het HTML-attribuut `id` van het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelEmpty: Story = {
  name: 'Fout: Form Field Label zonder tekst',
  render: () => {
    const INPUT_ID = '5223DB84-AF2E-4A2F-B854-90255DBBB078';
    return (
      <>
        <label className="nl-form-field-label" htmlFor={INPUT_ID}></label>
        <div>
          <input id={INPUT_ID} type="text" autoComplete="postal-code" />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label is wel gekoppeld aan het invoerveld, maar bevat geen tekst. Bezoekers zien niet wat ze moeten invullen, en een screenreader leest bij focus op het invoerveld geen naam voor. Dit voldoet niet aan [WCAG-criterium 3.3.2 Labels of instructies](https://nldesignsystem.nl/wcag/3.3.2/). Geef elk label een tekst die beschrijft wat de bezoeker moet invullen.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelPlaceholder: Story = {
  name: 'Fout: placeholder in plaats van Form Field Label',
  render: () => (
    <div>
      <input type="text" placeholder="Postcode" autoComplete="postal-code" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het invoerveld heeft het HTML-attribuut `placeholder` in plaats van een Form Field Label. De placeholder verdwijnt zodra de bezoeker begint met typen, waardoor niet meer zichtbaar is wat er ingevuld moet worden. De tekst van een placeholder heeft vaak ook te weinig contrast. Gebruik altijd een zichtbare Form Field Label.',
      },
    },
    status: { type: [] },
  },
};

const ACCESSIBLE_NAME_MISMATCH_INPUT_ID = '1EB4BC5E-00B7-4674-BBE8-46D9D43B208F';

export const FormFieldLabelAccessibleNameMismatch: Story = {
  name: 'Fout: toegankelijke naam van het invoerveld wijkt af van de Form Field Label',
  args: {
    children: 'Postcode',
    htmlFor: ACCESSIBLE_NAME_MISMATCH_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input
          id={ACCESSIBLE_NAME_MISMATCH_INPUT_ID}
          aria-label="Adresgegevens"
          type="text"
          autoComplete="postal-code"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Het invoerveld heeft het WAI-ARIA-attribuut `aria-label`, dat de tekst van de Form Field Label overschrijft. Een screenreader leest "Adresgegevens" voor in plaats van "Postcode". Bezoekers die spraakbesturing gebruiken, kunnen het invoerveld niet activeren met de zichtbare tekst van het label. Dit voldoet niet aan [WCAG-criterium 2.5.3 Label in naam](https://nldesignsystem.nl/wcag/2.5.3/). Voeg geen WAI-ARIA-attribuut `aria-label` toe aan een invoerveld dat al een Form Field Label heeft.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelWithInteractiveContent: Story = {
  name: 'Fout: Form Field Label met interactieve content',
  args: {
    input: <input type="checkbox" name="voorwaarden" />,
    type: 'option',
  },
  render: (args) => (
    <FormFieldLabelComponent {...args}>
      Ik ga akkoord met de <a href="https://example.com/voorwaarden">voorwaarden</a>
    </FormFieldLabelComponent>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label bevat een link, terwijl een label alleen bedoeld is om het invoerveld te benoemen. Een klik op de tekst zet de checkbox aan of uit, maar een klik op de link opent de link. Het klikgebied van het label is daardoor onvoorspelbaar. Voor screenreadergebruikers wordt de tekst van de link onderdeel van de toegankelijke naam van de checkbox. Plaats interactieve inhoud daarom buiten het label, bijvoorbeeld in een Form Field Description.',
      },
    },
    status: { type: [] },
  },
};

const WITH_HEADING_INPUT_ID = 'C5F63D4D-6364-4F9A-93EC-9A81C1F857E0';

export const FormFieldLabelWithHeading: Story = {
  name: 'Fout: Form Field Label met een HTML heading element als inhoud',
  args: {
    children: <h1>Wat is uw naam?</h1>,
    htmlFor: WITH_HEADING_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={WITH_HEADING_INPUT_ID} type="text" autoComplete="name" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label bevat een HTML-element `h1`. Dit is semantisch onjuist, omdat een HTML-element `label` alleen phrasing content mag bevatten. Hierdoor kan de HTML-structuur ongeldig en onvoorspelbaar worden, wat de werking van de pagina voor gebruikers van hulptechnologie kan beïnvloeden. Plaats de Form Field Label in plaats daarvan binnen de heading en gebruik de `inherit` variant.',
      },
    },
    status: { type: [] },
  },
};

const WITH_TABINDEX_INPUT_ID = '770C7C8A-FD13-4070-A108-CA8DEA35BE74';

export const FormFieldLabelWithTabindexAttribute: Story = {
  name: 'Fout: Form Field Label met HTML tabindex attribuut',
  args: {
    children: 'Postcode',
    htmlFor: WITH_TABINDEX_INPUT_ID,
    tabIndex: 0,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={WITH_TABINDEX_INPUT_ID} type="text" autoComplete="postal-code" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label krijgt met `tabindex="0"` een plek in de tabvolgorde. Toetsenbordgebruikers moeten hierdoor een extra keer tabben om bij het invoerveld te komen, terwijl het label zelf niet bedienbaar is. Maak geen gebruik van het HTML-attribuut `tabindex` op de Form Field Label, het gekoppelde invoerveld is al focusbaar.',
      },
    },
    status: { type: [] },
  },
};

const DISABLED_WITH_ENABLED_INPUT_ID = '4220CA51-907F-4AE1-85D3-1EF811EF1DE9';

export const FormFieldLabelDisabledWithEnabledInput: Story = {
  name: 'Fout: Form Field Label disabled bij een invoerveld dat niet disabled is',
  args: {
    children: 'Postcode',
    disabled: true,
    htmlFor: DISABLED_WITH_ENABLED_INPUT_ID,
  },
  render: (args) => (
    <>
      <FormFieldLabelComponent {...args} />
      <div>
        <input id={DISABLED_WITH_ENABLED_INPUT_ID} type="text" autoComplete="postal-code" />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label heeft de `disabled` prop, maar het invoerveld heeft geen HTML-attribuut `disabled`. Het label ziet eruit alsof het invoerveld uitgeschakeld is, terwijl bezoekers het invoerveld nog gewoon kunnen gebruiken. De `disabled` prop verandert alleen de stijl van het label. Zet het HTML-attribuut `disabled` ook op het invoerveld zelf.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelOptionWithTextInput: Story = {
  name: 'Fout: Form Field Label option met een tekstveld',
  args: {
    children: 'Postcode',
    input: <input type="text" name="postcode" autoComplete="postal-code" />,
    type: 'option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label heeft de `option` variant met een tekstveld als `input`. De `option` variant is alleen bedoeld voor een radio button, checkbox of switch. Het label krijgt daardoor de styling van een keuzeoptie, terwijl het om een tekstveld gaat. Plaats de Form Field Label bij een tekstveld boven het invoerveld en koppel het label met het HTML-attribuut `for`.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldLabelInheritAndDisabled: Story = {
  name: 'Fout: Form Field Label met de CSS classes inherit en disabled',
  render: () => {
    const INPUT_ID = '70BA13F1-4767-468F-9F85-B20828A9A557';
    return (
      <>
        <h1>
          <label
            className="nl-form-field-label nl-form-field-label--inherit nl-form-field-label--disabled"
            htmlFor={INPUT_ID}
          >
            Wat is uw naam?
          </label>
        </h1>
        <div>
          <input id={INPUT_ID} type="text" autoComplete="name" disabled />
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De Form Field Label heeft de classes `nl-form-field-label--inherit` en `nl-form-field-label--disabled`. Deze combinatie is niet geldig: de `inherit` variant neemt alle styling van het parent-element over, ook de kleur. Het label krijgt daardoor niet de kleur van de `disabled` variant, terwijl het invoerveld wel disabled is. In React is deze combinatie niet mogelijk, omdat `type="inherit"` niet gecombineerd mag worden met `disabled`.',
      },
    },
    status: { type: [] },
  },
};
