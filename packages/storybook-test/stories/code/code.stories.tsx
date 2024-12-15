import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../../components-react/code-react/package.json';
import { Code } from '../../../components-react/code-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/code-docs/docs/component.md?raw';
import tokens from '../../../tokens/code-tokens/tokens.json';
import { ExampleBodyTextDecorator } from '../../src/ExampleBodyText';

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
