import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../../components-react/mark-react/package.json';
import { Mark } from '../../../components-react/mark-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/mark-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
  },
  component: Mark,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13787-19085',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Mark',
} satisfies Meta<typeof Mark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MarkSpan: Story = {
  name: 'Fout: Mark met een span element',
  args: {
    children: 'gemarkeerde tekst',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Een Mark moet gerendered zijn met een `mark` HTML-element. Wanneer de Mark per ongeluk met een ander component wordt gerendered, zoals een `span`, dan moet de werking hetzelfde zijn.',
      },
    },
    status: { type: [] },
  },
  render({ children }) {
    return (
      <Paragraph>
        In deze paragraaf staat een stukje <span className="nl-mark">{children}</span>.
      </Paragraph>
    );
  },
};

export const MarkLowContrast: Story = {
  name: 'Fout: Mark met laag contrast',
  args: {
    children: 'gemarkeerde tekst',
  },
  parameters: {
    docs: {
      description: {
        story: `Een Mark moet visueel onderscheidbaar zijn ten opzichte van de achtergrond. Als het contrast tussen de Mark en de achtergrond minder is, dan voldoet de implementatie niet.

In dit voorbeeld is het contrast tussen de achtergrondkleur \`white\` en de voorgrondkleur \`yellow\` slechts 1,07 ÷ 1, terwijl het minstens 3 ÷ 1 moet zijn.`,
      },
    },
    status: { type: [] },
  },
  render({ children }) {
    return (
      <div
        style={{
          '--nl-mark-background-color': 'yellow',
          '--nl-mark-color': 'black',
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <Paragraph>
          In deze koptekst staat een stukje <Mark>{children}</Mark>.
        </Paragraph>
      </div>
    );
  },
};
