import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/ordered-list-css/package.json';
import { OrderedList as OrderedListComponent } from '@nl-design-system-candidate/ordered-list-react';
import orderedListMeta from '@nl-design-system-candidate/ordered-list-docs/stories/ordered-list.css.meta';
// import * as Stories from '@nl-design-system-candidate/ordered-list-docs/stories/ordered-list.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta.js';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/ordered-list', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(orderedListMeta, externalLinks),
  title: 'CSS Componenten/Ordered List',
  id: 'css-ordered-list',
} satisfies Meta<typeof OrderedListComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
