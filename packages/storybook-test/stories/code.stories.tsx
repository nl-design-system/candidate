import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/code-react/package.json';
import { Code } from '../../components-react/code-react/src/css';

const meta = {
  argTypes: {
    children: { control: 'text', table: { category: 'API' } },
  },
  component: Code,
  parameters: {
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

export const Default: Story = {
  name: 'Code',
  args: {
    children: `import { Code } from '@nl-design-system-candidate/code-react';`,
  },
};

export const Arabic: Story = {
  name: 'Arabic (Qalb)',
  args: {
    children: `(قول "مرحبا يا عالم)`,
  },
  render: (args) => (
    <div dir="rtl" lang="ar">
      <Code>{args.children}</Code>
    </div>
  ),
};

export const Chinese: Story = {
  name: 'Chinese (Traditional)',
  args: {
    children: `// 這是一個很長的中文程式碼註釋，可以延伸到第二行，而且還有一些很長的單字`,
    lang: 'ch',
  },
};

export const Japanese: Story = {
  name: 'Japanese',

  args: {
    children: `// これは非常に長い日本語のコードコメントで、2行目にもなり、かなり長い単語も含まれています。`,
    lang: 'jp',
  },
};

export const German: Story = {
  name: 'German',
  args: {
    children: `// Dies ist ein sehr langer deutscher Codekommentar, der in eine zweite Zeile übergehen könnte und auch einige ziemlich lange Wörter enthält`,
    lang: 'de',
  },
};
