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
import { CustomDocsStory } from '@nl-design-system-candidate/storybook-shared/src/custom-docs';
import { WCAG22_AA_LEVEL } from '@nl-design-system-candidate/storybook-shared/src/WcagTests';

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
    },
    parameters: {
      // TODO: When component is implemented, enable Chromatic
      chromatic: { disableSnapshot: true },
      acceptanceCriteria,
      docs: {
        components: {
          DocsStory: CustomDocsStory,
        },
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
          // TODO: Configure `notTested` with WCAG SC's that must explicitly be marked as "tested" for each story
          ...WCAG22_AA_LEVEL,
        ],
      },
      tokens,
    },
  }),
  title: 'Componenten/Note',
} satisfies Meta<typeof NoteComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Note: Story = {
  name: 'Note',
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Note',
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
