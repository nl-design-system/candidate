import { merge } from 'lodash-es';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/form-field-label-css/src/form-field-label.scss';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel as FormFieldLabelComponent } from '../../components-react/form-field-label-react/src/form-field-label';
import componentMarkdown from '../../docs/form-field-label-docs/docs/component.md?raw';
import reactMeta from '../../docs/form-field-label-docs/stories/form-field-label.react.meta';

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
          url: 'https://nldesignsystem.nl/form-field-label',
        },
        {
          name: 'Open op GitHub',
          url: packageJSON.homepage,
        },
      ],
    },
  }),
  title: 'Componenten/Form Field Label',
} satisfies Meta<typeof FormFieldLabelComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormFieldLabel: Story = {
  name: 'Form Field Label',
  args: {
    children: 'Form Field Label',
  },
  parameters: {
    docs: {
      description: {
        story: 'Form Field Label',
      },
    },
    status: { type: [] },
  },
};
