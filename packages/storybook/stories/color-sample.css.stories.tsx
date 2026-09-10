import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
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

type Story = StoryObj<typeof meta>;

export const ColorSample = Stories.ColorSample;

const cssOnlySizeStyle: CSSProperties = {
  '--nl-color-sample-inline-size': '3rem',
  '--nl-color-sample-block-size': '3rem',
};

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
    <DemoSvg
      style={{
        ...cssOnlySizeStyle,
        color: 'deepPink',
      }}
    />
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
    <DemoSvg
      style={{
        ...cssOnlySizeStyle,
        color: 'deeppink',
        '--nl-color-sample-border-radius': '50%',
      }}
    />
  ),
};

export const CssOnlyMetWaarde: Story = {
  name: 'Color Sample zonder React, met een ondoorzichtige kleur',
  args: { value: 'deeppink' },
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      description: {
        story:
          'Zonder React kan de Color Sample ook met alleen CSS gebruikt worden: geef een willekeurig element de class `nl-color-sample` en stel de standaard CSS-eigenschap `color` in op de gewenste kleur (net zoals de React-implementatie dat zelf ook doet). Een ondoorzichtige waarde bedekt het checkerboard-patroon volledig.',
      },
    },
  },
  render: () => <div className="nl-color-sample" style={{ ...cssOnlySizeStyle, color: 'deeppink' }} />,
};

export const CssOnlyMetSemiTransparanteWaarde: Story = {
  name: 'Color Sample zonder React, met een semi-transparante kleur',
  args: { value: '#ff14937f' },
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      description: {
        story:
          'Een semi-transparante `color`-waarde (`#ff14937f`) mengt met het checkerboard-patroon eronder, op dezelfde manier als bij de React-implementatie.',
      },
    },
  },
  render: () => <div className="nl-color-sample" style={{ ...cssOnlySizeStyle, color: '#ff14937f' }} />,
};

export const CssOnlyMetVolledigTransparanteWaarde: Story = {
  name: 'Color Sample zonder React, met een 100% transparante kleur',
  args: { value: '#ffffff00' },
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      description: {
        story:
          'Een volledig transparante `color`-waarde (`#ffffff00`) laat alleen het checkerboard-patroon zien, zonder kleur ervan bovenop.',
      },
    },
  },
  render: () => <div className="nl-color-sample" style={{ ...cssOnlySizeStyle, color: '#ffffff00' }} />,
};

export const CssOnlyZonderWaarde: Story = {
  name: 'Color Sample zonder React, zonder ingestelde kleur',
  args: { value: 'transparent' },
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      description: {
        story:
          'Zonder een eigen `color` erft het element de omringende tekstkleur (`currentColor`), in plaats van het neutrale checkerboard-patroon te tonen. Stel altijd zelf `color` in op het element om dit te voorkomen; gebruik `color: transparent` als er nog geen waarde gekozen is.',
      },
    },
  },
  render: () => <div className="nl-color-sample" style={cssOnlySizeStyle} />,
};

export const CssOnlyRond: Story = {
  name: 'Color Sample zonder React, met een ronde vorm',
  args: { value: 'deeppink' },
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      description: {
        story:
          'De vorm van de Color Sample is aan te passen via de custom property `--nl-color-sample-border-radius`. Met een waarde van `50%` wordt het element rond.',
      },
    },
  },
  render: () => (
    <div
      className="nl-color-sample"
      style={{
        ...cssOnlySizeStyle,
        color: 'deeppink',
        '--nl-color-sample-border-radius': '50%',
      }}
    />
  ),
};
