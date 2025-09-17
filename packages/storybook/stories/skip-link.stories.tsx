import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/skip-link-css/src/skip-link.scss';
import packageJSON from '../../components-react/skip-link-react/package.json';
import { SkipLink } from '../../components-react/skip-link-react/src/skip-link';

const meta = {
  argTypes: {
    children: { table: { category: 'API' }, type: 'string' },
    href: { table: { category: 'API' } },
    target: {
      control: { labels: { undefined: '(undefined)' }, type: 'select' },
      options: [undefined, '_blank', '_parent', '_self', '_top'],
      table: { category: 'API' },
    },
  },
  component: SkipLink,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/skip-link',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Skip Link',
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Skip Link',
  args: {
    children: 'Naar de inhoud',
    href: '#inhoud',
  },
};
