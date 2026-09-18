import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
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

type Story = StoryObj<typeof meta>;

export const ColorSample = Stories.ColorSample;

export const AangepasteGrootte: Story = {
  name: 'Color Sample met een aangepaste grootte',
  args: {
    value: '#ff14937f',
    style: {
      '--nl-color-sample-inline-size': '3rem',
      '--nl-color-sample-block-size': '3rem',
    } as CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          'De grootte van de Color Sample is aan te passen via de custom properties `--nl-color-sample-inline-size` en `--nl-color-sample-block-size`. De achtergrond (en transparantie, zoals hier bij deze semi-transparante kleur) vult hierbij altijd de volledige, aangepaste afmeting in plaats van vast te blijven staan op de standaardgrootte.',
      },
    },
  },
};
