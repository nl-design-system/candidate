import type { Meta, StoryObj } from '@storybook/react';
import packageJSON from '../../components-react/data-badge-react/package.json';
import { DataBadge } from '../../components-react/data-badge-react/src/css';

const StoryDate = new Date();
const ISODate = StoryDate.toISOString();

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    dateTime: { if: { arg: 'value', exists: false }, table: { category: 'API' } },
    value: { if: { arg: 'dateTime', exists: false }, table: { category: 'API' } },
  },
  component: DataBadge,
  parameters: {
    externalLinks: [
      {
        name: 'Open in Figma',
        url: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=13781-18012',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Data Badge',
} satisfies Meta<typeof DataBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    children: 'Onderwijs',
    lang: 'nl',
  },
};

export const DefaultTranslationEn: Story = {
  name: 'Default vertaling Engels',
  args: {
    children: 'Education',
    lang: 'en',
  },
};

export const DefaultTranslationGer: Story = {
  name: 'Default vertaling Duits',
  args: {
    children: 'Ausbildung',
    lang: 'de',
  },
};

export const RightToLeft: Story = {
  name: 'Right To Left',
  args: {
    children: 'حدد خياراً',
    dir: 'rtl',
  },
};

export const DateNL: Story = {
  name: 'Datumweergave Nederland',
  args: {
    children: StoryDate.toLocaleDateString('nl-Nl'),
    dateTime: ISODate,
  },
};

export const DateUS: Story = {
  name: 'Datumweergave Verenigde Staten',
  args: {
    children: StoryDate.toLocaleDateString('us-Us'),
    dateTime: ISODate,
  },
};

export const TimeNL: Story = {
  name: 'Tijdweergave Nederland',
  args: {
    children: StoryDate.toLocaleTimeString('nl-Nl'),
    dateTime: ISODate,
  },
};

export const TimeUS: Story = {
  name: 'Tijdweergave Verenigde Staten',
  args: {
    children: StoryDate.toLocaleTimeString('us-Us'),
    dateTime: ISODate,
  },
};

export const shortDateNl: Story = {
  name: 'Shortdate Nederlands',
  args: {
    children: 'vrijdag 18 augustus',
    dateTime: '2023-08-18',
  },
};

export const shortDateEn: Story = {
  name: 'Shortdate Engels',
  args: {
    children: 'Friday 18th August',
    dateTime: '2023-08-18',
  },
};

export const MachineReadableDuration: Story = {
  name: 'Machine Readable Duration',
  args: {
    children: '1 uur en 39 minuten',
    dateTime: ISODate,
  },
};

export const EdgeCaseNl: Story = {
  name: 'Edge Case Nederlands',
  args: {
    children: 'Samenlevingscontract',
    lang: 'nl',
  },
};

export const EdgeCaseGer: Story = {
  name: 'Edge Case Duits',
  args: {
    children: 'Lebenspartnerschaftsvertrag',
    lang: 'de',
  },
};
