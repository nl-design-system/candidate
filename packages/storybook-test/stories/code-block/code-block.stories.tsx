import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../../components-react/code-block-react/package.json';
import { CodeBlock } from '../../../components-react/code-block-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/code-block-docs/docs/component.md?raw';
import tokens from '../../../tokens/code-block-tokens/tokens.json';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: CodeBlock,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13778-3553',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    tokens,
  },
  title: 'Componenten/Code Block',
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Code Block',
  args: {
    children: `import { CodeBlock } from '@nl-design-system-candidate/code-block-react';`,
  },
  parameters: {
    status: { type: [] },
  },
};

export const KorteRegel: Story = {
  name: 'Korte regel',
  args: {
    children: `npm install`,
  },
};

export const LangeRegel: Story = {
  name: 'Lange regel',
  args: {
    children: `class ProjectContractChargingPeriodProjectAccountReferenceVM extends AbstractProjectContractChargingPeriodProjectAccountReferenceVM implements ProjectContractChargingPeriodProjectAccountReferenceVMInterface {
    /* todo */
}`,
  },
  parameters: {
    docs: {
      description: {
        story:
          'De volledige inhoud van de code block moet leesbaar zijn, ook als de content heel lange regels bevat. De code block moet horizontaal kunnen scrollen.',
      },
    },
  },
};

export const DefaultFont: Story = {
  name: 'Default font',
  args: {
    children: `De Code Block moet visueel onderscheidbaar zijn.`,
  },
  parameters: {
    docs: {
      description: {
        story: 'De Code Block moet visueel onderscheidbaar zijn, ook als er geen font design token is ingesteld.',
      },
    },
  },
};

export const FallbackFont: Story = {
  name: 'Fallback font',
  args: {
    children: `De Code Block moet visueel onderscheidbaar zijn.`,
    style: {
      '--nl-code-block-font-family': '""',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story: `De Code Block moet visueel onderscheidbaar zijn, ook wanneer de in de design token ingestelde code font niet geladen kan worden.`,
      },
    },
  },
};

export const Nederlands: Story = {
  name: 'Code met Nederlandse taal',
  args: {
    children: `// In dit voorbeeld berekenen we 7 keer 6.
var nummerA = 7;
var nummerB = 6;
var antwoord = nummerA * nummerB;`,
    lang: 'nl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Code Block met een codevoorbeeld voor Nederlandstalige lezers.',
      },
    },
  },
};

export const Engels: Story = {
  name: 'Code met Engelse taal',
  args: {
    children: `// In this example we'll calculate 7 times 6.
var numberA = 7;
var numberB = 6;
var answer = numberA * numberB;`,
    lang: 'en',
  },
  parameters: {
    docs: {
      description: {
        story: 'Een Code Block met een codevoorbeeld voor Engelstalig lezers.',
      },
    },
  },
};

export const ArabicContext: Story = {
  name: 'Code Block in Engelse taal geplaatst binnen Arabische rechts-naar-links tekst',
  args: {
    children: `var numberA = 7;
var numberB = 6;
var answer = numberA * numberB;`,
    lang: 'en',
  },
  decorators: [
    (Story) => (
      <div lang="ar" dir="rtl">
        <Paragraph>في المثال التالي سوف نحسب 7 مرات 6</Paragraph>
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Een Code Block met een codevoorbeeld voor Engelstalig lezers.',
      },
    },
  },
};
