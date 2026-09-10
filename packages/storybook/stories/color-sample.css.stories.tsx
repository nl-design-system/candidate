import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/color-sample-css/package.json';
import { ColorSample as ColorSampleComponent } from '@nl-design-system-candidate/color-sample-react';
import colorSampleMeta from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.css.meta';
import * as Stories from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/color-sample', packageJSON.homepage);
const DemoSvg = ({ style }: { style?: CSSProperties }) => (
  <svg
    className="nl-color-sample"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    preserveAspectRatio="none"
    style={style}
  >
    <path d="M0 0H32V32H0Z" fill="currentColor" />
  </svg>
);

const meta = {
  ...mergeCssMeta(colorSampleMeta, externalLinks),
  title: 'CSS Componenten/Color Sample',
  id: 'css-color-sample',
} satisfies Meta<typeof ColorSampleComponent>;

export default meta;

export const ColorSample = Stories.ColorSample;
