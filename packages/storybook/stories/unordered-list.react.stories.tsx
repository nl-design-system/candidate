import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/unordered-list-react/package.json';
import { UnorderedList as UnorderedListComponent } from '@nl-design-system-candidate/unordered-list-react';
import unorderedListMeta from '@nl-design-system-candidate/unordered-list-docs/stories/unordered-list.react.meta';
// import * as Stories from '@nl-design-system-candidate/unordered-list-docs/stories/unordered-list.stories';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/unordered-list', packageJSON.homepage);

const meta = {
  ...unorderedListMeta,
  ...externalLinks,
  title: 'React Componenten/Unordered List',
  id: 'unordered-list',
} satisfies Meta<typeof UnorderedListComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
