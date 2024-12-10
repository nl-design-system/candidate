import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/code-block-react/package.json';
import { CodeBlock } from '../../components-react/code-block-react/src/css';
import { Paragraph } from '../../components-react/paragraph-react/src/paragraph';

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
  title: 'Componenten/Code Block/Voldoet niet',
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GeenVisueelOnderscheid: Story = {
  name: 'Geen visueel onderscheid',
  args: {
    children: `import { CodeBlock } from '@nl-design-system-candidate/code-block-react';`,
    style: {
      '--nl-code-block-font-family': 'Times New Roman',
      '--nl-paragraph-font-family': 'Times New Roman',
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Paragraph>Als de de Code Block component in React wilt gebruiken, dan kan dat als volgt:</Paragraph>
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Het is belangrijk dat de code block visueel onderscheidbaar is van andere content. Je moet tenminste een ander lettertype gebruiken, of bijvoorbeeld een achtergrondkleur met voldoende contrast (3:1) ten opzichte van de parent component.',
      },
    },
  },
};
