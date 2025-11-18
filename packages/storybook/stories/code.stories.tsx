import type { Meta } from '@storybook/react-vite';
import '../../components-css/code-css/src/code.scss';
import packageJSON from '../../components-react/code-react/package.json';
import { Code } from '../../components-react/code-react/src/code';
import * as Stories from '@nl-design-system-candidate/code-docs/stories/code.stories';
import codeMeta from '@nl-design-system-candidate/code-docs/stories/code.react.meta';

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
  title: 'Code',
} satisfies Meta<typeof Code>;

export default meta;

export const Default = Stories.Default;
