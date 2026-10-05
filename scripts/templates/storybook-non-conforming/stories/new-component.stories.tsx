import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/new-component-css/src/new-component.scss';
import packageJSON from '../../components-react/new-component-react/package.json';
import { NewComponent as NewComponentComponent } from '../../components-react/new-component-react/src/new-component';
import componentMarkdown from '../../docs/new-component-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: NewComponentComponent,
  decorators: [ExampleBodyTextDecorator],
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
        url: 'https://nldesignsystem.nl/new-component',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/New Component',
} satisfies Meta<typeof NewComponentComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NewComponent: Story = {
  name: 'New Component',
  decorators: ExampleBodyTextDecorator,
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  args: {
    children: 'New Component',
  },
  parameters: {
    docs: {
      description: {
        story: 'New Component',
      },
    },
    status: { type: [] },
  },
};
