import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/new-component-react/package.json';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  NewComponent as NewComponentComponent,
  type NewComponentProps,
} from '@nl-design-system-candidate/new-component-react';
import newComponentMeta from '@nl-design-system-candidate/new-component-docs/stories/new-component.react.meta';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Stories from '@nl-design-system-candidate/new-component-docs/stories/new-component.stories';
import '../../components-css/new-component-css/src/test.scss';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useArgs } from 'storybook/preview-api';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/new-component-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/new-component',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/new-component-react',
);

const meta = {
  ...merge(newComponentMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/New Component',
  id: 'new-component',
} satisfies Meta<NewComponentProps>;

export default meta;

// export const SomeStory = Stories.SomeStory;
