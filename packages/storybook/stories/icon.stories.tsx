import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/icon-css/src/icon.scss';
import packageJSON from '../../components-react/icon-react/package.json';
import { Icon } from '../../components-react/icon-react/src/icon';
import '../../components-css/icon-css/src/icon.scss';

const meta = {
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <path d="m10 16.5 2-3 2 3m-2-3v-2l3-1m-6 0 3 1" />
        <circle cx="12" cy="7.5" r=".5" fill="currentcolor" />
      </svg>
    ),
  },
  argTypes: {
    appearance: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'cap', 'em', 'ex', 'lh'],
      table: { category: 'API' },
    },
    'aria-label': { table: { category: 'API' }, type: 'string' },
    'aria-labelledby': { table: { category: 'API' }, type: 'string' },
    // Hide children as it's a React component which cannot be displayed nicely in the Storybook UI
    children: { table: { disable: true } },
    className: { table: { category: 'API' }, type: 'string' },
    role: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, 'img'],
      table: { category: 'API' },
    },
  },
  component: Icon,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/icon',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Icon',
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
