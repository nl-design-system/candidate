import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/form-field-description-css/src/form-field-description.scss';
import packageJSON from '../../components-react/form-field-description-react/package.json';
import { FormFieldDescription } from '../../components-react/form-field-description-react/src/form-field-description';
import componentMarkdown from '../../docs/form-field-description-docs/docs/component.md?raw';
import tokens from '../../tokens/form-field-description-tokens/tokens.json';
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
  name: 'Form Field Description met een HTML p element',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => (
    <FormFieldDescription id="postcode-description">
      <p>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</p>
    </FormFieldDescription>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Een Form Field Description die een HTML `p` element bevat als child element.',
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
  render: () => (
    <FormFieldDescription id="postcode-description">
      <p>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters.</p>
      <p>Bijvoorbeeld: 1234 AB.</p>
    </FormFieldDescription>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Een Form Field Description die meerdere HTML `p` elementen bevat als child elementen.',
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
  render: () => (
    <FormFieldDescription id="postcode-description">
      <Paragraph>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</Paragraph>
    </FormFieldDescription>
  ),
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
  render: () => (
    <FormFieldDescription id="postcode-description">
      <Paragraph>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters.</Paragraph>
      <Paragraph>Bijvoorbeeld: 1234 AB.</Paragraph>
    </FormFieldDescription>
  ),
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
  render: () => (
    <FormFieldDescription id="postcode-description">
      <span>Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.</span>
    </FormFieldDescription>
  ),
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
  render: () => (
    <>
      <label htmlFor="postcode">Postcode</label>
      <FormFieldDescription id="postcode-description">
        Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
      </FormFieldDescription>
      <input id="postcode" aria-describedby="postcode-description" type="text" />
    </>
  ),
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
  render: () => (
    <>
      <label htmlFor="postcode">Postcode</label>
      <FormFieldDescription id="postcode-description">
        Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
      </FormFieldDescription>
      <input id="postcode" aria-describedby="postcode-description" type="text" />
    </>
  ),
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
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="postcode">Postcode</label>
      <FormFieldDescription id="postcode-description" style={{ order: 2 }}>
        Een postcode bestaat uit 4 cijfers, een spatie en 2 letters. Bijvoorbeeld: 1234 AB.
      </FormFieldDescription>
      <input id="postcode" aria-describedby="postcode-description" type="text" style={{ order: 1 }} />
    </div>
  ),
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

export const FormFieldDescriptionTextSpacing: Story = {
  name: 'Form Field Description met vergrootte tekstafstand',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  render: () => (
    <FormFieldDescription
      id="probleem-description"
      style={{
        lineHeight: 1.5,
        letterSpacing: '0.12em',
        wordSpacing: '0.16em',
      }}
    >
      Beschrijf het probleem zo specifiek mogelijk. Vermeld in ieder geval de foutcode (indien bekend), wanneer het
      probleem voor het eerst optrad en welke stappen je al hebt ondernomen. (Max. 500 woorden).
    </FormFieldDescription>
  ),
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
