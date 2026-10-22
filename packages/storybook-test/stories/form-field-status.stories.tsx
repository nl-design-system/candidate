import { merge } from 'lodash-es';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import packageJSON from '../../components-react/form-field-status-react/package.json';
import { FormFieldStatus as FormFieldStatusComponent } from '../../components-react/form-field-status-react/src/form-field-status';
import acceptanceCriteria from '../../docs/form-field-status-docs/docs/acceptance-criteria.md?raw';
import componentMarkdown from '../../docs/form-field-status-docs/docs/component.md?raw';
import reactMeta from '../../docs/form-field-status-docs/stories/form-field-status.react.meta';
import tokens from '../../tokens/form-field-status-tokens/tokens.json';
import '../../components-css/form-field-status-css/src/form-field-status.scss';
import '../../components-css/form-field-status-css/src/test.scss';

const FormFieldStatusDecorator: Decorator = (Story) => (
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
    decorators: [FormFieldStatusDecorator],
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
          url: 'https://nldesignsystem.nl/form-field-status',
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
  title: 'Componenten/Form Field Status',
} satisfies Meta<typeof FormFieldStatusComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormFieldStatus: Story = {
  name: 'Form Field Status',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Form Field Status',
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
