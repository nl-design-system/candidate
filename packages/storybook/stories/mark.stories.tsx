import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/mark-react/package.json';
import { Mark } from '../../components-react/mark-react/src/css';
import { Paragraph } from '../../components-react/paragraph-react/src/css';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
  },
  component: Mark,
  parameters: {
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
  title: 'Mark',
} satisfies Meta<typeof Mark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Mark',
  args: {
    children: 'Gemarkeerde tekst',
  },
};

export const MarkInParagraph: Story = {
  name: 'Mark in een Parargraph',
  render() {
    return (
      <Paragraph>
        In deze paragraaf staat een stukje <Mark>gemarkeerde tekst</Mark>.
      </Paragraph>
    );
  },
};
