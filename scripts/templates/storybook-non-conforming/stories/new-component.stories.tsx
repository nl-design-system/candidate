import type { Meta } from '@storybook/react-vite';
import componentMarkdown from '../../docs/new-component-docs/docs/component.md?raw';
import '../../components-css/new-component-css/src/new-component.scss';
import packageJSON from '../../components-react/new-component-react/package.json';
import { NewComponent } from '../../components-react/new-component-react/src/new-component';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: NewComponent,
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
  },
  title: 'Componenten/New Component',
} satisfies Meta<typeof NewComponent>;

export default meta;
