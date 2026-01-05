import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/code-css/package.json';
import { Code as CodeComponent } from '@nl-design-system-candidate/code-react';
import codeMeta from '@nl-design-system-candidate/code-docs/stories/code.css.meta';
import * as Stories from '@nl-design-system-candidate/code-docs/stories/code.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/code-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/button',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/code-css',
);

const meta = {
  ...mergeCssMeta(codeMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'CSS Componenten/Code',
  id: 'css-code',
} satisfies Meta<typeof CodeComponent>;

export default meta;

export const Code = Stories.Code;
