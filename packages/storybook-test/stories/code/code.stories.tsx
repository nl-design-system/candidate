import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../../components-react/code-react/package.json';
import { Code } from '../../../components-react/code-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/paragraph';
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
    children: `aria-required`,
    lang: 'nl',
  },
  decorators: ExampleBodyTextDecorator,
  parameters: {
    status: { type: [] },
  },
  render: ({ children }) => (
    <Paragraph>
      Om specifiek aan hulptechnologieën te communiceren dat een veld verplicht is, kan <Code>{children}</Code>
      worden gebruikt.
    </Paragraph>
  ),
};
