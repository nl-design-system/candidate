import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/code-css/src/code.scss';
import packageJSON from '../../components-react/code-react/package.json';
import { Code } from '../../components-react/code-react/src/code';
import componentMarkdown from '../../docs/code-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: Code,
  decorators: [ExampleBodyTextDecorator],
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/code',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Code',
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NewlineCharacters: Story = {
  name: 'Fout: Code met "newline characters"',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: `Een fragment Code in een Paragraph waar "newline characters" worden weergegeven, door regels code op een eigen regel te tonen. In tegenstelling tot newline characters die in een Paragraph worden genegeerd, worden new line characters in Code wel weergegeven.

Dit voorbeeld voldoet niet aan NL Design System acceptatiecriteria, omdat voor code met meerdere regels Code Block gebruikt moet worden in plaats van Code.`,
      },
    },
    status: { type: [] },
    testReport: {
      date: '2024-12-17',
      fail: ['https://nldesignsystem.nl/code/#acceptatiecriteria'],
    },
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

export const CodeWithNewlines: Story = {
  name: 'Fout: Code in Paragraph in plaats van Code Block',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: `Paragraph die volledig bestaat uit Code. In tegenstelling tot newline characters die in een Paragraph worden genegeerd, worden new line characters in Code wel weergegeven.

Dit voorbeeld voldoet niet aan NL Design System acceptatiecriteria, omdat voor code met meerdere regels Code Block gebruikt moet worden in plaats van Code.`,
      },
    },
    status: { type: [] },
    testReport: {
      date: '2025-12-13',
      fail: ['https://nldesignsystem.nl/code/#acceptatiecriteria'],
    },
  },
  render: () => (
    <Paragraph>
      <Code>{'catch (error) {\n  // Een parse-fout kan in deze situatie genegeerd worden\n}'}</Code>
    </Paragraph>
  ),
};

export const EmptyCode: Story = {
  name: 'Fout: Code die leeg is, in een Paragraph',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: `Paragraph die een leeg Code component bevat. Een Code element moet inhoud bevatten. Een Code element kan achtergebleven zijn door tekst te bewerken in een rich text editor.`,
      },
    },
    status: { type: [] },
  },
  render: () => (
    <Paragraph>
      Tussen de volgende haakjes is een leeg Code component: (<Code>{''}</Code>).
    </Paragraph>
  ),
};

export const BodyTextRightToLeft: Story = {
  name: 'Code in Body Text in Arabische taal',
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

De ronde haakjes in de code na "parseFloat" worden aan foutief links van "parseFloat" getoond, doordat de code foutief wordt weergegeven als tekst die van rechts naar links wordt geschreven.`,
      },
    },
  },
  render: ({ children }) => (
    <Paragraph>
      تقوم الدالة <Code dir="">{children}</Code> بتحليل وسيطة سلسلة وإرجاع رقم فاصل عشري.
    </Paragraph>
  ),
};
