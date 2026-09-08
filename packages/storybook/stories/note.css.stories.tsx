import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/note-css/package.json';
import { type NoteProps } from '@nl-design-system-candidate/note-react';
import noteMeta from '@nl-design-system-candidate/note-docs/stories/note.css.meta';
import '../../components-css/note-css/src/test.scss';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/note-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/note',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/note-css',
);

const meta = {
  ...mergeCssMeta(noteMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'CSS Componenten/Note',
  id: 'css-note',
} satisfies Meta<NoteProps>;

export default meta;

// export const SomeStory = Stories.SomeStory;
