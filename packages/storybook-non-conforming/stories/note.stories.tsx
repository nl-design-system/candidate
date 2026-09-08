import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/note-css/src/note.scss';
import packageJSON from '../../components-react/note-react/package.json';
import { Note } from '../../components-react/note-react/src/note';
import componentMarkdown from '../../docs/note-docs/docs/component.md?raw';

const meta = {
  argTypes: {
    // Vul aan door developer
  },
  component: Note,
  decorators: [ExampleBodyTextDecorator],
  parameters: {
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
        url: 'https://nldesignsystem.nl/note',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'Componenten/Note',
} satisfies Meta<typeof Note>;

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
    children: 'Note',
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
