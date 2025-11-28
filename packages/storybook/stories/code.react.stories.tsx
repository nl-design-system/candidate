import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/code-react/package.json';
import { Code as CodeComponent } from '@nl-design-system-candidate/code-react';
import codeMeta from '@nl-design-system-candidate/code-docs/stories/code.react.meta';
import * as Stories from '@nl-design-system-candidate/code-docs/stories/code.stories';

const meta = {
  ...codeMeta,
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/code',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  title: 'React Componenten/Code',
  id: 'code',
} satisfies Meta<typeof CodeComponent>;

export default meta;

export const Code = Stories.Code;
