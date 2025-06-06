import type { Meta, StoryObj } from '@storybook/react-vite';
import packageJSON from '../../../components-react/code-block-react/package.json';
import { CodeBlock } from '../../../components-react/code-block-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: CodeBlock,
  parameters: {
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
  },
  title: 'Componenten/Code Block',
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GeenVisueelOnderscheid: Story = {
  name: 'Fout: Geen visueel onderscheid',
  args: {
    children: `import { CodeBlock } from '@nl-design-system-candidate/code-block-react';`,
    style: {
      '--nl-code-block-background-color': 'transparent',
      '--nl-code-block-color': 'var(--nl-paragraph-color)',
      '--nl-code-block-font-family': 'var(--nl-paragraph-font-family)',
      '--nl-code-block-font-size': 'var(--nl-paragraph-font-size)',
      '--nl-code-block-line-height': 'var(--nl-paragraph-line-height)',
      '--nl-code-block-padding-block': '0',
      '--nl-code-block-padding-inline': '0',
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Paragraph>Als je de Code Block component in React wilt gebruiken, dan kan dat als volgt:</Paragraph>
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Het is belangrijk dat de Code Block visueel onderscheidbaar is van andere content. Je moet tenminste een ander lettertype gebruiken, of bijvoorbeeld een achtergrondkleur met voldoende contrast (3:1) ten opzichte van de parent component.',
      },
    },
  },
};
