import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta } from '@storybook/react-vite';
import '../../components-css/unordered-list-css/src/unordered-list.scss';
import packageJSON from '../../components-react/unordered-list-react/package.json';
import { UnorderedList } from '../../components-react/unordered-list-react/src/unordered-list';
import componentMarkdown from '../../docs/unordered-list-docs/docs/component.md?raw';
import tokens from '../../tokens/unordered-list-tokens/tokens.json';
// import { } from '../src/WcagTests'; // Vul aan door toegankelijkheidsexpert

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: UnorderedList,
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
        url: 'https://nldesignsystem.nl/unordered-list',
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
  title: 'Componenten/Unordered List',
} satisfies Meta<typeof UnorderedList>;

export default meta;
