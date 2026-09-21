import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/color-sample-react/package.json';
import { ColorSample as ColorSampleComponent } from '@nl-design-system-candidate/color-sample-react';
import colorSampleMeta from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.react.meta';
import * as Stories from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.stories';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/color-sample', packageJSON.homepage);

const meta = {
  ...colorSampleMeta,
  ...externalLinks,
  title: 'React Componenten/Color Sample',
  id: 'color-sample',
} satisfies Meta<typeof ColorSampleComponent>;

export default meta;

export const ColorSample = Stories.ColorSample;
