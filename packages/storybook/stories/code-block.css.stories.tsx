import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/code-block-css/package.json';
import { CodeBlock as CodeBlockComponent } from '@nl-design-system-candidate/code-block-react';
import codeBlockMeta from '@nl-design-system-candidate/code-block-docs/stories/code-block.css.meta';
import * as Stories from '@nl-design-system-candidate/code-block-docs/stories/code-block.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/code-block', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(codeBlockMeta, externalLinks),
  title: 'CSS Componenten/Code Block',
  id: 'css-code-block',
} satisfies Meta<typeof CodeBlockComponent>;

export default meta;

export const CodeBlock = Stories.CodeBlock;
