import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta } from '@storybook/react-vite';
import '../../components-css/new-component-css/src/new-component.scss';
import packageJSON from '../../components-react/new-component-react/package.json';
import { NewComponent } from '../../components-react/new-component-react/src/new-component';
import componentMarkdown from '../../docs/new-component-docs/docs/component.md?raw';
import tokens from '../../tokens/new-component-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: NewComponent,
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
      pass: [],
    },
    tokens,
  },
  title: 'Componenten/New Component',
} satisfies Meta<typeof NewComponent>;

export default meta;
