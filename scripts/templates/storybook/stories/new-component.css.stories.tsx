import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/new-component-css/package.json';
import { NewComponent as NewComponentComponent } from '@nl-design-system-candidate/new-component-react';
import newComponentMeta from '@nl-design-system-candidate/new-component-docs/stories/new-component.css.meta';
// import * as Stories from '@nl-design-system-candidate/new-component-docs/stories/new-component.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta.js';
import { getExternalLinks } from '../src/helpers/external-links.js';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/new-component', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(newComponentMeta, externalLinks),
  title: 'CSS Componenten/New Component',
  id: 'css-new-component',
} satisfies Meta<typeof NewComponentComponent>;

export default meta;

// export const SomeStory = Stories.SomeStory;
