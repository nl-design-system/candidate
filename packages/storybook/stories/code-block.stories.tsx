import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/code-block-react/package.json';
import { CodeBlock } from '../../components-react/code-block-react/src/code-block';
import * as Stories from '@nl-design-system-candidate/code-block-docs/stories/code-block.stories';
import codeBlockMeta from '@nl-design-system-candidate/code-block-docs/stories/code-block.react.meta';

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
  title: 'Code Block',
} satisfies Meta<typeof CodeBlock>;

export default meta;

export const Default = Stories.Default;
