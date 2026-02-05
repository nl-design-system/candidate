import type { Meta } from '@storybook/react-vite';
import componentMarkdown from '../../docs/form-field-label-docs/docs/component.md?raw';
import '../../components-css/form-field-label-css/src/form-field-label.scss';
import packageJSON from '../../components-react/form-field-label-react/package.json';
import { FormFieldLabel } from '../../components-react/form-field-label-react/src/form-field-label';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: FormFieldLabel,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
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
  title: 'Componenten/Form Field Label',
} satisfies Meta<typeof FormFieldLabel>;

export default meta;
