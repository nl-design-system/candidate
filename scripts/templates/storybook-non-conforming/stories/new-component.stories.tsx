import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/new-component-css/src/new-component.scss';
import packageJSON from '../../components-react/new-component-react/package.json';
import { NewComponent } from '../../components-react/new-component-react/src/new-component';
import componentMarkdown from '../../docs/new-component-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: NewComponent,
  decorators: [ExampleBodyTextDecorator],
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

type Story = StoryObj<typeof meta>;

export const SomeStory: Story = {
  name: 'Some Story',
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
        story: `Some Description`,
      },
    },
    status: { type: [] },
  },
};
