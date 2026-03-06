import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta } from '@storybook/react-vite';
import '../../components-css/ordered-list-css/src/ordered-list.scss';
import packageJSON from '../../components-react/ordered-list-react/package.json';
import { OrderedList } from '../../components-react/ordered-list-react/src/ordered-list';
import componentMarkdown from '../../docs/ordered-list-docs/docs/component.md?raw';
import tokens from '../../tokens/ordered-list-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: OrderedList,
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
        url: 'https://nldesignsystem.nl/ordered-list',
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
  title: 'Componenten/Ordered List',
} satisfies Meta<typeof OrderedList>;

export default meta;
