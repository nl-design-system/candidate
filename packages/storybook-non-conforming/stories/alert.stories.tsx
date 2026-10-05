import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/alert-css/src/alert.scss';
import packageJSON from '../../components-react/alert-react/package.json';
import { Alert as AlertComponent } from '../../components-react/alert-react/src/alert';
import componentMarkdown from '../../docs/alert-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: AlertComponent,
  decorators: [ExampleBodyTextDecorator],
  parameters: {
    // TODO: When component is implemented, enable Chromatic
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        component: componentMarkdown,
      },
      source: {
        type: 'dynamic',
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
} satisfies Meta<typeof AlertComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  name: 'Alert',
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
        story: 'Alert',
      },
    },
    status: { type: [] },
  },
};
