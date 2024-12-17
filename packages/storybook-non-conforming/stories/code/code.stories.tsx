import type { Meta, StoryObj } from '@storybook/react';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import packageJSON from '../../../components-react/code-react/package.json';
import { Code } from '../../../components-react/code-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/code-docs/docs/component.md?raw';

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
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13778-1279',
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
  name: 'Code met "newline characters"',
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
