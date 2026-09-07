import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import packageJSON from '../../components-css/color-sample-css/package.json';
import { ColorSample as ColorSampleComponent } from '@nl-design-system-candidate/color-sample-react';
import colorSampleMeta from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.css.meta';
import * as Stories from '@nl-design-system-candidate/color-sample-docs/stories/color-sample.stories';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';

const externalLinks = getExternalLinks('https://nldesignsystem.nl/color-sample', packageJSON.homepage);

const meta = {
  ...mergeCssMeta(colorSampleMeta, externalLinks),
  title: 'CSS Componenten/Color Sample',
  id: 'css-color-sample',
} satisfies Meta<typeof ColorSampleComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ColorSample = Stories.ColorSample;

const cssOnlySizeStyle: CSSProperties = {
  '--nl-color-sample-inline-size': '3rem',
  '--nl-color-sample-block-size': '3rem',
} as CSSProperties;

export const CssOnlySvgMetAangepasteGrootte: Story = {
  name: 'Color Sample als losse SVG, met een aangepaste grootte',
  args: { value: 'deepPink' },
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      description: {
        story:
          'Zonder React kan dezelfde SVG-markup als in de React-implementatie ook los in HTML gebruikt worden. Door een `viewBox` op de SVG te zetten past de inhoud zich, net als bij de React-implementatie, aan de aangepaste grootte aan in plaats van vast te blijven staan op de standaardgrootte van 16×16.',
      },
    },
  },
  render: () => (
    <svg
      className="nl-color-sample"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      preserveAspectRatio="none"
      style={{ ...cssOnlySizeStyle, color: 'deepPink' } as CSSProperties}
    >
      <path d="M0 0H32V32H0Z" fill="currentColor" />
    </svg>
  ),
};

export const CssOnlySvgRond: Story = {
  name: 'Color Sample als losse SVG, met een ronde vorm',
  args: { value: 'deeppink' },
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      description: {
        story:
          'De vorm van de losse SVG-markup is, net als bij de React-implementatie, aan te passen via `--nl-color-sample-border-radius`. Met een waarde van `50%` wordt de SVG rond.',
      },
    },
  },
  render: () => (
    <svg
      className="nl-color-sample"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      preserveAspectRatio="none"
      style={
        {
          ...cssOnlySizeStyle,
          color: 'deeppink',
          '--nl-color-sample-border-radius': '50%',
        } as CSSProperties
      }
    >
      <path d="M0 0H32V32H0Z" fill="currentColor" />
    </svg>
  ),
};
