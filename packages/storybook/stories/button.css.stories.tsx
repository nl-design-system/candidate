import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-css/button-css/package.json';
import { type ButtonProps } from '@nl-design-system-candidate/button-react';
import buttonMeta from '@nl-design-system-candidate/button-docs/stories/button.css.meta';
import * as Stories from '@nl-design-system-candidate/button-docs/stories/button.stories';
import '../../components-css/button-css/src/test.scss';
import { mergeCssMeta } from '../src/helpers/merge-css-meta';
import { getExternalLinks } from '../src/helpers/external-links';
import description from '@nl-design-system-candidate/button-docs/docs/description.md?raw';

const externalLinks = getExternalLinks(
  'https://nldesignsystem.nl/button',
  packageJSON.homepage,
  'https://www.npmjs.com/package/@nl-design-system-candidate/button-css',
);

const meta = {
  ...mergeCssMeta(buttonMeta, externalLinks, {
    parameters: {
      docs: {
        subtitle: description,
      },
    },
  }),
  title: 'CSS Componenten/Button',
  id: 'css-button',
} satisfies Meta<ButtonProps>;

export default meta;

export const Button = Stories.Button;
export const PrimaryButton = Stories.PrimaryButton;
export const SecondaryButton = Stories.SecondaryButton;
export const SubtleButton = Stories.SubtleButton;
export const DisabledButton = Stories.DisabledButton;
export const IconVoorHetLabel = Stories.IconVoorHetLabel;
export const IconAchterHetLabel = Stories.IconAchterHetLabel;
export const GeformatteerdLabel = Stories.GeformatteerdLabel;
export const GeformatteerdLabelEnEenIcon = Stories.GeformatteerdLabelEnEenIcon;
export const ToggleButton = Stories.ToggleButton;
export const VolleBreedte = Stories.VolleBreedte;
