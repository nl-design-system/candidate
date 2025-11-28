import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/code-block-react/package.json';
import { CodeBlock as CodeBlockComponent } from '@nl-design-system-candidate/code-block-react';
import codeBlockMeta from '@nl-design-system-candidate/code-block-docs/stories/code-block.react.meta';
import * as Stories from '@nl-design-system-candidate/code-block-docs/stories/code-block.stories';

const meta = {
  ...codeBlockMeta,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/code-block',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'React Componenten/Code Block',
  id: 'code-block',
} satisfies Meta<typeof CodeBlockComponent>;

export default meta;

export const CodeBlock = Stories.CodeBlock;
