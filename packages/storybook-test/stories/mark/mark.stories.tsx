import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../../components-react/mark-react/package.json';
import { Mark } from '../../../components-react/mark-react/src/css';
import { Paragraph } from '../../../components-react/paragraph-react/src/css';
import componentMarkdown from '../../../docs/mark-docs/docs/component.md?raw';
import tokens from '../../../tokens/mark-tokens/tokens.json';

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
    tokens,
  },
  title: 'Componenten/Mark',
} satisfies Meta<typeof Mark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Mark',
  args: {
    children: 'Gemarkeerde tekst',
  },
  parameters: {
    status: { type: [] },
  },
};

export const MarkInParagraph: Story = {
  name: 'Mark in een Paragraph',
  args: {
    children: 'gemarkeerde tekst',
  },
  parameters: {
    status: { type: [] },
  },
  render({ children }) {
    return (
      <Paragraph>
        In deze paragraaf staat een stukje <Mark>{children}</Mark>.
      </Paragraph>
    );
  },
};
