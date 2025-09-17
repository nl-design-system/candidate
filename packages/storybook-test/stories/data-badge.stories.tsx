import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/data-badge-css/src/data-badge.scss';
import packageJSON from '../../components-react/data-badge-react/package.json';
import { DataBadge } from '../../components-react/data-badge-react/src/data-badge';
import componentMarkdown from '../../docs/data-badge-docs/docs/component.md?raw';
import tokens from '../../tokens/data-badge-tokens/tokens.json';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    dateTime: { if: { arg: 'value', exists: false }, table: { category: 'API' } },
    value: { if: { arg: 'dateTime', exists: false }, table: { category: 'API' } },
  },
  component: DataBadge,
  decorators: [ExampleBodyTextDecorator],
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/data-badge',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
    tokens,
  },
  title: 'Componenten/Data Badge',
} satisfies Meta<typeof DataBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Data Badge',
  args: {
    children: 'Bevoegd gezag: Gemeente',
  },
  decorators: [
    (Story) => (
      <>
        <Heading level={1}>Zoekresultaat voor “zonnepaneel”</Heading>
        <Paragraph>
          Geselecteerde filters: <Story />
        </Paragraph>
        <Paragraph>0 resultaten.</Paragraph>
      </>
    ),
  ],
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Zoekresultaat voor "zonnepaneel"',
  },
  parameters: {
    status: { type: [] },
  },
};

export const DataBadgeWithValue: Story = {
  name: 'Data Badge met "value"',
  args: {
    children: 'Succescriterium 1.3.1',
    value: 'https://www.w3.org/TR/WCAG22/#info-and-relationships',
  },
  decorators: [
    (Story) => (
      <>
        <Heading level={1}>Zoekresultaat voor “button”</Heading>
        <Paragraph>
          Geselecteerde filters: <Story />
        </Paragraph>
        <Paragraph>42 resultaten.</Paragraph>
      </>
    ),
  ],
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Zoekresultaat voor "button"',
  },
  parameters: {
    status: { type: [] },
  },
};

export const DataBadgeWithDateTime: Story = {
  name: 'Data Badge met "dateTime"',
  args: {
    children: 'Dinsdag 19 januari 2038 om 03:14:08',
    dateTime: '2038-01-19T03:14:08',
  },
  decorators: [
    (Story) => (
      <>
        <Heading level={1}>Zoekresultaat voor “jaar 2000 probleem”</Heading>
        <Paragraph>
          Toon resultaten voor de datum: <Story />
        </Paragraph>
        <Paragraph>0 resultaten.</Paragraph>
      </>
    ),
  ],
  globals: {
    dir: 'ltr',
    lang: 'nl',
    title: 'Zoekresultaat voor “jaar 2000 probleem”',
  },
  parameters: {
    status: { type: [] },
  },
};

export const DataBadgeWithDateTimeEnglish: Story = {
  name: 'Data Badge met "dateTime" in het Engels',
  args: {
    children: new Intl.DateTimeFormat('en', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'UTC',
    }).format(new Date('2038-01-19T03:14:08Z')),
    dateTime: '2038-01-19T03:14:08Z',
  },
  decorators: [
    (Story) => (
      <>
        <Heading level={1}>Search results for “year 2000 problem”</Heading>
        <Paragraph>
          Showing results before date: <Story />
        </Paragraph>
        <Paragraph>0 results.</Paragraph>
      </>
    ),
  ],
  globals: {
    dir: 'ltr',
    lang: 'en',
    title: 'Search results for “year 2000 problem”',
  },
  parameters: {
    status: { type: [] },
  },
};
