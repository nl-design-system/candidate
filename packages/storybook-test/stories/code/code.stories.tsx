import type { Meta, StoryObj } from '@storybook/react';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import packageJSON from '../../../components-react/code-react/package.json';
import { Code } from '../../../components-react/code-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/code-docs/docs/component.md?raw';
import tokens from '../../../tokens/code-tokens/tokens.json';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: Code,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13778-1279',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    tokens,
  },
  title: 'Componenten/Code',
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Code',
  args: {
    children: `import { Code } from '@nl-design-system-candidate/code-react';`,
  },
  parameters: {
    status: { type: [] },
  },
};

export const BodyText: Story = {
  name: 'Code in Body Text',
  args: {
    children: `parseFloat()`,
    lang: 'en',
  },
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'en',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een fragment Code in een Paragraph met Engelstalige tekst, die visueel onderscheidbaar is door een monospace lettertype.',
      },
    },
    status: { type: [] },
  },
  render: ({ children }) => (
    <Paragraph>
      The <Code>{children}</Code> function parses a string argument and returns a floating point number.
    </Paragraph>
  ),
};

export const BodyTextRightToLeft: Story = {
  name: 'Code in Body Text (right-to-left)',
  args: {
    children: `parseFloat()`,
  },
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'rtl',
    lang: 'ar',
  },
  parameters: {
    docs: {
      description: {
        story: `Een fragment Code in een Paragraph met Arabische tekst, die visueel onderscheidbaar is door een monospace lettertype.

De ronde haakjes in de code na "parseFloat" worden aan rechts van "parseFloat" getoond. In tegenstelling tot de lopende tekst die van rechts naar links wordt geschreven, wordt de code van links naar rechts geschreven.`,
      },
    },
    status: { type: [] },
  },
  render: ({ children }) => (
    <Paragraph>
      تقوم الدالة <Code>{children}</Code> بتحليل وسيطة سلسلة وإرجاع رقم فاصل عشري.
    </Paragraph>
  ),
};

export const HypenatedBodyText: Story = {
  name: 'Code zonder hyphenation in Body Text met hyphenation',
  args: {
    children: `InternalFrameInternalFrameTitlePaneInternalFrameTitlePaneMaximizeButtonWindowNotFocusedState`,
  },
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een lang stuk code dat niet op de regel past, wordt zodat de tekst volledig leesbaar is. Het woord word niet afgebroken met een koppelstreepje (hyphen), zodat er geen onduidelijkheid is of het koppelstreepje onderdeel is van de code.',
      },
    },
    status: { type: [] },
  },
  render: ({ children }) => (
    <Paragraph>
      De <Code>sun.swing.plaf.nimbus</Code> package heeft één van de langste class names in Java:{' '}
      <Code>{children}</Code>.
    </Paragraph>
  ),
};

export const WhiteSpaceCharacters: Story = {
  name: 'Code met white space characters',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een fragment Code waarbij vier spaties aan witruimte zichtbaar is. De witruimte is niet samengevoegd tot 1 spatie.',
      },
    },
    status: { type: [] },
  },
  render: () => (
    <Paragraph>
      Gebruik het derde argument van deze functie om de hoeveelheid spaties voor inspringing te bepalen:{' '}
      <Code>{'JSON.stringify(json, null, "    ");'}</Code>
    </Paragraph>
  ),
};

export const NewlineCharacters: Story = {
  name: 'Code met newline characters',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een fragment Code in een Paragraph waar "newline characters" worden weergegeven, door regels code op een eigen regel te tonen. In tegenstelling tot newline characters die in een Paragraph worden genegeerd, worden new line characters in Code wel weergegeven.',
      },
    },
    status: { type: [] },
  },
  render: () => (
    <Paragraph>
      Je kunt een comment plaatsen op een eigen regel om uit te leggen dat de fout genegeerd moet worden:{' '}
      <Code>{'catch (error) {\n  // Een parse-fout kan in deze situatie genegeerd worden\n}'}</Code> Op deze manier is
      later duidelijk dat er opzettelijk geen code in het <Code>catch</Code>-block staat, en dat het niet per ongeluk is
      vergeten.
    </Paragraph>
  ),
};
