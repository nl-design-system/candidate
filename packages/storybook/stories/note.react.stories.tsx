import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/note-react/package.json';
import type { NoteProps } from '@nl-design-system-candidate/note-react';
import noteMeta from '@nl-design-system-candidate/note-docs/stories/note.react.meta';
import '../../components-css/note-css/src/test.scss';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/note-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/note',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/note-react',
);

const meta = {
  ...merge(noteMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Note',
  id: 'note',
} satisfies Meta<NoteProps>;

export default meta;

// export const SomeStory = Stories.SomeStory;
