import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/code-block-react/package.json';
import { CodeBlock } from '../../components-react/code-block-react/src/css';

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

export const Default: Story = {
  name: 'Code Block',
  args: {
    children: `import { CodeBlock } from '@nl-design-system-candidate/code-block-react';`,
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
    children: `class ProjectContractChargingPeriodProjectAccountReferenceVM extends Abstract ProjectContractChargingPeriodProjectAccountReferenceVM implements ProjectContractChargingPeriodProjectAccountReferenceVMInterface {
    /* todo */
}`,
  },
  parameters: {
    docs: {
      description: {
        story:
          'De volledige inhoud van de code block moet leesbaar zijn, ook als de content heel lange regels bevat. De code block horizontaal moet kunnen scrollen.',
      },
    },
  },
};

export const GeenVisueelOnderscheid: Story = {
  name: 'Fout voorbeeld! Geen visueel onderscheid',
  args: {
    children: `import { CodeBlock } from '@nl-design-system-candidate/code-block-react';`,
    style: {
      '--nl-code-block-font-family': 'Times New Roman',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Het is belangrijk dat de code block visueel onderscheidbaar is van andere content. Je moet tenminste een ander lettertype gebruiken, of bijvoorbeeld een achtergrondkleur met voldoende contrast (3:1) ten opzichte van de parent component.',
      },
    },
  },
};
