import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/unordered-list-css/package.json';
import { UnorderedList as UnorderedListComponent } from '@nl-design-system-candidate/unordered-list-react';
import unorderedListMeta from '@nl-design-system-candidate/unordered-list-docs/stories/unordered-list.css.meta';
// import * as Stories from '@nl-design-system-candidate/unordered-list-docs/stories/unordered-list.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta.js';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/unordered-list', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(unorderedListMeta, externalLinks),
  title: 'CSS Componenten/Unordered List',
  id: 'css-unordered-list',
} satisfies Meta<typeof UnorderedListComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
