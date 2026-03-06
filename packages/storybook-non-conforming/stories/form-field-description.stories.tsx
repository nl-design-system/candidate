import type { Meta } from '@storybook/react-vite';
import componentMarkdown from '../../docs/form-field-description-docs/docs/component.md?raw';
import '../../components-css/form-field-description-css/src/form-field-description.scss';
import packageJSON from '../../components-react/form-field-description-react/package.json';
import { FormFieldDescription } from '../../components-react/form-field-description-react/src/form-field-description';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: FormFieldDescription,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/form-field-description',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Form Field Description',
} satisfies Meta<typeof FormFieldDescription>;

export default meta;
