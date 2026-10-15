import { merge } from 'lodash-es';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import packageJSON from '../../components-react/text-area-react/package.json';
import { TextArea as TextAreaComponent } from '../../components-react/text-area-react/src/text-area';
import acceptanceCriteria from '../../docs/text-area-docs/docs/acceptance-criteria.md?raw';
import componentMarkdown from '../../docs/text-area-docs/docs/component.md?raw';
import reactMeta from '../../docs/text-area-docs/stories/text-area.react.meta';
import tokens from '../../tokens/text-area-tokens/tokens.json';
import '../../components-css/text-area-css/src/text-area.scss';
import '../../components-css/text-area-css/src/test.scss';

const TextAreaDecorator: Decorator = (Story) => (
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
    decorators: [TextAreaDecorator],
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
          url: 'https://nldesignsystem.nl/text-area',
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
  title: 'Componenten/Text Area',
} satisfies Meta<typeof TextAreaComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
  name: 'Text Area',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Text Area',
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
