import { merge } from 'lodash-es';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/form-field-status-css/src/form-field-status.scss';
import packageJSON from '../../components-react/form-field-status-react/package.json';
import { FormFieldStatus as FormFieldStatusComponent } from '../../components-react/form-field-status-react/src/form-field-status';
import componentMarkdown from '../../docs/form-field-status-docs/docs/component.md?raw';
import reactMeta from '../../docs/form-field-status-docs/stories/form-field-status.react.meta';

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
          url: 'https://nldesignsystem.nl/form-field-status',
        },
        {
          name: 'Open op GitHub',
          url: packageJSON.homepage,
        },
      ],
    },
  }),
  title: 'Componenten/Form Field Status',
} satisfies Meta<typeof FormFieldStatusComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormFieldStatus: Story = {
  name: 'Form Field Status',
  args: {
    children: 'Form Field Status',
  },
  parameters: {
    docs: {
      description: {
        story: 'Form Field Status',
      },
    },
    status: { type: [] },
  },
};
