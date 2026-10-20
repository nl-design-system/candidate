import { merge } from 'lodash-es';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import packageJSON from '../../components-react/alert-react/package.json';
import { Alert as AlertComponent } from '../../components-react/alert-react/src/alert';
import acceptanceCriteria from '../../docs/alert-docs/docs/acceptance-criteria.md?raw';
import componentMarkdown from '../../docs/alert-docs/docs/component.md?raw';
import reactMeta from '../../docs/alert-docs/stories/alert.react.meta';
import tokens from '../../tokens/alert-tokens/tokens.json';
import '../../components-css/alert-css/src/alert.scss';
import '../../components-css/alert-css/src/test.scss';

const AlertDecorator: Decorator = (Story) => (
  <div className="test">
    <Story />
  </div>
);

const meta = {
  ...merge({
    ...reactMeta,

    args: {
      // Vul aan door developer
    },
    component: AlertComponent,
    decorators: [AlertDecorator],
    globals: {
      dir: 'ltr',
      lang: 'nl',
    },
    parameters: {
      // TODO: When component is implemented, enable Chromatic
      chromatic: { disableSnapshot: true },
      acceptanceCriteria,
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
      testResult: {
        notApplicable: [
          // Vul aan door toegankelijkheidsexpert
        ],
        notTested: [
          // Vul aan door toegankelijkheidsexpert
        ],
      },
      tokens,
    },
  }),
  title: 'Componenten/Alert',
} satisfies Meta<typeof AlertComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  name: 'Alert',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Alert',
      },
    },
    testResult: {
      date: '2025-12-23',
      notTested: [
        // Vul aan door toegankelijkheidsexpert
      ],
      pass: [
        // Vul aan door toegankelijkheidsexpert
      ],
    },
  },
};
