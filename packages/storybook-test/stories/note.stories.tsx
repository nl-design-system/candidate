import { merge } from 'lodash-es';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import packageJSON from '../../components-react/note-react/package.json';
import { Note as NoteComponent } from '../../components-react/note-react/src/note';
import acceptanceCriteria from '../../docs/note-docs/docs/acceptance-criteria.md?raw';
import componentMarkdown from '../../docs/note-docs/docs/component.md?raw';
import reactMeta from '../../docs/note-docs/stories/note.react.meta';
import tokens from '../../tokens/note-tokens/tokens.json';
import '../../components-css/note-css/src/note.scss';
import '../../components-css/note-css/src/test.scss';

const NoteDecorator: Decorator = (Story) => (
  <div className="test">
    <Story />
  </div>
);

const meta = {
  ...merge({
    ...reactMeta,

    args: {
      // Vul aan door developer
    },
    component: NoteComponent,
    decorators: [NoteDecorator],
    globals: {
      dir: 'ltr',
      lang: 'nl',
      title: 'Note van de dag',
    },
    parameters: {
      acceptanceCriteria,
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
      testResult: {
        notApplicable: [
          // Vul aan door toegankelijkheidsexpert
        ],
        notTested: [
          // Vul aan door toegankelijkheidsexpert
        ],
      },
      tokens,
    },
  }),
  title: 'Componenten/Note',
} satisfies Meta<typeof NoteComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SomeStory: Story = {
  name: 'Some Story',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Some Story`,
      },
    },
    testResult: {
      date: '2025-12-23',
      notTested: [
        // Vul aan door toegankelijkheidsexpert
      ],
      pass: [
        // Vul aan door toegankelijkheidsexpert
      ],
    },
  },
};
