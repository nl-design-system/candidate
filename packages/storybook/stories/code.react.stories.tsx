import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/code-react/package.json';
import { Code as CodeComponent } from '@nl-design-system-candidate/code-react';
import codeMeta from '@nl-design-system-candidate/code-docs/stories/code.react.meta';
import * as Stories from '@nl-design-system-candidate/code-docs/stories/code.stories';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/code-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/button',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/button-react',
);

const meta = {
  ...merge(codeMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Code',
  id: 'code',
} satisfies Meta<typeof CodeComponent>;

export default meta;

export const Code = Stories.Code;
