import type { Meta } from '@storybook/react-vite';
import componentMarkdown from '../../docs/form-field-error-message-docs/docs/component.md?raw';
import '../../components-css/form-field-error-message-css/src/form-field-error-message.scss';
import packageJSON from '../../components-react/form-field-error-message-react/package.json';
import { FormFieldErrorMessage } from '../../components-react/form-field-error-message-react/src/form-field-error-message';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: FormFieldErrorMessage,
  parameters: {
    docs: {
      description: {
        component: componentMarkdown,
      },
    },
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/form-field-error-message',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Form Field Error Message',
} satisfies Meta<typeof FormFieldErrorMessage>;

export default meta;
