import { merge } from 'lodash-es';
import { ExampleBodyTextDecorator } from '@nl-design-system-candidate/storybook-shared/src/ExampleBodyTextDecorator';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/note-css/src/note.scss';
import packageJSON from '../../components-react/note-react/package.json';
import { Note as NoteComponent } from '../../components-react/note-react/src/note';
import componentMarkdown from '../../docs/note-docs/docs/component.md?raw';
import reactMeta from '../../docs/note-docs/stories/note.react.meta';

const meta = {
  ...merge({
    ...reactMeta,

    args: {
      // Vul aan door developer
    },
    decorators: [ExampleBodyTextDecorator],
    globals: {
      dir: 'ltr',
      lang: 'nl',
    },
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
          url: 'https://nldesignsystem.nl/note',
        },
        {
          name: 'Open op GitHub',
          url: packageJSON.homepage,
        },
      ],
    },
  }),
  title: 'Componenten/Note',
} satisfies Meta<typeof NoteComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Note: Story = {
  name: 'Note',
  args: {
    children: 'Note',
  },
  parameters: {
    docs: {
      description: {
        story: 'Note',
      },
    },
    status: { type: [] },
  },
};
