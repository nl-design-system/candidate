import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../../components-react/heading-react/package.json';
import { Heading } from '../../../components-react/heading-react/src/css';
import componentMarkdown from '../../../docs/heading-docs/docs/component.md?raw';

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
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
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
  title: 'Componenten/Heading',
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingLevel1: Story = {
  name: 'Heading 1',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 1,
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevel1SmallViewport: Story = {
  name: 'Heading 1 (small viewport)',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 1,
  },
  globals: {
    viewport: { value: 'phone' },
    zoom: 1,
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevel1Zoom400: Story = {
  name: 'Heading 1 (zoom 400%)',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 1,
  },
  globals: {
    viewport: { value: undefined },
    zoom: 4,
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevel1Arabic: Story = {
  name: 'Heading 1 (Arabic)',
  args: {
    children: 'مثال',
    level: 1,
  },
  globals: {
    lang: 'ar',
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevel1German: Story = {
  name: 'Heading 1 (German)',
  args: {
    children: 'Rechtsschutzversicherungsgesellschaften',
    level: 1,
  },
  globals: {
    lang: 'de',
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevel2: Story = {
  name: 'Heading 2',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 2,
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevel3: Story = {
  name: 'Heading 3',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 3,
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevel4: Story = {
  name: 'Heading 4',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 4,
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevel5: Story = {
  name: 'Heading 5',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 5,
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevel6: Story = {
  name: 'Heading 6',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 6,
  },
  parameters: {
    status: { type: [] },
  },
};

export const HeadingLevelColors: Story = {
  name: 'Heading lettertypes en kleuren',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 6,
  },
  parameters: {
    docs: {
      description: {
        story: `Elk heading niveau moet een onderscheidend lettertype en kleur kunnen hebben, door middel van design tokens.`,
      },
    },
  },
  render: ({ children = 'Knappe Koppen Van Droom naar Realiteit' }) => (
    <div
      style={{
        '--nl-heading-level-1-color': 'midnightblue',
        '--nl-heading-level-1-font-family': 'serif',
        '--nl-heading-level-2-color': 'maroon',
        '--nl-heading-level-2-font-family': 'sans-serif',
        '--nl-heading-level-3-color': 'green',
        '--nl-heading-level-3-font-family': 'serif',
        '--nl-heading-level-4-color': 'royalblue',
        '--nl-heading-level-4-font-family': 'sans-serif',
        '--nl-heading-level-5-color': 'rebeccapurple',
        '--nl-heading-level-5-font-family': 'serif',
        '--nl-heading-level-6-color': 'black',
        '--nl-heading-level-6-font-family': 'sans-serif',
        backgroundColor: 'white',
      }}
    >
      <Heading level={1}>{children}</Heading>
      <Heading level={2}>{children}</Heading>
      <Heading level={3}>{children}</Heading>
      <Heading level={4}>{children}</Heading>
      <Heading level={5}>{children}</Heading>
      <Heading level={6}>{children}</Heading>
    </div>
  ),
};

export const HeadingLevelSize: Story = {
  name: 'Heading lettergrootte en line-height',
  args: {
    children: 'Knappe Koppen Van Droom naar Realiteit',
    level: 6,
  },
  parameters: {
    docs: {
      description: {
        story: `Elk heading niveau moet een eigen font-size en bijpassende line-height kunnen hebben. Vaak geldt: hoe groter de font-size, hoe kleiner de line-height.`,
      },
    },
  },
  render: ({ children = 'Knappe Koppen Van Droom naar Realiteit' }) => (
    <div
      style={{
        '--nl-heading-level-1-font-size': '4em',
        '--nl-heading-level-1-line-height': '1.3',
        '--nl-heading-level-2-font-size': '3em',
        '--nl-heading-level-2-line-height': '1.4',
        '--nl-heading-level-3-font-size': '2em',
        '--nl-heading-level-3-line-height': '1.5',
        '--nl-heading-level-4-font-size': '1.6em',
        '--nl-heading-level-4-line-height': '1.6',
        '--nl-heading-level-5-font-size': '1.4em',
        '--nl-heading-level-5-line-height': '1.7',
        '--nl-heading-level-6-font-size': '1.2em',
        '--nl-heading-level-6-line-height': '1.8',
      }}
    >
      <Heading level={1}>{children}</Heading>
      <Heading level={2}>{children}</Heading>
      <Heading level={3}>{children}</Heading>
      <Heading level={4}>{children}</Heading>
      <Heading level={5}>{children}</Heading>
      <Heading level={6}>{children}</Heading>
    </div>
  ),
};
