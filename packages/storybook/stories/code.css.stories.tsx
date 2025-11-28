import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/code-css/package.json';
import { Code as CodeComponent } from '@nl-design-system-candidate/code-react';
import codeMeta from '@nl-design-system-candidate/code-docs/stories/code.css.meta';
import * as Stories from '@nl-design-system-candidate/code-docs/stories/code.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/code', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(codeMeta, externalLinks),
  title: 'CSS Componenten/Code',
  id: 'css-code',
} satisfies Meta<typeof CodeComponent>;

export default meta;

export const Code = Stories.Code;
