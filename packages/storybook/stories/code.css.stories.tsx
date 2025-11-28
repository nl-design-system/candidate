import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/code-react/package.json';
import { Code as CodeComponent } from '@nl-design-system-candidate/code-react';
import codeMeta from '@nl-design-system-candidate/code-docs/stories/code.css.meta';
import * as Stories from '@nl-design-system-candidate/code-docs/stories/code.stories';
import { mergeCssMeta } from '../src/mergeCssMeta';

const meta = {
  ...mergeCssMeta(codeMeta, {
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
  }),
  title: 'CSS Componenten/Code',
  id: 'css-code',
} satisfies Meta<typeof CodeComponent>;

export default meta;

export const Code = Stories.Code;
