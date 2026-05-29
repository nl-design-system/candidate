import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/alert-css/src/alert.scss';
import packageJSON from '../../components-react/alert-react/package.json';
import { Alert } from '../../components-react/alert-react/src/alert';
import componentMarkdown from '../../docs/alert-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: Alert,
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
        url: 'https://nldesignsystem.nl/alert',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Alert',
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SomeStory: Story = {
  name: 'Some Story',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'Alert',
  },
  parameters: {
    docs: {
      description: {
        story: `Some Description`,
      },
    },
    status: { type: [] },
  },
};
