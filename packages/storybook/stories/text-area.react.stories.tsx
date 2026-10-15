import type { Meta } from '@storybook/react-vite';
import { merge } from 'lodash-es';
import packageJSON from '../../components-react/text-area-react/package.json';
import { TextArea as TextAreaComponent } from '@nl-design-system-candidate/text-area-react';
import textAreaMeta from '@nl-design-system-candidate/text-area-docs/stories/text-area.react.meta';
import '../../components-css/text-area-css/src/test.scss';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/text-area-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/text-area',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/text-area-react',
);

const meta = {
  ...merge(textAreaMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'React Componenten/Text Area',
  id: 'text-area',
} satisfies Meta<typeof TextAreaComponent>;

export default meta;

// export const TextArea = Stories.TextArea;
