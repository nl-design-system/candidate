import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/text-area-css/package.json';
import { TextArea as TextAreaComponent } from '@nl-design-system-candidate/text-area-react';
import textAreaMeta from '@nl-design-system-candidate/text-area-docs/stories/text-area.css.meta';
import '../../components-css/text-area-css/src/test.scss';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/text-area-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/text-area',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/text-area-css',
);

const meta = {
  ...mergeCssMeta(textAreaMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'CSS Componenten/Text Area',
  id: 'css-text-area',
} satisfies Meta<typeof TextAreaComponent>;

export default meta;

// export const TextArea = Stories.TextArea;
