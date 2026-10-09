import { merge } from 'lodash-es';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import packageJSON from '../../components-react/new-component-react/package.json';
import { NewComponent as NewComponentComponent } from '../../components-react/new-component-react/src/new-component';
import acceptanceCriteria from '../../docs/new-component-docs/docs/acceptance-criteria.md?raw';
import componentMarkdown from '../../docs/new-component-docs/docs/component.md?raw';
import reactMeta from '../../docs/new-component-docs/stories/new-component.react.meta';
import tokens from '../../tokens/new-component-tokens/tokens.json';
import '../../components-css/new-component-css/src/new-component.scss';
import '../../components-css/new-component-css/src/test.scss';

const NewComponentDecorator: Decorator = (Story) => (
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
    decorators: [NewComponentDecorator],
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
          url: 'https://nldesignsystem.nl/new-component',
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
  title: 'Componenten/New Component',
} satisfies Meta<typeof NewComponentComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NewComponent: Story = {
  name: 'New Component',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'New Component',
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
