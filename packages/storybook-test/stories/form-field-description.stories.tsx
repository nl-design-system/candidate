import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { UnorderedList } from '../../components-react/unordered-list-react/src/unordered-list';
import '../../components-css/unordered-list-css/src/unordered-list.scss';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/form-field-description-css/src/form-field-description.scss';
import packageJSON from '../../components-react/form-field-description-react/package.json';
import { FormFieldDescription } from '../../components-react/form-field-description-react/src/form-field-description';
import componentMarkdown from '../../docs/form-field-description-docs/docs/component.md?raw';
import tokens from '../../tokens/form-field-description-tokens/tokens.json';
import { LargeLetterSpacingDecorator, LargeLineHeightDecorator, LargeWordSpacingDecorator } from '../src/TextDecorator';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
    disabled: { control: 'boolean', table: { category: 'API' } },
  },
  component: FormFieldDescription,
  decorators: ExampleBodyTextDecorator,
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
  title: 'Componenten/Form Field Description',
} satisfies Meta<typeof FormFieldDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormFieldDescriptionWithParagraphElement: Story = {
  name: 'Form Field Description met een HTML-element p',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '2136D6F3-2B4C-4195-9DFB-CCF8B69AAE53';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <p>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</p>
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="text"
          autoComplete="postal-code"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'De kleur en typografie van de tekst komen overeen met het design van de Form Field Description.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithMultipleParagraphElements: Story = {
  name: 'Form Field Description met meerdere HTML p elementen',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '9EDD0F53-98EC-4E12-BE15-00E9053CEEEA';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <p>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters.</p>
          <p>Bijvoorbeeld: 1234 AB.</p>
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="text"
          autoComplete="postal-code"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De kleur en typografie van alle alinea’s komen overeen met het design van de Form Field Description, en er is passende ruimte tussen de alinea’s.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithParagraphComponent: Story = {
  name: 'Form Field Description met NL Paragraph component',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '801BDACF-97F6-4F1F-90EB-280927C0777F';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <Paragraph>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</Paragraph>
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="text"
          autoComplete="postal-code"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Form Field Description die een NL Paragraph component bevat als child element.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithMultipleParagraphComponents: Story = {
  name: 'Form Field Description met meerdere NL Paragraph componenten',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '38C1CAFA-554C-4670-918B-3E231F3F7BBE';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <Paragraph>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters.</Paragraph>
          <Paragraph>Bijvoorbeeld: 1234 AB.</Paragraph>
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="text"
          autoComplete="postal-code"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Form Field Description die meerdere NL Paragraph componenten bevat als child elementen.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithPhrasingContent: Story = {
  name: 'Form Field Description met phrasing content',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = '79B14573-CAE4-40B8-BB27-03B676494DE5';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <span>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</span>
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="text"
          autoComplete="postal-code"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Form Field Description met een `span` element als voorbeeld van phrasing content als child element.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionRelationWithInput: Story = {
  name: 'Form Field Description gekoppeld aan HTML input element via aria-describedby',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'f973b468-8178-43b6-9b69-666c4a567cf3';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="text"
          autoComplete="postal-code"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Form Field Description gekoppeld aan een HTML input element via het `aria-describedby` attribuut. De Form Field Description wordt voorgelezen door een screenreader bij focus op het input element.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionAboveTextInput: Story = {
  name: 'Form Field Description boven de Text Input in de Form Field',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'EDE17C81-2F3E-4DF1-8F3C-C9165FDF114E';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="text"
          autoComplete="postal-code"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Form Field Description die boven de Text Input in de Form Field staat, tussen het label en het invoerveld.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionBelowTextInputViaStyling: Story = {
  name: 'Form Field Description onder de Text Input in de Form Field via styling',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'DA409064-5394-4BD7-8DC0-6DDF40436040';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor={POSTCODE_INPUT_ID}>Postcode</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID} style={{ order: 2 }}>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="text"
          autoComplete="postal-code"
          style={{ order: 1 }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Form Field Description die onder de Text Input in de Form Field staat door middel van CSS styling. De Form Field Description staat in de DOM-volgorde boven het invoerveld, maar wordt visueel eronder geplaatst.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithUnorderedList: Story = {
  name: 'Form Field Description met een ongeordende lijst',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'CD860B9E-5D14-4BBF-BF47-5FC95DA2E4C5';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Wachtwoord</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <UnorderedList>
            <ul>
              <li>Minimaal 8 tekens.</li>
              <li>Minimaal één hoofdletter.</li>
              <li>Minimaal één cijfer.</li>
            </ul>
          </UnorderedList>
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="password"
          autoComplete="new-password"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Elk lijstitem heeft een opsommingsteken (bullet) aan het begin, en de kleur en typografie van de lijstitems komen overeen met het design van de Form Field Description. Voor screenreaders wordt de lijst herkend als een lijst met het juiste aantal items.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionWithParagraphAndUnorderedList: Story = {
  name: 'Form Field Description met een alinea en een ongeordende lijst',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const POSTCODE_INPUT_ID = 'CB125EEC-271F-4036-8A32-D160C67D7A4D';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Wachtwoord</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          <Paragraph>Uw wachtwoord moet voldoen aan de volgende eisen:</Paragraph>
          <UnorderedList>
            <ul>
              <li>Minimaal 8 tekens.</li>
              <li>Minimaal één hoofdletter.</li>
              <li>Minimaal één cijfer.</li>
            </ul>
          </UnorderedList>
        </FormFieldDescription>
        <input
          id={POSTCODE_INPUT_ID}
          aria-describedby={POSTCODE_DESCRIPTION_ID}
          type="password"
          autoComplete="new-password"
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Er is een alinea met 1 zin gevolgd door een opsomming met drie items. De alinea en de items in de opsomming hebben voldoende leestekens, waardoor de informatie als platte tekst even duidelijk is als met de Unordered List. Een screenreader leest bijvoorbeeld: "Uw wachtwoord moet voldoen aan de volgende eisen: Minimaal 8 tekens. Minimaal één hoofdletter. Minimaal één cijfer." Dat is voldoende, visueel is niet meer informatie beschikbaar. De opsomming is visueel herkenbaar als Unordered List. De Paragraph en de Unordered List hebben een design dat past bij de Form Field Description, wat betreft kleur en lettertype.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionDisabled: Story = {
  name: 'Form Field Description disabled',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'A1B2C3D4-0001-0001-0001-A1B2C3D4E5F6';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Postcode</label>
        <FormFieldDescription id={DESCRIPTION_ID} disabled>
          Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
        </FormFieldDescription>
        <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" disabled />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'De tekst heeft de kleur van een disabled Form Field Description.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionDisabledWithParagraphElement: Story = {
  name: 'Form Field Description disabled met HTML-element p',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'A1B2C3D4-0002-0002-0002-A1B2C3D4E5F6';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Postcode</label>
        <FormFieldDescription id={DESCRIPTION_ID} disabled>
          <p>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</p>
        </FormFieldDescription>
        <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" disabled />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'De tekst in het `p` element heeft de kleur van een disabled Form Field Description.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionDisabledWithParagraphComponent: Story = {
  name: 'Form Field Description disabled met NL Paragraph component',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => {
    const INPUT_ID = 'A1B2C3D4-0003-0003-0003-A1B2C3D4E5F6';
    const DESCRIPTION_ID = `${INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={INPUT_ID}>Postcode</label>
        <FormFieldDescription id={DESCRIPTION_ID} disabled>
          <Paragraph>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</Paragraph>
        </FormFieldDescription>
        <input id={INPUT_ID} aria-describedby={DESCRIPTION_ID} type="text" autoComplete="postal-code" disabled />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'De tekst in de NL Paragraph component krijgt nog niet de disabled kleur. Visueel is daardoor geen verschil zichtbaar tussen een actieve en een disabled Form Field Description met een NL Paragraph.',
      },
    },
    status: { type: [] },
  },
};

export const FormFieldDescriptionTextSpacing: Story = {
  name: 'Form Field Description met vergrootte tekstafstand',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  decorators: [LargeLetterSpacingDecorator, LargeWordSpacingDecorator, LargeLineHeightDecorator],
  render: () => {
    const POSTCODE_INPUT_ID = '18E35B1D-57D3-414C-9485-5C8542FC962D';
    const POSTCODE_DESCRIPTION_ID = `${POSTCODE_INPUT_ID}-description`;
    return (
      <>
        <label htmlFor={POSTCODE_INPUT_ID}>Probleem</label>
        <FormFieldDescription id={POSTCODE_DESCRIPTION_ID}>
          Beschrijf het probleem zo specifiek mogelijk. Vermeld in ieder geval de foutcode (indien bekend), wanneer het
          probleem voor het eerst optrad en welke stappen je al hebt ondernomen. (Max. 500 woorden).
        </FormFieldDescription>
        <textarea id={POSTCODE_INPUT_ID} aria-describedby={POSTCODE_DESCRIPTION_ID} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Een Form Field Description met vergrootte tekstafstand. De tekst overlapt niet met andere onderdelen van de content of componenten.

De tekstafstand is vergroot volgens [WCAG Succescriterium 1.4.12 Tekstafstand](https://nldesignsystem.nl/wcag/1.4.12/):

- Regelafstand: minimaal 150% van de lettergrootte
- Letterafstand: minimaal 12% van de lettergrootte
- Woordafstand: minimaal 16% van de lettergrootte`,
      },
    },
    status: { type: [] },
  },
};
