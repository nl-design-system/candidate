import type { Meta, StoryObj } from '@storybook/react-vite';
import packageJSON from '../../components-react/data-badge-react/package.json';
import { DataBadge } from '../../components-react/data-badge-react/src/css';

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
  name: 'Data Badge',
  args: {
    children: '42',
  },
};

export const DataBadgeWithValue: Story = {
  name: 'Data Badge met "value"',
  args: {
    children: '42',
    value: '42',
  },
};

export const DataBadgeWithDateTime: Story = {
  name: 'Data Badge met "dateTime"',
  args: {
    children: 'Donderdag 1 januari 1970 om 01:00:00',
    dateTime: '1970-01-01T00:00:00+01:00',
  },
};
