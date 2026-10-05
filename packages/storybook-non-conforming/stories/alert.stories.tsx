import { merge } from 'lodash-es';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/alert-css/src/alert.scss';
import packageJSON from '../../components-react/alert-react/package.json';
import { Alert as AlertComponent } from '../../components-react/alert-react/src/alert';
import componentMarkdown from '../../docs/alert-docs/docs/component.md?raw';
import reactMeta from '../../docs/alert-docs/stories/alert.react.meta';

const meta = {
  ...merge({
    ...reactMeta,

    args: {
      // Vul aan door developer
    },
    decorators: [ExampleBodyTextDecorator],
    globals: {
      dir: 'ltr',
      lang: 'nl',
    },
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
  }),
  title: 'Componenten/Alert',
} satisfies Meta<typeof AlertComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  name: 'Alert',
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
