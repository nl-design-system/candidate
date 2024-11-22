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
