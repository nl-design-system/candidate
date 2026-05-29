import { merge } from 'lodash-es';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import packageJSON from '../../components-react/alert-react/package.json';
import {
  Alert as AlertComponent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type AlertProps,
} from '../../components-react/alert-react/src/alert';
import acceptanceCriteria from '../../docs/alert-docs/docs/acceptance-criteria.md?raw';
import componentMarkdown from '../../docs/alert-docs/docs/component.md?raw';
import reactMeta from '../../docs/alert-docs/stories/alert.react.meta';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as AlertStories from '../../docs/alert-docs/stories/alert.stories';
import tokens from '../../tokens/alert-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert
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
    ...{
      args: {
        // Vul aan door developer
      },
      component: AlertComponent,
      decorators: [AlertDecorator],
      globals: {
        dir: 'ltr',
        lang: 'nl',
        title: 'Alert van de dag',
      },
      parameters: {
        acceptanceCriteria,
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
    },
  }),
  title: 'Componenten/Alert',
} satisfies Meta<typeof AlertComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SomeStory: Story = {
  name: 'Some Story',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Some Story`,
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
