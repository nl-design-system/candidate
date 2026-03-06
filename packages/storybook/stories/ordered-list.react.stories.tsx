import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/ordered-list-react/package.json';
import { OrderedList as OrderedListComponent } from '@nl-design-system-candidate/ordered-list-react';
import orderedListMeta from '@nl-design-system-candidate/ordered-list-docs/stories/ordered-list.react.meta';
// import * as Stories from '@nl-design-system-candidate/ordered-list-docs/stories/ordered-list.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/ordered-list', packageJSON.homepage);

const meta = {
  ...orderedListMeta,
  ...externalLinks,
  title: 'React Componenten/Ordered List',
  id: 'ordered-list',
} satisfies Meta<typeof OrderedListComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
