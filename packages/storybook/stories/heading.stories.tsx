import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/heading-react/package.json';
import { Heading } from '../../components-react/heading-react/src/css';

const meta = {
  argTypes: {
    appearance: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6'],
      table: { category: 'API' },
    },
    children: { table: { category: 'API' } },
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: { category: 'API' },
    },
  },
  component: Heading,
  parameters: {
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=153-1039',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Heading',
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingLevel1: Story = {
  name: 'Heading level 1',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 1,
  },
};

export const HeadingLevel2: Story = {
  name: 'Heading level 2',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 2,
  },
};

export const HeadingLevel3: Story = {
  name: 'Heading level 3',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 3,
  },
};

export const HeadingLevel4: Story = {
  name: 'Heading level 4',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 4,
  },
};

export const HeadingLevel5: Story = {
  name: 'Heading level 5',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 5,
  },
};

export const HeadingLevel6: Story = {
  name: 'Heading level 6',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 6,
  },
};
