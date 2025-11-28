import type { Meta } from '@storybook/react-vite';
import packageJSON from '../../components-react/button-react/package.json';
import { type ButtonProps } from '@nl-design-system-candidate/button-react';
import buttonMeta from '@nl-design-system-candidate/button-docs/stories/button.css.meta';
import * as Stories from '@nl-design-system-candidate/button-docs/stories/button.stories';
import '../../components-css/button-css/src/test.scss';
import { mergeCssMeta } from '../src/mergeCssMeta';

const meta = {
  ...mergeCssMeta(buttonMeta, {
    parameters: {
      externalLinks: [
        {
          name: 'Open op NL Design System',
          url: 'https://nldesignsystem.nl/button',
        },
        {
          name: 'Open op GitHub',
          url: packageJSON.homepage,
        },
      ],
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
