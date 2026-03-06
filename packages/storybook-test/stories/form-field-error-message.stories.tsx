import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta } from '@storybook/react-vite';
import '../../components-css/form-field-error-message-css/src/form-field-error-message.scss';
import packageJSON from '../../components-react/form-field-error-message-react/package.json';
import { FormFieldErrorMessage } from '../../components-react/form-field-error-message-react/src/form-field-error-message';
import componentMarkdown from '../../docs/form-field-error-message-docs/docs/component.md?raw';
import tokens from '../../tokens/form-field-error-message-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: FormFieldErrorMessage,
  decorators: ExampleBodyTextDecorator,
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
    testResult: {
      notApplicable: [
        // Vul aan door toegankelijkheidsexpert
      ],
      notTested: [
        // Vul aan door toegankelijkheidsexpert
      ],
      pass: [],
    },
    tokens,
  },
  title: 'Componenten/Form Field Error Message',
} satisfies Meta<typeof FormFieldErrorMessage>;

export default meta;
